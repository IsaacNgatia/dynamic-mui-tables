import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function SelectOwner({ owners, selected }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      isOptionEqualToValue={(o, v) => o.id === v.id}
      getOptionKey={(value) => value.id}
      options={owners}
      onChange={(e, v) => selected(v.id)}
      getOptionLabel={(option) => option.title}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Owner" />}
    />
  );
}
