import {Badge, Box, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {ProductDto} from "../../../../data/product/ProductDto.type.ts";
import {useNavigate} from "react-router-dom";

type Props = {
  getProductDto:ProductDto,
}


export default function SingleProduct({getProductDto}:Props){
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
            {
              getProductDto.hasStock ?
                <Typography gutterBottom
                            variant="body1"
                            component="div"
                            sx={{color:"#777777"}}
                >
                  {getProductDto.name}
                </Typography>
                :
              <Badge badgeContent="Sold Out" color="primary" >
              <Typography gutterBottom
              variant="body1"
              component="div"
              sx={{
                color:"#777777",
                mr:4
              }}
              >
                {getProductDto.name}
              </Typography>
        </Badge>
            }

            <Typography
              variant="body2"
              color="black">
              ${getProductDto.price.toLocaleString()}
            </Typography>
            {/*<Typography*/}
            {/*  variant="body2"*/}
            {/*  color="black">*/}
            {/*  Category:{getProductDto.category}*/}
            {/*</Typography>*/}
          </CardContent>
        </CardActionArea>
      </Card>
  )
}