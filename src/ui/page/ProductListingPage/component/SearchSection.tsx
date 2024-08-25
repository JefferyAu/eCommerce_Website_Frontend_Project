import {Box, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


export default function SearchSection(){
  return(
    <>
      <Box sx={{
        flexGrow: 1,
        mt: 6,
        mb: 6
      }}>
        <Grid container spacing={2}>
          <Grid xs={8} style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}>
            <Typography>All</Typography>
            /<Typography>Bags & Backpacks</Typography>
            /<Typography>Decoration</Typography>
            /<Typography>Essentials</Typography>
            /<Typography>Interior</Typography>
          </Grid>
          <Grid xs={4} sx={{
            display:"flex",
            justifyContent: "flex-end",
            padding: 0
          }}>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}