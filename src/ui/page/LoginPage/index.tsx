import Header from "../../component/Header";
import {Alert, Box, Button, Chip, CircularProgress, Container, Divider, TextField, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import {useNavigate} from "react-router-dom";
import {GoogleLoginButton} from "react-social-login-buttons";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";

export default function LoginPage(){
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] =useState<string>("");
  const [isLoginFailed,setIsLoginFailed] = useState<boolean>(false);
  const [isLoggingIn,setIsLoggingIn] = useState<boolean>(false);

  const loginUser = useContext(LoginUserContext);

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
      setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setPassword(event.target.value)
  }

  const handleSignInWithEmailAndPassword = async  (event: React.FormEvent<HTMLFormElement>) =>{
    setIsLoggingIn(true);
    event.preventDefault();
    const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email,password);
    setIsLoggingIn(false);
    if(loginResult){
      navigate(-1);
    }else{
      setIsLoginFailed(true);
    }
  }

  useEffect(
    ()=>{
      if(loginUser){
      navigate("/")
    }
    },[loginUser])

  const handleSignInWithGoogle = async () => {
    const loginResult = await FirebaseAuthService.handleSignInWithGoogle();
    if(loginResult){
      navigate(-1);
    }
  }

  const renderLoginButton = () =>{
    if(!isLoggingIn){
      return(
        <Button
          variant="contained"
          fullWidth
          type="submit"
        >
          Login
        </Button>
      )
    } else{
      return (
        <>
        <Button
        variant="contained"
        fullWidth
        type="submit"
        disabled
        >
          Login
        <CircularProgress />
        </Button>
        </>
      )
    }
  }

  return(
    <>
    <Header/>
      <Container sx={{
        mt:20,
        mb:20
      }}>

        <Box component="form" onSubmit={handleSignInWithEmailAndPassword}
        >
          {
            isLoginFailed &&
              <Alert severity="error" sx={{my: 2}}>Login Failed, please try again</Alert>
          }
          <Typography variant="h4"
          sx={{
            display:"grid",
            justifyContent:"center"
          }}
          >Sign In
          </Typography>
          <TextField
           type="email"
           label="Email"
           fullWidth
           margin={"normal"}
           value={email}
           onChange={handleEmailChange}
          />
          <TextField
            type="password"
            label="Password"
            fullWidth
            margin={"normal"}
            value={password}
            onChange={handlePasswordChange}
            sx={{
              mb:3
            }}
          />
          {renderLoginButton()}
          <Divider
            sx={{
              my:4,
              mb:4
            }}
          >
            <Chip label="OR" size="small" />
          </Divider>
          <GoogleLoginButton
            onClick={handleSignInWithGoogle} />
        </Box>
      </Container>
    </>
  )
}