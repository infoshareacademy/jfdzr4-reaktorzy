import { useState } from "react";
import { CompressOutlined } from "@mui/icons-material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import "./MobileHistory.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { green } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

export const MobileHistory = ({ rows, handleClick }) => {
  const [activeRow, setActiveRow] = useState(0);

  const handleLeftArrow = () => {
    if (activeRow === 0) return;

    setActiveRow(activeRow - 1);
  };

  const handleRightArrow = () => {
    if (activeRow === rows.length - 1) return;

    setActiveRow(activeRow + 1);
  };

  if (!rows.length) return null;

  return (
    <>
      <div className="mobile-history-arrows-container-button">
        <button disabled={activeRow === 0}>
          <KeyboardArrowLeftOutlinedIcon
            color="primary"
            fontSize="large"
            onClick={handleLeftArrow}
          />
        </button>
        <div className="mobile-history-data">{rows[activeRow].date}</div>
        <button disabled={activeRow === rows.length - 1}>
          <KeyboardArrowRightOutlinedIcon
            color="primary"
            fontSize="large"
            onClick={handleRightArrow}
          />
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Checkbox</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <>
              <TableRow>
                <TableCell component="th" scope="row">
                  Garbage segregation
                </TableCell>
                <TableCell align="center">
                  {
                    <Checkbox
                      checked={rows[activeRow].segregation || false}
                      onClick={(e) => {
                        handleClick(e, activeRow, "segregation");
                      }}
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  No plastic bags
                </TableCell>
                <TableCell align="center">
                  {
                    <Checkbox
                      checked={rows[activeRow].bags || false}
                      onClick={(e) => {
                        handleClick(e, activeRow, "bags");
                      }}
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Eco clothes
                </TableCell>
                <TableCell align="center">
                  {
                    <Checkbox
                      checked={rows[activeRow].clothes || false}
                      onClick={(e) => {
                        handleClick(e, activeRow, "clothes");
                      }}
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Public transport
                </TableCell>
                <TableCell align="center">
                  {
                    <Checkbox
                      checked={rows[activeRow].transport || false}
                      onClick={(e) => {
                        handleClick(e, activeRow, "transport");
                      }}
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Eco action
                </TableCell>
                <TableCell align="center">
                  {
                    <Checkbox
                      checked={rows[activeRow].action || false}
                      onClick={(e) => {
                        handleClick(e, activeRow, "action");
                      }}
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Reausable dishes
                </TableCell>
                <TableCell align="center">
                  {
                    <Checkbox
                      checked={rows[activeRow].dishes || false}
                      onClick={(e) => {
                        handleClick(e, activeRow, "dishes");
                      }}
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Eco home
                </TableCell>
                <TableCell align="center">
                  {
                    <Checkbox
                      checked={rows[activeRow].home || false}
                      onClick={(e) => {
                        handleClick(e, activeRow, "home");
                      }}
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Plant plants
                </TableCell>
                <TableCell align="center">
                  {
                    <Checkbox
                      checked={rows[activeRow].plants || false}
                      onClick={(e) => {
                        handleClick(e, activeRow, "plants");
                      }}
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Eco food
                </TableCell>
                <TableCell align="center">
                  {
                    <Checkbox
                      checked={rows[activeRow].food || false}
                      onClick={(e) => {
                        handleClick(e, activeRow, "food");
                      }}
                      color="primary"
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Total
                </TableCell>
                <TableCell align="center">
                  <b>{rows[activeRow].total} </b>
                </TableCell>
              </TableRow>
            </>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
