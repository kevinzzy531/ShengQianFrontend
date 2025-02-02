import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CategorySelect = ({selectedCategory, setSelectedCategory}) => {
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select an option</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={selectedCategory}
        onChange={handleChange}
      >
        <MenuItem value={"option1"}>Option 1</MenuItem>
        <MenuItem value={"option2"}>Option 2</MenuItem>
        <MenuItem value={"option3"}>Option 3</MenuItem>
      </Select>
    </FormControl>
  )
};

export default CategorySelect;

