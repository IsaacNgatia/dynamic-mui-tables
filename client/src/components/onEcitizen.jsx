import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function SetOnEcitizenTable({ services, addOnEcitizen }) {
  const handleChange = (e, index) => {
    addOnEcitizen(index, e.target.value);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: "70%" }} align="center">
              Service Name
            </StyledTableCell>
            <StyledTableCell>Is it on E-citzen or not?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((row) => (
            <StyledTableRow key={row.obj.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.obj.name}
              </StyledTableCell>
              <StyledTableCell>
                <Select
                  id="demo-simple-select"
                  sx={{ width: 100 }}
                  onChange={(e) => handleChange(e, row.obj.id)}
                >
                  <MenuItem value={1}>Yes</MenuItem>
                  <MenuItem value={0}>No</MenuItem>
                </Select>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
