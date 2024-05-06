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
import axios from "axios";
import { TextField } from "@mui/material";

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

export default function SelectPolicyTable({ data, onDataChange }) {
  const [policies, setPolicies] = React.useState([]);
  const [policyId, setPolicyId] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [requireChanges, setRequireChanges] = React.useState([]);

  const handleStatusChange = (event, index) => {
    const newData = [...data];
    newData.map((o) => (o.id === index ? (o.status = event.target.value) : o));
    onDataChange(newData);
    // newData[index - 1].status = event.target.value;
    // onDataChange(newData);
  };

  const handleCommentChange = (event, index) => {
    const newData = [...data];
    newData.map((o) => (o.id === index ? (o.comment = event.target.value) : o));
    onDataChange(newData);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              Guiding Legal Instrument/policy
            </StyledTableCell>
            <StyledTableCell>
              Does it require changes in order to enhance service delivery?
            </StyledTableCell>
            <StyledTableCell>
              If yes, indicate the change required.
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={""}
                  sx={{ width: 100 }}
                  onChange={(e) => handleStatusChange(e, row.id)}
                >
                  <MenuItem value={1}>Yes</MenuItem>
                  <MenuItem value={0}>No</MenuItem>
                </Select>
              </StyledTableCell>
              <StyledTableCell>
                <TextField
                  id="filled-multiline-static"
                  label="Suggestion"
                  multiline
                  rows={4}
                  onChange={(e) => handleCommentChange(e, row.id)}
                  variant="filled"
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
