import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, TextField } from "@mui/material";
import { treatmentActions } from "../../../Store/MedicalRecord/treatment";
import Validator from "../../../Utils/Validators";

function TreatmentForm({ diagnostic, data, viewMode }) {
  const dispatch = useDispatch();
  let treatment = useSelector((state) => state.treatment);

  if (viewMode && data) {
    treatment = data;
  }

  const initialTreatmentState = {
    medicine: "",
    presentation: "",
    quantity: "",
    indications: ""
  };

  const [newTreatment, setNewTreatment] = useState(initialTreatmentState);

  const [errorTreatment, setErrorTreatment] = useState({
    medicine: {
      hasError: false,
      message: ""
    },
    presentation: {
      hasError: false,
      message: ""
    },
    quantity: {
      hasError: false,
      message: ""
    },
    indications: {
      hasError: false,
      message: ""
    }
  });

  const checkMedicineInput = () => {
    const errorData = Validator(newTreatment.medicine, ["required"]);
    setErrorTreatment((prevState) => ({
      ...prevState,
      medicine: errorData
    }));
    return !errorData.hasError;
  };

  const checkPresentationInput = () => {
    const errorData = Validator(newTreatment.presentation, ["required"]);
    setErrorTreatment((prevState) => ({
      ...prevState,
      presentation: errorData
    }));
    return !errorData.hasError;
  };

  const checkQuantityInput = () => {
    const errorData = Validator(newTreatment.quantity, ["required", "number"]);
    setErrorTreatment((prevState) => ({
      ...prevState,
      quantity: errorData
    }));
    return !errorData.hasError;
  };

  const checkIndicationsInput = () => {
    const errorData = Validator(newTreatment.indications, ["required"]);
    setErrorTreatment((prevState) => ({
      ...prevState,
      indications: errorData
    }));
    return !errorData.hasError;
  };

  const isValid = () => {
    const medicineIsValid = checkMedicineInput();
    const presentationIsValid = checkPresentationInput();
    const quantityIsValid = checkQuantityInput();
    const indicationsIsValid = checkIndicationsInput();
    return (
      medicineIsValid &&
      presentationIsValid &&
      quantityIsValid &&
      indicationsIsValid
    );
  };

  const addTreatmentHandler = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    const temp = treatment.data[diagnostic.id]
      ? [...treatment.data[diagnostic.id]]
      : [];
    temp.push({
      id: Math.floor(Math.random() * 100) + 1,
      diagnosticId: diagnostic.id,
      treatmentFields: newTreatment
    });
    dispatch(
      treatmentActions.setTreatment({
        diagnosticId: diagnostic.id,
        treatments: temp
      })
    );
    setNewTreatment(initialTreatmentState);
  };

  return (
    <Grid container style={{ marginBottom: "16px" }}>
      <Grid item xs={12} md={4} p={1}>
        <TextField
          id="medicineInput"
          label="Medicamento"
          fullWidth
          value={newTreatment.medicine}
          onChange={(event) =>
            setNewTreatment({
              ...newTreatment,
              medicine: event.target.value
            })
          }
          error={errorTreatment.medicine.hasError}
          helperText={errorTreatment.medicine.message}
        />
      </Grid>
      <Grid item xs={12} md={4} p={1}>
        <TextField
          id="presentationInput"
          label="Presentación/Concentración"
          fullWidth
          value={newTreatment.presentation}
          onChange={(event) =>
            setNewTreatment({
              ...newTreatment,
              presentation: event.target.value
            })
          }
          error={errorTreatment.presentation.hasError}
          helperText={errorTreatment.presentation.message}
        />
      </Grid>
      <Grid item xs={12} md={4} p={1}>
        <TextField
          id="quantityInput"
          label="Cantidad"
          fullWidth
          value={newTreatment.quantity}
          onChange={(event) =>
            setNewTreatment({
              ...newTreatment,
              quantity: event.target.value
            })
          }
          error={errorTreatment.quantity.hasError}
          helperText={errorTreatment.quantity.message}
        />
      </Grid>
      <Grid item xs={12} p={1}>
        <TextField
          id="indicationsInput"
          label="Indicaciones"
          fullWidth
          value={newTreatment.indications}
          onChange={(event) =>
            setNewTreatment({
              ...newTreatment,
              indications: event.target.value
            })
          }
          error={errorTreatment.indications.hasError}
          helperText={errorTreatment.indications.message}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={addTreatmentHandler}>
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
}

export default TreatmentForm;
