import {Box, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {ProductDto} from "../../../../data/product/ProductDto.type.ts";
import {useNavigate} from "react-router-dom";

type Props = {
  getProductDto:ProductDto
}



export default function SingleFurniture({getProductDto}:Props){
  const navigate = useNavigate();

  return(
      <Card sx={{
        width: 345,
        backgroundColor:"#EEEEEE"
      }}>
        <CardActionArea
          onClick={()=>{navigate(`/product/${getProductDto.pid}`)}}
        >
          <Box
            sx={{
              width: "100%",
              height: 240,
              backgroundImage: `url(${getProductDto.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          >
          </Box>
          <CardContent>

            <Typography gutterBottom
             variant="body1"
             component="div"
              sx={{color:"#777777"}}
            >
              {getProductDto.name}

            </Typography>
            <Typography
              variant="body2"
              color="black">
              ${getProductDto.price.toLocaleString()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}