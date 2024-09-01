import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SignOutButton from "./SignOutButton.tsx";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import EmailIcon from '@mui/icons-material/Email';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const loginUser = useContext(LoginUserContext)
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings" style={{
          marginLeft:"0px",
        }}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <IconButton>
            <EmailIcon/>
          </IconButton>
          {loginUser?.email}
        </MenuItem>
        <MenuItem onClick={()=>(navigate(`/adminconsole`))}>
          <IconButton>
            <SupervisorAccountIcon/>
          </IconButton>
           Admin Console
        </MenuItem>
        <Divider />
        {/*<MenuItem onClick={handleClose}>*/}
        {/*  <ListItemIcon>*/}
        {/*    <Settings fontSize="small" />*/}
        {/*  </ListItemIcon>*/}
        {/*  Settings*/}
        {/*</MenuItem>*/}
      <SignOutButton/>
      </Menu>
    </React.Fragment>
  );
}
