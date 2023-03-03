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

const Home: NextPage = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                image="https://www.freetogame.com/g/339/thumbnail.jpg"
                title="green iguana"
              />
              <CardContent sx={{ height: 120, width: "auto" }}>
                <Typography
                  sx={{ color: "#43d2d8" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Tibia
                </Typography>
                <Typography sx={{ color: "#ffffff" }}>
                  A old-school free-to-play massively multiplayer online
                  \r\nrole-playing game.
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
      </div>
    </>
  );
};

export default Home;
