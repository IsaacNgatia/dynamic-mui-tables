import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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

export default function SetStatusTable({
  services,
  addStatus,
  setManual,
  manual,
  filter,
}) {
  const handleChange = (e, child) => {
    addStatus(child.id, e.target.value);
    if (e.target.value === 0) {
      setManual(child);
    } else {
      const newManual = manual
        .map((obj) => ({ ...obj }))
        .filter((item) => item.obj.id !== child.id);
      filter(newManual);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: "70%" }} align="center">
              Service Name
            </StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((row) => (
            <StyledTableRow key={row.obj.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.obj.name}
              </StyledTableCell>
              <StyledTableCell value={row.obj.id}>
                <Select
                  labelId="demo-simple-select-label"
                  defaultValue={null}
                  id="demo-simple-select"
                  sx={{ width: 100 }}
                  onChange={(e) => handleChange(e, row.obj)}
                >
                  <MenuItem value={0}>Manual</MenuItem>
                  <MenuItem value={1}>Digitized</MenuItem>
                </Select>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
