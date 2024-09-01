import {Backdrop, CircularProgress} from "@mui/material";

type Props ={
  open: boolean
}

export default function LoadingBackdrop({open}:Props){
  return(
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}