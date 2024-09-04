import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import {Badge, Box, Paper, Stack, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import NewArrival from "../../../assets/img/NewArrival.gif";
import Bags from "../../../assets/img/bags.jpg";
import Chair from "../../../assets/img/Chair.jpg";

export default function PopoverButton() {

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id}  onClick={handleClick}>
        <img src={NewArrival} style={{
          height:"52px"
        }}/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {/*<Typography sx={{ p: 2 }}>The content of the Popover.</Typography>*/}
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={2} >

           <Box style={{
             display:"flex",
             justifyContent:"center",
             alignItems:"center"
           }}
           >
             <Badge badgeContent="New" color="primary" >
             <img src={Bags} style={{
               width:"80px"
             }}/>
             </Badge>
             <Typography variant="body2">Bags & Backpacks</Typography>
           </Box>

            <Divider orientation="vertical" variant="middle" flexItem />

            <Box style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
            >
              <Badge badgeContent="New" color="primary">
              <img src={Chair} style={{
                width:"80px"
              }}/>
              </Badge>
              <Typography variant="body2">Interior</Typography>
            </Box>
          </Stack>
        </Paper>
      </Popover>
    </div>
  );
}
