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
import { width } from "@mui/system";
import axios from "axios";

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

export default function SetTimelineTable({ manualServices, addTimeline }) {
  const [timelines, setTimelines] = React.useState([]);
  const handleChange = (e, index) => {
    addTimeline(index, e.target.value);
  };
  const fetchTimelines = async () => {
    const response = await axios.get("http://localhost:3000/api/get-timelines");
    setTimelines(response.data.data);
  };
  React.useEffect(() => {
    fetchTimelines();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: "70%" }} align="center">
              Manual Service
            </StyledTableCell>
            <StyledTableCell>Timeline</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {manualServices.map((row) => (
            <StyledTableRow key={row.obj.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.obj.name}
              </StyledTableCell>
              <StyledTableCell>
                <Select
                  id="select-timeline"
                  defaultValue={""}
                  sx={{ width: 150 }}
                  onChange={(e) => handleChange(e, row.obj.id)}
                >
                  {timelines.map((timeline) => (
                    <MenuItem key={timeline.id} value={timeline.id}>
                      {timeline.title}
                    </MenuItem>
                  ))}
                </Select>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
