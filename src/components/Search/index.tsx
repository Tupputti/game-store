import { TextField } from "@mui/material";

import { useState } from "react";

export default function Search() {
  const [isOpened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <>
      <TextField label="With normal TextField" />
    </>
  );
}
