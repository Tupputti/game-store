import { Card } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Card
        sx={{
          background: "#292945",
          minWidth: 345,
          height: 400,
          padding: "10px",
          margin: "10px",
        }}
      ></Card>
    </>
  );
};

export default Home;
