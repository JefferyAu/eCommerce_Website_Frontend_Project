import {Box, CircularProgress} from "@mui/material";


export default function LoadingContainer(){
  return(
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <CircularProgress />
    </Box>
  )
}