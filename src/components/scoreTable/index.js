import { ScoreTableContainer } from "./scoreTableContainer";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { brown, green } from "@mui/material/colors";

//Import Image
import leafIcon from "../../assets/leafIcon.png";

import {
  loadUserScore,
  sendUserScore,
  loadAllUsersScore,
} from "../../services";
import { DATABASE_URL } from "../../firebase-config";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../controllers/user-context";

let rows = [];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: brown[500],
    color: theme.palette.common.white,
    textAlign: "center",
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: "100%",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: green[100],
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 2,
  },
}));

export const ScoreTable = () => {
  const { isLoggedIn } = useContext(UserContext);
  const userId = isLoggedIn.uid;

  const [userScore, setUserScore] = useState(null);
  const [allUserScore, setAllUserScore] = useState([]);

  useEffect(() => {
    loadUserScore(DATABASE_URL, userId)
      .then((r) => r.json())
      .then((data) => {
        const formatedData = Object.keys(data)
          .map((key) => data[key].total)
          .reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
        setUserScore(formatedData);
      });
    loadAllUsersScore(DATABASE_URL)
      .then((r) => r.json())
      .then((data) => {
        const formatedData = Object.keys(data)
          .map((key) => data[key].score)
          .sort((a, b) => b - a);
        setAllUserScore(formatedData);
      });
  }, []);

  useEffect(() => {
    sendUserScore(DATABASE_URL, userId, userScore);
    const userLocation = allUserScore.indexOf(userScore);
    if (userLocation === 0) {
      rows = [
        { location: 1, score: userScore },
        { location: 2, score: allUserScore[1] },
        { location: 3, score: allUserScore[2] },
      ];
    } else if (userLocation > 0) {
      rows = [
        { location: userLocation, score: allUserScore[userLocation - 1] },
        { location: userLocation + 1, score: userScore },
        { location: userLocation + 2, score: allUserScore[userLocation + 1] },
      ];
      console.log(rows);
    }
  }, [userScore, allUserScore]);

  return (
    <ScoreTableContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 80 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell align="right">Score</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.location}>
                <StyledTableCell component="th" scope="row">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    {row.location}
                    <img src={leafIcon} width={"30%"} height={"auto"}></img>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">{row.score}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ScoreTableContainer>
  );
};
