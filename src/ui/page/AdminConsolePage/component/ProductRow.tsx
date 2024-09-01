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

  const baseUrl = "http://localhost:5173"

  const handleNewProductClick = () => {
    window.open(`${baseUrl}/product/${getProductDto.pid}`, '_blank', 'noopener,noreferrer');
  };

  const handleUpdateProductClick = () =>{
    window.open(`${baseUrl}/adminconsole/${getProductDto.pid}`, 'noopener,noreferrer');
  }

  const buttons = [
    <Button key="one" onClick={handleNewProductClick}>View</Button>,
    <Button key="two" onClick={handleUpdateProductClick}>Edit</Button>,
    <Button key="three" onClick={handleProductDtoDetail} disabled={isDeleting}>Delete</Button>,
  ];

  return(
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          {getProductDto.pid}
        </TableCell>
        <TableCell >
          {getProductDto.name}
        </TableCell>
        <TableCell >
          {getProductDto.category}
        </TableCell>
        <TableCell >
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
        <TableCell >
          ${getProductDto.price.toLocaleString()}
        </TableCell>
        <TableCell >
          {getProductDto.hasStock? "有貨":"售罄"}
        </TableCell>
        <TableCell >
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
            >
              {buttons}
            </ButtonGroup>
          </Box>
        </TableCell>
      </TableRow>
    </>
  )
}