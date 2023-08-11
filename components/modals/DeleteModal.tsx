import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { closeDeleteModal } from "@/store/slices/modalSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
};

export default function DeleteModal() {
  const open = useSelector((state: RootState) => state.modal.deleteModal);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeDeleteModal());

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Suppresion
        </Typography>
        <br />
        <Typography id="modal-modal-title" variant="subtitle1" component="p">
          Êtes-vous sûr(e) de vouloir supprimer cet element?
        </Typography>

        <br />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 3 }}>
          <Button color="inherit" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="contained" color="error" endIcon={<DeleteIcon />}>
            Supprimer
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
