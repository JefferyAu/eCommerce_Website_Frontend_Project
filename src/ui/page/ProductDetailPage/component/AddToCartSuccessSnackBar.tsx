import {Alert, Snackbar} from "@mui/material";

type Props ={
  open:boolean,
  handleClose: ()=> void
}

export default function AddToCartSuccessSnackBar({open,handleClose}:Props){
  return(
    <Snackbar
      sx={{marginTop:"64px"}}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{vertical: "top",horizontal:"right"}}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        Item added to cart
      </Alert>
    </Snackbar>
  )
}