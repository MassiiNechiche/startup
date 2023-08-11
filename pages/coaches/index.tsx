import Layout from "@/layout/Layout";
import React, { ReactNode } from "react";
import Table from "@/components/Table";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCoach from "@/components/modals/AddCoach";
import { OpenModal } from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";

export default function Coaches() {
  const dispatch = useDispatch();

  return (
    <>
      <AddCoach />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="h2">
          Coaches & Mentors
        </Typography>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => dispatch(OpenModal())}
        >
          Ajouter
        </Button>
      </Box>

      <br />

      <Table />
    </>
  );
}

Coaches.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};
