import Header from "../../component/Header";
import {Container, Typography} from "@mui/material";

export default function PermissionErrorPage(){
  return(
    <>
    <Header/>
      <Container sx={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        height: "85vh"
      }}>
      <Typography variant="h5">You don't have permission to add, delete and update product </Typography>
      </Container>
    </>
  )
}