import { useEffect, useState, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { green } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

import { DATABASE_URL } from "../../firebase-config";
import {
  loadUserActivityData,
  loadUserScore,
  sendUserScore,
  totalCount,
} from "../../services";
import { UserContext } from "../../controllers/user-context";
import { MobileHistory } from "./MobileHistory";
import "./style.scss";

import './History.scss'


export const History = () => {
  const [rows, setRows] = useState([]);
  const [ isMobile, setIsMobile ] = useState (false);
  const { isLoggedIn } = useContext(UserContext);
  const [userId, setUserId] = useState(null)
  

  useEffect(() => {
    function handleResize () {

      if (window.innerWidth < 576) {
        setIsMobile(true)
      }
       if (window.innerWidth > 576) {
        setIsMobile(false)
        
      }
   
    }

    handleResize();

    window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      }

  }, []);

  useEffect (()=> {
    
    if ( isLoggedIn) {
      loadUserActivityData(isLoggedIn.uid)
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          const formattedData = Object.keys(data).map((key) => ({
            date: key,
            ...data[key],
          }));
          setRows(formattedData.slice(-10));
        }
      });


      setUserId(isLoggedIn.uid)
    }
  }, [isLoggedIn])


  const updateActivityInDatabase = (rows, index, userId) => {
    let activityAndTotal = {};
    const { date, ...rest } = rows[index];
    activityAndTotal = { ...rest };
    fetch(`${DATABASE_URL}/users/${userId}/${date}.json`, {
      method: "PUT",
      body: JSON.stringify(activityAndTotal),
    });
  };

  const handleClick = (event, index, name) => {
    
    const rowsCopy = [...rows];
    rowsCopy[index][name] = event.target.checked;
    setRows(calculateTotal(rowsCopy));
    updateActivityInDatabase(calculateTotal(rowsCopy), index, userId);
  };

  const calculateTotal = (rows) => {
    return rows.map((row) => {
      const total = totalCount(row);
      return { ...row, total };
    });
  };
  return (
    <>
      {isMobile ? (
        <MobileHistory handleClick={handleClick} rows={rows} />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Garbage segregation</TableCell>
                <TableCell>No plastic bags</TableCell>
                <TableCell>Eco clothes</TableCell>
                <TableCell>Public transport</TableCell>
                <TableCell>Eco action</TableCell>
                <TableCell>Reausable dishes</TableCell>
                <TableCell>Eco home</TableCell>
                <TableCell>Plant plants</TableCell>
                <TableCell>Eco food</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.date}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <b>{row.date}</b>
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Checkbox
                        checked={row.segregation}
                        onClick={(e) => {
                          handleClick(e, index, "segregation");
                        }}
                        color="primary"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Checkbox
                        checked={row.bags}
                        onClick={(e) => {
                          handleClick(e, index, "bags");
                        }}
                        color="primary"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Checkbox
                        checked={row.clothes}
                        onClick={(e) => {
                          handleClick(e, index, "clothes");
                        }}
                        color="primary"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Checkbox
                        checked={row.transport}
                        onClick={(e) => {
                          handleClick(e, index, "transport");
                        }}
                        color="primary"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Checkbox
                        checked={row.action}
                        onClick={(e) => {
                          handleClick(e, index, "action");
                        }}
                        color="primary"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Checkbox
                        checked={row.dishes}
                        onClick={(e) => {
                          handleClick(e, index, "dishes");
                        }}
                        color="primary"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Checkbox
                        checked={row.home}
                        onClick={(e) => {
                          handleClick(e, index, "home");
                        }}
                        color="primary"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Checkbox
                        checked={row.plants}
                        onClick={(e) => {
                          handleClick(e, index, "plants");
                        }}
                        color="primary"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">
                    {
                      <Checkbox
                        checked={row.food}
                        onClick={(e) => {
                          handleClick(e, index, "food");
                        }}
                        color="primary"
                      />
                    }
                  </TableCell>
                  <TableCell align="center">
                    <b>{row.total}</b>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
