import {Box, IconButton, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Props ={
  quantity:number,
  handleMinus: () => void,
  handlePlus: () => void,
  isLoading?: boolean
}

export default function QuantitySelector({quantity,handleMinus,handlePlus, isLoading = false}:Props){
  return(
    <Stack direction="row" alignItems="">
      <IconButton
        onClick={handleMinus}
        disabled={isLoading}
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
        disabled={isLoading}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  )
}