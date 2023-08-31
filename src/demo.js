import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

export default function BasicSelect() {
  const [theThing, setTheThing] = React.useState("None");

  const handleChange = (event) => {
    setTheThing(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose a thing</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={theThing}
          label="Choose a thing"
          onChange={handleChange}
        >
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"Meerkat"}>Meerkat</MenuItem>
          <MenuItem value={"Marshmallow"}>Marshmallow</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ padding: 2 }}>
        <Typography>The thing is: {theThing}</Typography>
      </Box>
    </Box>
  );
}
