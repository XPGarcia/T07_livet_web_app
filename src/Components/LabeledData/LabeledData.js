import { Box, Typography } from "@mui/material";
import React from "react";

function LabeledData({ label, data }) {
  return (
    <Box sx={{ padding: 1 }}>
      <Typography variant="caption" mb={1} color="CaptionText">
        {label}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ lineHeight: 1.5 }}
      >
        {data}
      </Typography>
    </Box>
  );
}

export default LabeledData;
