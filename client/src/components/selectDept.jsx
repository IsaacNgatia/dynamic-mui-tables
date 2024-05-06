import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function SelectDepartment({ departments, selected }) {
  return (
    <Autocomplete
      disablePortal
      isOptionEqualToValue={(o, v) => o.id === v.id}
      id="combo-box-demo"
      options={departments}
      sx={{ width: "100%" }}
      onChange={(e, v) => selected(v.id)}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label="Department" />}
    />
  );
}
