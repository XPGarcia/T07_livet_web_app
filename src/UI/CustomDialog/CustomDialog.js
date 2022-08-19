import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

function CustomDialog({ open, setOpen, title, content, onSubmit }) {
  const closeDialogHandler = () => setOpen(false);

  return (
    <Dialog
      open={open}
      onClose={closeDialogHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialogHandler} color="error">
          Cancelar
        </Button>
        <Button variant="outlined" onClick={onSubmit} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
