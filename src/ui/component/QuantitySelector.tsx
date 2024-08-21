import {Box, IconButton, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// type Props ={
//   quantity:number,
//   handleMinus: () => void,
//   handlePlus: () => void,
// }

export default function QuantitySelector(){
  return(
    <Stack direction="row" alignItems="">
      <IconButton>
        <RemoveIcon/>
      </IconButton>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth={32}
      minHeight={32}
      >
        1
      </Box>
      <IconButton aria-label="delete">
        <AddIcon />
      </IconButton>
    </Stack>
  )
}