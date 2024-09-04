import {ProductDetailDto} from "../../../../data/product/ProductDto.type.ts";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {ChangeEvent, useState} from "react";
import * as ProductDtoApi from "../../../../api/ProductDtoApi.ts";
import AddUpdateProductSuccessSnackBar from "./AddUpdateProductSuccessSnackBar.tsx";
import {useNavigate} from "react-router-dom";


type Props = {
  adminProductDetails:ProductDetailDto
}

export default function UpdateProductDetail({adminProductDetails}:Props){

  const [updateProductDto,setUpdateProductDto] = useState<ProductDetailDto>({
    pid: adminProductDetails.pid,
    name: adminProductDetails.name,
    description: adminProductDetails.description,
    imageUrl: adminProductDetails.imageUrl,
    price: adminProductDetails.price,
    stock: adminProductDetails.stock,
    category: adminProductDetails.category
  });

  const handleUpdateProductDto = (updateProductDto:ProductDetailDto) =>{
    setUpdateProductDto(updateProductDto);
  }

  const [snackbarOpen,setSnackbarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleProductDtoUpdateForm = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
    const { name, value } = event.target;

    // 转换 price 和 stock 为数字，确保处理空值情况
    const newValue = (name === 'price' || name === 'stock') ?
      (value ? Number(value) : 0) : // 如果值为空，则设为0
      value;

    handleUpdateProductDto({
      ...updateProductDto,
      [name]: newValue
    });
  }

 const handleUpdateProductDetailApi = async  (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    try {
      await ProductDtoApi.updateProductDtoDetail(adminProductDetails.pid,updateProductDto);
      setSnackbarOpen(true);
    }catch (err){
      console.error(err);
      navigate(`/permissionerror`)
    }
 }

  const handleSnackbarClose = () =>{
    setSnackbarOpen(false)
  }

  return(
    <>
      <Container>
        <Button
          type="submit"
          sx={{mt:4}}
          onClick={()=>(navigate(`/adminconsole`))}
        >
          Back to Admin Console
        </Button>
      <Box
        component="form"
        sx={{
        display:"grid",
        mt:3
      }}
      onSubmit={handleUpdateProductDetailApi}
      >
        <Typography variant="body1">Product ID {adminProductDetails.pid}</Typography>
        Name:
        <TextField
        required
        id="standard-required"
        label="Required"
        //defaultValue={adminProductDetails.name}
        variant="standard"
        name="name"
        value={updateProductDto.name}
        onChange={handleProductDtoUpdateForm}
      />
        Description:
        <TextField
      required
      id="standard-required"
      label="Required"
      //defaultValue={adminProductDetails.description}
      variant="standard"
      name="description"
      value={updateProductDto.description}
      onChange={handleProductDtoUpdateForm}
    />
        Image Url:
        <TextField
      required
      id="standard-required"
      label="Required"
      name="imageUrl"
      //defaultValue={adminProductDetails.imageUrl}
      variant="standard"
      value={updateProductDto.imageUrl}
      onChange={handleProductDtoUpdateForm}
    />
    Price:
        <TextField
      required
      id="standard-required"
      label="Required"
      name="price"
      //defaultValue={adminProductDetails.price}
      variant="standard"
      value={updateProductDto.price}
      onChange={handleProductDtoUpdateForm}
    />
     Stock:
        <TextField
      required
      id="standard-required"
      label="Required"
      name="stock"
      //defaultValue={adminProductDetails.stock}
      variant="standard"
      value={updateProductDto.stock}
      onChange={handleProductDtoUpdateForm}
    />
        Category:
        <TextField
          required
          id="standard-required"
          label="Required"
          name="category"
          //defaultValue={adminProductDetails.category}
          variant="standard"
          value={updateProductDto.category}
          onChange={handleProductDtoUpdateForm}
        />
        <Button type="submit" sx={{mt:2}}>
          Submit
        </Button>
      </Box>
      </Container>
      <AddUpdateProductSuccessSnackBar open={snackbarOpen} handleClose={handleSnackbarClose}/>
    </>
  )
}