import {AppBar, Box, Button, CircularProgress, IconButton, Toolbar, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartDrawer from "../ShoppingCartDrawer.tsx";

export default function Header(){
  const [drawerOpen,setDrawerOpen] = useState<boolean>(false);
  const loginUser = useContext(LoginUserContext);
  const navigate = useNavigate();

  const closeDrawer = () =>{
    setDrawerOpen(false);
  }

  const renderContainer=() =>{
    if(loginUser){
      return(
        <>
        <Typography variant="body1">{loginUser.email}</Typography>
        <IconButton
        onClick={()=>{
          setDrawerOpen(true);
        }}
        >
          <ShoppingCartIcon/>
        </IconButton>
        <Button
          color="error"
          variant="contained"
          onClick={()=>{
            FirebaseAuthService.handleSignOut()
          }}
        >
          Logout
        </Button>
        </>
        )
    }else if(loginUser === null){
      return <Button
        color="inherit"
        onClick={()=>{
        navigate('/login')
      }}>
        <Typography variant="body1" sx={{color:"black"}}>
          Sign in
        </Typography>
      </Button>
    }else {
      return(
        <CircularProgress color="inherit" />
        )
    }
  }

  return(
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundColor: "white"
      }}>
        <Toolbar >
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1 ,
            display: "flex",
            justifyContent: "center"
          }} >
            <Link
              to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
            >
              SAVOY
            </Link>
          </Typography>
          {renderContainer()}
        </Toolbar>
      </AppBar>
    </Box>
      <ShoppingCartDrawer open={drawerOpen} closeDrawer={closeDrawer}/>
    </>
  )
}