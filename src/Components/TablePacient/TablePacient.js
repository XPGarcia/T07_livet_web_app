/* eslint-disable no-param-reassign */
import React from "react";
import {
  GridRowModes,
  GridToolbarContainer,
  DataGrid,
  GridActionsCellItem,
  GridToolbar,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector
} from "@mui/x-data-grid";

import {
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { randomCreatedDate, randomId } from "@mui/x-data-grid-generator";

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

const initialRows = [
  {
    id: randomId(),
    Nombres: "Damien",
    Cedula: "09xxxxxx",
    Estado:
      "esto e suna prueba de par ala modificacion del historial del paciente",
    Registro: randomCreatedDate()
  },
  {
    id: randomId(),
    Nombres: "Nicolas",
    Cedula: "09xxxxxx",
    Estado:
      "esto e suna prueba de par ala modificacion del historial del paciente",
    Registro: randomCreatedDate()
  },
  {
    id: randomId(),
    Nombres: "Kate",
    Cedula: "09xxxxxx",
    Estado:
      "esto e suna prueba de par ala modificacion del historial del paciente",
    Registro: randomCreatedDate()
  }
];
const initialInputFields = [
  {
    id: randomId(),
    label: "Nombres",
    type: "string",
    value: ""
  },
  {
    id: randomId(),
    label: "Cedula",
    type: "number",
    value: ""
  },
  {
    id: randomId(),
    label: "Estado",
    type: "string",
    value: ""
  },
  {
    id: randomId(),
    label: "Registro",
    type: "date",
    value: new Date().toISOString().substr(0, 10)
  }
];
function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        Nombres: "",
        Cedula: "",
        Estado: "",
        Registro: randomCreatedDate()
      }
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "Nombres" }
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired
};

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626"
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959"
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343"
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c"
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff"
  }
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
}

// function CustomToolbar() {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarExport />
//       <GridToolbarQuickFilter />
//     </GridToolbarContainer>
//   );
// }

function TablePacient() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [values, setValues] = React.useState({});
  const [selectedItem, setSelectedItem] = React.useState({ inputFields: [] });
  const navigate = useNavigate();
  const handleDialogOpen = () => {
    const fields = [...initialInputFields];

    setSelectedItem({ inputFields: fields });
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  // const handleClick = () => {
  //   const id = randomId();
  //   setRows((oldRows) => [
  //     ...oldRows,
  //     {
  //       id,
  //       Nombres: "",
  //       Cedula: "",
  //       Estado: "",
  //       Registro: randomCreatedDate()
  //     }
  //   ]);
  //   setRowModesModel((oldModel) => ({
  //     ...oldModel,
  //     [id]: { mode: GridRowModes.Edit, fieldToFocus: 'Nombres' }
  //   }));
  // };
  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  // const handleEditClick = (id) => () => {
  //   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  // };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };
  const handleSubmit = () => {
    setDialogOpen(false);
  };
  // function to create initial state
  const createInitialState = (fields) => {
    const tempObj = {};
    fields.forEach((item) =>
      Object.assign(tempObj, { [item.id]: item.value ? item.value : "" })
    );
    return tempObj;
  };

  // update values state when props state
  React.useEffect(() => {
    const initialValues = createInitialState(selectedItem.inputFields);
    setValues(initialValues);
  }, [selectedItem]);
  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };
  // form submit
  const handleFormSubmit = () => {
    handleSubmit();
  };

  // input value change
  const handleInputValue = (e) => {
    const { name, value } = e.target;

    setValues({
      ...rows,
      [name]: value
    });
  };
  const columns = [
    {
      field: "Nombres",
      headerName: "Nombres",
      type: "string",
      width: 180,
      editable: true
    },
    {
      field: "Cedula",
      type: "string",
      width: 150,
      align: "center",
      editable: true,
      headerName: "Cedula"
    },
    {
      field: "Estado",
      type: "string",
      width: 290,
      align: "center",
      editable: true,
      headerName: "Esatdo"
    },
    {
      field: "Registro",
      type: "dateTime",
      width: 180,
      align: "center",
      editable: true,
      headerName: "Registro"
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 80,
      align: "center",
      flex: 0.3,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="success"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            // onClick={handleEditClick(id)}
            onClick={(e) => {
              e.stopPropagation();
              handleDialogOpen(e);
            }}
            color="primary"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="warning"
          />,
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="Ver registro"
            onClick={() => navigate(`/consultas`)}
            color="success"
          />
          // <GridActionsCellItem
          //   icon={<AddCircleIcon />}
          //   label="Add Article"
          //   onClick={(e) => {
          //     e.stopPropagation();
          //     handleDialogOpen(e);
          //   }}
          // />
        ];
      }
    }
  ];

  return (
    <Box
      sx={{
        height: 450,
        width: "100%",
        "& .actions": {
          color: "text.secondary"
        },
        "& .textPrimary": {
          color: "text.primary"
        }
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        onCellDoubleClick={(params, event) => {
          if (!event.ctrlKey) {
            event.defaultMuiPrevented = true;
          }
        }}
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: GridToolbar,
          Pagination: CustomPagination,
          NoRowsOverlay: CustomNoRowsOverlay
        }}
        componentsProps={{
          toolbar: {
            setRows,
            setRowModesModel,
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 200 }
          }
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
      <div>
        <br />
      </div>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button
          variant="contained"
          type="submit"
          onClick={() => navigate(`/registrarpacientes`)}
        >
          Nuevo Registro
        </Button>
        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          onBackdropClick={handleDialogClose}
        >
          <form onSubmit={handleFormSubmit}>
            <DialogTitle>Editar Registro</DialogTitle>
            <DialogContent>
              {initialInputFields.map((field) => (
                <TextField
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  name={field.value}
                  type={field.type}
                  required
                  value={values[field.id]}
                  margin="normal"
                  variant="standard"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleInputValue(field.id);
                  }}
                />
              ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancelar</Button>
              <Button type="submit">Aceptar</Button>
            </DialogActions>
          </form>
        </Dialog>
      </Stack>
    </Box>
  );
}

export default TablePacient;
