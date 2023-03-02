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

const Home: NextPage = () => {
  const [allGameList, _setAllGameList] = useState<any>([
    {
      price: 100,
      id: 540,
      title: "Overwatch 2",
      thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
      short_description:
        "A hero-focused first-person team shooter from Blizzard Entertainment.",
      game_url: "https://www.freetogame.com/open/overwatch-2",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Activision Blizzard",
      developer: "Blizzard Entertainment",
      release_date: "2022-10-04",
      freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
    },
    {
      price: 100,
      id: 521,
      title: "Diablo Immortal",
      thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
      short_description:
        "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
      game_url: "https://www.freetogame.com/open/diablo-immortal",
      genre: "MMOARPG",
      platform: "PC (Windows)",
      publisher: "Blizzard Entertainment",
      developer: "Blizzard Entertainment",
      release_date: "2022-06-02",
      freetogame_profile_url: "https://www.freetogame.com/diablo-immortal",
    },
    {
      price: 100,
      id: 517,
      title: "Lost Ark",
      thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
      short_description:
        "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
      game_url: "https://www.freetogame.com/open/lost-ark",
      genre: "ARPG",
      platform: "PC (Windows)",
      publisher: "Amazon Games",
      developer: "Smilegate RPG",
      release_date: "2022-02-11",
      freetogame_profile_url: "https://www.freetogame.com/lost-ark",
    },
    {
      price: 100,
      id: 516,
      title: "PUBG: BATTLEGROUNDS",
      thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
      short_description:
        "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
      game_url: "https://www.freetogame.com/open/pubg",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "KRAFTON, Inc.",
      developer: "KRAFTON, Inc.",
      release_date: "2022-01-12",
      freetogame_profile_url: "https://www.freetogame.com/pubg",
    },
    {
      price: 100,
      id: 508,
      title: "Enlisted",
      thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
      short_description:
        "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
      game_url: "https://www.freetogame.com/open/enlisted",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Gaijin Entertainment",
      developer: "Darkflow Software",
      release_date: "2021-04-08",
      freetogame_profile_url: "https://www.freetogame.com/enlisted",
    },
    {
      price: 100,
      id: 345,
      title: "Forge of Empires",
      thumbnail: "https://www.freetogame.com/g/345/thumbnail.jpg",
      short_description:
        "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
      game_url: "https://www.freetogame.com/open/forge-of-empires",
      genre: "Strategy",
      platform: "Web Browser",
      publisher: "InnoGames",
      developer: "InnoGames",
      release_date: "2012-04-17",
      freetogame_profile_url: "https://www.freetogame.com/forge-of-empires",
    },
    {
      price: 100,
      id: 336,
      title: "Anarchy Online",
      thumbnail: "https://www.freetogame.com/g/336/thumbnail.jpg",
      short_description:
        "A free to play Sci-Fi MMO that has withstood the test of time.",
      game_url: "https://www.freetogame.com/open/anarchy-online",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Funcom",
      developer: "Funcom",
      release_date: "2001-06-27",
      freetogame_profile_url: "https://www.freetogame.com/anarchy-online",
    },
    {
      price: 100,
      id: 251,
      title: "The Lord of the Rings Online",
      thumbnail: "https://www.freetogame.com/g/251/thumbnail.jpg",
      short_description:
        "A free to play MMORPG set in the world of J.R.R. Tolkien's \r\nclassic fantasy saga.",
      game_url: "https://www.freetogame.com/open/lotro",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Warner Bros. Interactive Entertainment",
      developer: "Turbine, Inc.",
      release_date: "2001-04-24",
      freetogame_profile_url: "https://www.freetogame.com/lotro",
    },
    {
      price: 100,
      id: 339,
      title: "Tibia",
      thumbnail: "https://www.freetogame.com/g/339/thumbnail.jpg",
      short_description:
        "A old-school free-to-play massively multiplayer online \r\nrole-playing game.",
      game_url: "https://www.freetogame.com/open/tibia",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "CipSoft",
      developer: "CipSoft",
      release_date: "1997-01-07",
      freetogame_profile_url: "https://www.freetogame.com/tibia",
    },
  ]);

  return (
    <>
      <div style={{ marginTop: "50px" }}>
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
      </div>
    </>
  );
};

export default Home;
