import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import { Link } from "react-router-dom";


export default function Header(){
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
            >
              IKEA
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}