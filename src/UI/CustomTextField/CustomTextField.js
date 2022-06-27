import React, { useState } from "react";
import { TextField } from "@mui/material";
import Validator from "../../Utils/Validators";

function CustomTextField({ validators, value, ...props }) {
  const [error, setError] = useState({
    hasError: false,
    message: ""
  });

  const isValid = () => {
    const errorData = Validator(value, ["required", "length"]);
    setError(errorData);
    return !errorData.hasError;
  };

  return (
    <TextField
      {...props}
      value={value}
      error={error.hasError}
      helperText={error.message}
      onSubmit={isValid}
    />
  );
}

export default CustomTextField;
