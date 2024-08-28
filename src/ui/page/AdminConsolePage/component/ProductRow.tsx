import {Box, Button, ButtonGroup, TableCell, TableRow} from "@mui/material";
import {ProductDto} from "../../../../data/product/ProductDto.type.ts";
import * as ProductDtoApi from "../../../../api/ProductDtoApi.ts"
import {useState} from "react";

type Props = {
  getProductDto:ProductDto
  deleteProductDtoDetail:(pid:number)=>void
}

export default function ProductRow({getProductDto,deleteProductDtoDetail}:Props){

  const [isDeleting,setIsDeleting] = useState<boolean>(false);

  const handleProductDtoDetail = async () =>{
    setIsDeleting(true);
    await ProductDtoApi.deleteProductDtoDetail(getProductDto.pid);
    deleteProductDtoDetail(getProductDto.pid);
    setIsDeleting(false);
  }

  const buttons = [
    <Button key="one">View</Button>,
    <Button key="two" onClick={handleProductDtoDetail} disabled={isDeleting}>Delete</Button>,
  ];

  return(
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          {getProductDto.pid}
        </TableCell>
        <TableCell align="right">
          {getProductDto.name}
        </TableCell>
        <TableCell align="right">
          {getProductDto.category}
        </TableCell>
        <TableCell align="right">
          <Box
            sx={{
              width: "100px",
              height: 100,
              backgroundImage: `url(${getProductDto.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          >
          </Box>
        </TableCell>
        <TableCell align="right">
          ${getProductDto.price.toLocaleString()}
        </TableCell>
        <TableCell align="right">
          {getProductDto.hasStock? "有貨":"售罄"}
        </TableCell>
        <TableCell align="right">
          <Box
            sx={{
              display: 'flex',
              '& > *': {
                m: 1,
              },
            }}
          >
            <ButtonGroup
              orientation="vertical"
              aria-label="Vertical button group"
              variant="contained"
            >
              {buttons}
            </ButtonGroup>
          </Box>
        </TableCell>
      </TableRow>
    </>
  )
}