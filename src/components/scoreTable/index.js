import { ScoreTableContainer } from "./scoreTableContainer";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { brown } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import leafIcon from "../../assets/leafIcon.png";

const rows = [
  { location: 3, score: 230 },
  { location: 2, score: 200 },
  { location: 1, score: 30 },
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: brown[500],
    color: theme.palette.common.white,
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
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
