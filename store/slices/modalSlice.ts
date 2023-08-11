import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  open: boolean;
  deleteModal: boolean;
}

const initialState: ModalState = {
  open: false,
  deleteModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OpenModal: (state) => {
      state.open = true;
    },
    CloseModal: (state) => {
      state.open = false;
    },
    OpenDeleteModal: (state) => {
      state.deleteModal = true;
    },
    closeDeleteModal: (state) => {
      state.deleteModal = false;
    },
  },
});

export const { OpenModal, CloseModal, OpenDeleteModal, closeDeleteModal } =
  modalSlice.actions;

export default modalSlice.reducer;
