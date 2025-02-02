import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const categories = ["Grocery", "Dine Out", "Transportation"];

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
        {categories.map((category, index) => (
          <MenuItem key={index} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
};

export default CategorySelect;

