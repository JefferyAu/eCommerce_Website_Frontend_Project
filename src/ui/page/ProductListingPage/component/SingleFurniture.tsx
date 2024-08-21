
import {FurnitureDto} from "../../../../data/product/FurnitureDto.type.ts";
import {Box, Card, CardActionArea, CardContent, Chip, Link, Typography} from "@mui/material";

type Props = {
  getFurnitureDto:FurnitureDto
}

export default function SingleFurniture({getFurnitureDto}:Props){
  return(
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Box
            sx={{
              width: "100%",
              height: 240,
              backgroundImage: `url(${getFurnitureDto.imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            }}
          >
          </Box>
          <CardContent>
            <Link href={`/product/${getFurnitureDto.pid}`}>
            <Typography gutterBottom variant="h5" component="div">
              {getFurnitureDto.name}
            </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {getFurnitureDto.price}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">

              {getFurnitureDto.hasStock ? <Chip label="有貨" color="primary" />:
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