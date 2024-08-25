import {createTheme, ThemeProvider} from "@mui/material/styles";

export default function BlackButton(){
  const blackTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#000000', // 黑色主色調
      },
    },
  });
  return(
    <ThemeProvider theme={blackTheme}>
    </ThemeProvider >
  )
}