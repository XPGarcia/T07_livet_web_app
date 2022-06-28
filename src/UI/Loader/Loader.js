import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

function Loader() {
  const loader = useSelector((state) => state.loader);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loader.loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
