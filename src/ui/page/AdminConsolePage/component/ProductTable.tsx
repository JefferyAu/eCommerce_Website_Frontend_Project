import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import ProductRow from "./ProductRow.tsx";
import {ProductDto} from "../../../../data/product/ProductDto.type.ts";

type Props = {
  getProductDtoList: ProductDto[]
  deleteProductDtoDetail:(pid:number)=>void
}

export default function ProductTable({getProductDtoList,
                                       deleteProductDtoDetail}:Props){

  return(
    <>
      <Typography variant="h5">
        Product List
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Image Url</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Setting</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              getProductDtoList
                .sort((a, b) => (a.pid > b.pid ? -1 : 1))
                .map((value)=>(
                <ProductRow key={value.pid}
                            getProductDto={value}
                            deleteProductDtoDetail={deleteProductDtoDetail}
                />
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}