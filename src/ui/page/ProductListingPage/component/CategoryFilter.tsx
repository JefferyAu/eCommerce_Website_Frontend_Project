import {Box, FormControl, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  categoryFilter:string,
  handleCategoryFilterChange:(categoryFilter:string)=>void
}

export default function CategoryFilter({
                                         categoryFilter,
                                         handleCategoryFilterChange
                                       }:Props){

  const handleSelectChange = (event: SelectChangeEvent) =>{
    handleCategoryFilterChange(event.target.value);
  }

  return(
    <>
      <Box >
        <FormControl sx={{
          width:"208px",
          mb:3
        }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            onChange={handleSelectChange}
            value={categoryFilter}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Bags_Backpacks">Bags & Backpacks</MenuItem>
            <MenuItem value="Decoration">Decoration</MenuItem>
            <MenuItem value="Essentials">Essentials</MenuItem>
            <MenuItem value="Interior">Interior</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  )
}