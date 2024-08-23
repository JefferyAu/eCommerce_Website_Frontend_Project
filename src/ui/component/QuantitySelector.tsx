import {Box, IconButton, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Props ={
  quantity:number,
  handleMinus: () => void,
  handlePlus: () => void,
}

export default function QuantitySelector({quantity,handleMinus,handlePlus}:Props){
  return(
    <Stack direction="row" alignItems="">
      <IconButton
        onClick={handleMinus}
      >
        <RemoveIcon/>
      </IconButton>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth={32}
      minHeight={32}
      >
        {quantity}
      </Box>
      <IconButton
        onClick={handlePlus}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  )
}