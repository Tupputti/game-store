import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getGameList } from "./api/hello";
import { PageContainer } from "./styles";

const Home: NextPage = () => {
  const [allGameList, setAllGameList] = useState<any>([]);

  const getGame = async () => {
    const gameList = await getGameList();
    setAllGameList(gameList);
    console.log("gameList", gameList);
  };
  useEffect(() => {
    if (allGameList.length === 0) {
      getGame();
    }
  }, [allGameList, getGame]);

  return (
    <>
      <PageContainer>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {allGameList.map((gameDetail: any) => (
            <Grid key={gameDetail.id} item xs={4} sm={4} md={3} lg={3}>
              <Card
                sx={{
                  background: "#292945",
                  minWidth: 345,
                  height: 400,
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <Link href="/GameDetail" color="inherit">
                  <CardMedia
                    sx={{ height: 200, width: "auto" }}
                    image={gameDetail.thumbnail}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{ color: "#43d2d8" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {gameDetail.title}
                    </Typography>
                    <Typography sx={{ color: "#ffffff" }}>
                      {gameDetail?.short_description.substring(0, 80)}...
                    </Typography>
                  </CardContent>
                </Link>
                <CardActions>
                  <Button
                    sx={{ position: "revert", background: "#ffffff" }}
                    size="small"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    sx={{ position: "revert", background: "#ffffff" }}
                    size="small"
                  >
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageContainer>
    </>
  );
};

export default Home;
