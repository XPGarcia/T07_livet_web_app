import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { TextField } from "@mui/material";

function CustomDatePicker({ value, onChange, disablePast }) {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {!isMobileView && (
        <DesktopDatePicker
          label="Fecha"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
          disablePast={disablePast}
        />
      )}
      {isMobileView && (
        <MobileDatePicker
          label="Fecha"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
          disablePast={disablePast}
        />
      )}
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
