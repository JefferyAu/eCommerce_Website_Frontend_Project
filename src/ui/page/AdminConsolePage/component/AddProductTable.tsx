import {Box, Button, FormControl, InputLabel, Select, SelectChangeEvent, TextField, Typography} from "@mui/material";
import {ProductDetailDto} from "../../../../data/product/ProductDto.type.ts";
import * as ProductDtoApi from "../../../../api/ProductDtoApi.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import AddToCartSuccessSnackBar from "./AddNewProductSuccessSnackBar.tsx";
import MenuItem from "@mui/material/MenuItem";
import { ChangeEvent } from 'react';

type Props = {
  addProductDto:ProductDetailDto,
  handleAddProductDtoChange:(addProductDto:ProductDetailDto)=>void
}

export default function AddProductTable({addProductDto,
                                          handleAddProductDtoChange,
                                          }:Props){

  const navigate = useNavigate();
  const [snackbarOpen,setSnackbarOpen] = useState<boolean>(false);

  const handleAddProductDtoFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const { name, value } = event.target;

    // 转换 price 和 stock 为数字，确保处理空值情况
    const newValue = (name === 'price' || name === 'stock') ?
      (value ? Number(value) : 0) : // 如果值为空，则设为0
      value;

    handleAddProductDtoChange({
      ...addProductDto,
      [name]: newValue
    });
  };


  const handlePostProductApi = async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    try {
      await ProductDtoApi.addProductDtoDetail(addProductDto);
      setSnackbarOpen(true);
    }catch (err){
      console.log(err);
      navigate(`/permissionerror`)
    }
  }

  const handleSnackbarClose = () =>{
    setSnackbarOpen(false)
  }

  return(
    <>
      <Typography variant="h5">
        Add New Product
      </Typography>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' }
        }}
        style={{
          display:"grid",
          marginTop:"10px"
        }}
        noValidate
        autoComplete="off"
        onSubmit={handlePostProductApi}
      >
        <TextField
          required
          id="outlined-basic" name="name" label="Name" variant="outlined"
         value={addProductDto.name}
         onChange={handleAddProductDtoFormChange}
        />
        <TextField id="outlined-basic" name="description" label="Description" variant="outlined"
        value={addProductDto.description}
        onChange={handleAddProductDtoFormChange}
        />
        <TextField id="outlined-basic" name="imageUrl" label="Image Url" variant="outlined"
        value={addProductDto.imageUrl}
        onChange={handleAddProductDtoFormChange}
        />
        <TextField id="outlined-basic" name="price" label="Price" variant="outlined"
        value={addProductDto.price}
         onChange={handleAddProductDtoFormChange}
        />
        <TextField id="outlined-basic" name="stock" label="Stock" variant="outlined"
        value={addProductDto.stock}
        onChange={handleAddProductDtoFormChange}
        />
        <FormControl sx={{
          width:"208px",
          mb:3
        }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            name="category"
            value={addProductDto.category}
            onChange={handleAddProductDtoFormChange}
          >
            <MenuItem value="Bags_Backpacks" >Bags & Backpacks</MenuItem>
            <MenuItem value="Decoration">Decoration</MenuItem>
            <MenuItem value="Essentials">Essentials</MenuItem>
            <MenuItem value="Interior">Interior</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit">
          Submit
        </Button>
      </Box>
      <AddToCartSuccessSnackBar open={snackbarOpen} handleClose={handleSnackbarClose}/>
    </>
  )
}