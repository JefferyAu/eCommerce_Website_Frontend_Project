import {AppBar, Box, Button, CircularProgress, Toolbar, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"

export default function Header(){
  const loginUser = useContext(LoginUserContext);
  const navigate = useNavigate();

  const renderContainer=() =>{
    if(loginUser){
      return(
        <>
        <Typography variant="body1">{loginUser.email}</Typography>
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
        Login
      </Button>
    }else {
      return(
        <CircularProgress color="inherit" />
        )
    }
  }

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
            >
              IKEA
            </Link>
          </Typography>
          {renderContainer()}
        </Toolbar>
      </AppBar>
    </Box>
  )
}