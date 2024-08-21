import {Box} from "@mui/material";
import Header from "../../component/Header";

export default function ErrorPage(){
  return(
    <>
    <Header/>
      <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh"
      }}
      >
        <Box style={{
          width: "600px",
          height: "600px",
          backgroundImage: "url('https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain"
        }}>
          {/*<Typography variant="body1">*/}
          {/*  Back To <Button href="/" variant="contained">Home</Button>*/}
          {/*</Typography>*/}
        </Box>
      </Box>
    </>
  )
}