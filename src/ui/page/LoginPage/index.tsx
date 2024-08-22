import Header from "../../component/Header";
import {Alert, Box, Button, Container, TextField} from "@mui/material";
import {useState} from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import {useNavigate} from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginPage(){
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] =useState<string>("");
  const [isLoginFailed,setIsLoginFailed] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
      setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setPassword(event.target.value)
  }

  const handleSignInWithEmailAndPassword = async  (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email,password);
    if(loginResult){
      navigate(-1);
    }else{
      setIsLoginFailed(true);
    }
  }

  const handleSignInWithGoogle = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const loginResult = await FirebaseAuthService.handleSignInWithGoogle();
    if(loginResult){
      navigate(-1);
    }else {
      setIsLoginFailed(true);
    }
  }

  return(
    <>
    <Header/>
      <Container>
        <Box component="form" onSubmit={handleSignInWithEmailAndPassword}>
          {
            isLoginFailed &&
              <Alert severity="error" sx={{my: 2}}>Login Failed, please try again</Alert>
          }
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
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
          >
            Login
          </Button>
          <Button sx={{
            mt:2
          }}
            variant="contained"
            onClick={handleSignInWithGoogle}
          >
          <GoogleIcon/>
          </Button>
        </Box>
      </Container>
    </>
  )
}