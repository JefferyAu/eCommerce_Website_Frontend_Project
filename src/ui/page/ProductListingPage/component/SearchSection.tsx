import {Box, TextField, } from "@mui/material";

type Props = {
  productNameFilter:string,
  handleProductNameFilterChange: (productNameFilter:string)=> void
}

export default function SearchSection({
                                        productNameFilter,
                                        handleProductNameFilterChange
                                      }:Props){

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    handleProductNameFilterChange(event.target.value);
  }

  return(
    <>
      {/*<Box sx={{*/}
      {/*  flexGrow: 1,*/}
      {/*  mt: 6,*/}
      {/*  mb: 6*/}
      {/*}}>*/}
      {/*  <Grid container spacing={2}>*/}
      {/*    <Grid xs={8} style={{*/}
      {/*      display: "flex",*/}
      {/*      justifyContent: "space-evenly",*/}
      {/*      alignItems: "center"*/}
      {/*    }}>*/}
      {/*      <Typography>All</Typography>*/}
      {/*      /<Typography>Bags & Backpacks</Typography>*/}
      {/*      /<Typography>Decoration</Typography>*/}
      {/*      /<Typography>Essentials</Typography>*/}
      {/*      /<Typography>Interior</Typography>*/}
      {/*    </Grid>*/}
      {/*    <Grid sx={{*/}
      {/*      display:"flex",*/}
      {/*      justifyContent: "flex-end",*/}
      {/*      padding: 0*/}
      {/*    }}>*/}
      {/*      <TextField id="outlined-basic" label="Search" variant="outlined" />*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Box>*/}
      <Box
       sx={{
         // flexGrow: 1,
         // mr:2,
         // mt:4,
         // mb:4
       }}
      >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={productNameFilter}
        onChange={handleTextFieldChange}
      />
      </Box>
    </>
  )
}