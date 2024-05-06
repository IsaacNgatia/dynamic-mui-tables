import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function SelectService({ selectedId, index, object }) {
  const [services, setServices] = React.useState([]);

  const options = services.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  const fetchServices = async () => {
    const response = await axios.get("http://localhost:3000/api/get-services");
    setServices(response.data.data);
  };
  React.useEffect(() => {
    fetchServices();
  }, []);
  const handleSelectService = (e, v, r) => {
    if (r === "selectOption") {
      selectedId(v[index].id);
      object(v[index]);
    }
  };

  return (
    <Autocomplete
      multiple
      onChange={handleSelectService}
      getOptionKey={(value) => value.id}
      isOptionEqualToValue={(o, v) => o.id === v.id}
      limitTags={4}
      loadingText={"Loading ..."}
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Services" />}
    />
  );
}
