import SingleProduct from "./SingleProduct.tsx";
import Grid from '@mui/material/Unstable_Grid2';
import {ProductDto} from "../../../../data/product/ProductDto.type.ts";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {FormControl, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

type Props ={
  getProductDtoList:ProductDto[],
  productNameFilter:string,
  categoryFilter:string,
  page:number,
  handlePageChange:(page:number)=>void,
  productPerPage:number,
  handleProductPerPage:(productPerPage:number)=>void
}

export default function ProductListContainer({
                                               getProductDtoList,
                                               productNameFilter,
                                               categoryFilter,
                                               page,
                                               handlePageChange,
                                               productPerPage,
                                               handleProductPerPage
                                                }:Props){

  // const itemsPerPage = 10;

  const handlePaginationChange = (_event: React.ChangeEvent<unknown>, value: number) =>{
    handlePageChange(value);
  }

  const handlePagePerPageFilterChange = (event: SelectChangeEvent<number>) =>{
    const value = Number(event.target.value);
    handleProductPerPage(value)
  }

  const startIndex = (page - 1) * productPerPage;
  const currentGetProductDtoList = getProductDtoList.slice(startIndex, startIndex + productPerPage);
  return(
    <>
      <FormControl variant="outlined" style={{
        marginBottom: '16px',
        width: '200px'
      }}
      >
        <InputLabel>Product per page</InputLabel>
        <Select
          label="Items per page"
          value={productPerPage}
          onChange={handlePagePerPageFilterChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        {
          currentGetProductDtoList.filter((value)=>(
            value.name.toLowerCase().includes(productNameFilter.toLowerCase())
            && value.category.includes(categoryFilter)
          ))
         .map((value) => (
            <Grid  md={4} sm={6} xs={12} display="flex" justifyContent="center" alignItems="center">
            <SingleProduct key={value.pid} getProductDto={value}/>
            </Grid>
          ))
        }
      </Grid>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(getProductDtoList.length / productPerPage)}
          page={page}
          onChange={handlePaginationChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </>
  )
}