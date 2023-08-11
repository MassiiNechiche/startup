import Layout from "@/layout/Layout";
import React, { ReactNode } from "react";
import Table from "@/components/Table";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddSPartner from "@/components/modals/AddPartner";
import { OpenModal } from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";

export default function Partenaires() {
  const dispatch = useDispatch();

  return (
    <>
      <AddSPartner />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="h2">
          Partenaires
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

Partenaires.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};
