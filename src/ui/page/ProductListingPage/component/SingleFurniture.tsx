import {Box, Card, CardActionArea, CardContent, Chip, Link, Typography} from "@mui/material";
import {ProductDto} from "../../../../data/product/ProductDto.type.ts";
import {useNavigate} from "react-router-dom";

type Props = {
  getProductDto:ProductDto
}

export default function SingleFurniture({getProductDto}:Props){
  const navigate = useNavigate();

  return(
      <Card sx={{ maxWidth: 345 }}>
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
            <Link href={`/product/${getProductDto.pid}`}>
            <Typography gutterBottom variant="h5" component="div">
              {getProductDto.name}
            </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {getProductDto.price}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">

              {getProductDto.hasStock ? <Chip label="有貨" color="primary" />:
                <Chip
                  label="售罄"
                  sx={{
                    backgroundColor: '#800000',
                    color: 'white', // 可以選擇設置文字顏色
                  }}
                />}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  )
}