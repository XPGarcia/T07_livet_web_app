import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import { randomCreatedDate } from "@mui/x-data-grid-generator";

function FormPaciente() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState([
    {
      historiclinica: "",
      cedula: "",
      nombres: "",
      apellidopaterno: "",
      apellidomaterno: "",
      fechanacimiento: randomCreatedDate(),
      lugarnacimeinto: "",
      ocuopacion: "",
      sangre: "",
      genero: "",
      estadocivil: "",
      seguro: "",
      direccion: "",
      provincia: "",
      ciudad: "",
      celular: "",
      convencional: "",
      correo: ""
    }
  ]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  };

  const handleEliminar = () => {
    setValue({
      historiclinica: "",
      cedula: "",
      nombres: "",
      apellidopaterno: "",
      apellidomaterno: "",
      fechanacimiento: randomCreatedDate(),
      lugarnacimeinto: "",
      ocuopacion: "",
      sangre: "",
      genero: "",
      estadocivil: "",
      seguro: "",
      direccion: "",
      provincia: "",
      ciudad: "",
      celular: "",
      convencional: "",
      correo: ""
    });
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-historia"
          value={value.historiclinica}
          label="Historia clinica"
          onChange={handleChange}
        />
        <TextField
          id="outlined-helperText"
          value={value.cedula}
          label="Cedula"
          onChange={handleChange}
        />
        <TextField id="outlined-name" value={value.nombres} label="Nombres" />
        <TextField
          id="outlined-apellidos"
          value={value.apellidopaterno}
          label="Apellido Paterno"
          onChange={handleChange}
        />
        <TextField
          id="outlined-apellidos"
          value={value.apellidomaterno}
          label="Apellido Materno"
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Fecha de nacimiento"
            inputFormat="MM/dd/yyyy"
            value={value.fechanacimiento}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          fullWidth
          id="outlined-name"
          value={value.lugarnacimeinto}
          label="Lugar de nacimeinto"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="outlined-name"
          value={value.ocuopacion}
          label="Ocupacion"
          onChange={handleChange}
        />
        <FormControl sx={{ m: 2, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Tipo de sangre
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={value.sangre}
            label="Tipo Sangre"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>O +</MenuItem>
            <MenuItem value={20}>O -</MenuItem>
            <MenuItem value={30}>A +</MenuItem>
            <MenuItem value={30}>A -</MenuItem>
            <MenuItem value={30}>B +</MenuItem>
            <MenuItem value={30}>B -</MenuItem>
            <MenuItem value={30}>AB +</MenuItem>
            <MenuItem value={30}>AB -</MenuItem>
          </Select>
          <FormHelperText>With label + helper text</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Genero</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value.genero}
            onChange={handleChange}
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Masculimo"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Femenino"
            />

            <FormControlLabel value="otro" control={<Radio />} label="Otro" />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Estado Civil
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={value.estadocivil}
            label="Estado civil"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Soltero</MenuItem>
            <MenuItem value={20}>Casado</MenuItem>
            <MenuItem value={30}>Viudo</MenuItem>
          </Select>
          <FormHelperText>With label + helper text</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Tiene Seguro
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value.seguro}
            name="radio-buttons-group"
            onChange={handleChange}
            row
          >
            <FormControlLabel value="si" control={<Radio />} label="Si" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <TextField
          fullWidth
          id="outlined-name"
          value={value.direccion}
          label="Direccion"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="outlined-name"
          value={value.provincia}
          label="Provincia"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="outlined-name"
          value={value.ciudad}
          label="Ciudad"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="outlined-name"
          label="Celular"
          value={value.celular}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="outlined-name"
          label="Convencional"
          value={value.convencional}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          id="outlined-name"
          value={value.correo}
          label="Correo electronico"
          onChange={handleChange}
        />
      </div>
      {/* <Divider>Datos de Presiones</Divider>
      <div>
        <TextField label="Presion sistolitica" type="number" />
        <TextField label="Temperatura" type="number" />
        <TextField label="Presion arterial" type="number" />
        <TextField label="Saturacion" type="number" />
      </div> */}
      {/* <Divider>Observaciones</Divider>
      <div>
        <TextField label="Motivo de consulta" multiline rows={4} fullWidth />

        <TextField
          label="Antecedentes personales"
          multiline
          rows={4}
          fullWidth
        />

        <TextField
          label="Antecedentes Familiares"
          multiline
          rows={4}
          fullWidth
        />

        <TextField
          label="Enfermedad o problema actual"
          multiline
          rows={4}
          fullWidth
        />
      </div> */}

      <div>
        <br />
      </div>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button onClick={handleEliminar} variant="outlined" color="error">
          Cancelar
        </Button>
        <Button variant="outlined" onClick={handleClickOpen} color="primary">
          Registrar
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirmación</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Desea guardar el registro?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={() => navigate("/pacientes")} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Box>
  );
}
export default FormPaciente;
