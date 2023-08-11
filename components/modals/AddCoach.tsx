import { Typography } from "@mui/material";
import React from "react";
import Modal from "../Modal";

export default function AddCoach() {
  return (
    <Modal>
      <Typography id="modal-modal-title" variant="h5" component="h2">
        Ajouter un Coach ou Mentor
      </Typography>
    </Modal>
  );
}
