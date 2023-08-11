import Layout from "@/layout/Layout";
import React, { ReactNode } from "react";
import Table from "@/components/Table";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { OpenModal } from "@/store/slices/modalSlice";
import AddStartup from "@/components/modals/AddStartup";

export default function Startups() {
  return (
    <>
      <AddStartup />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="h2">
          Startups
        </Typography>
      </Box>

      <br />

      <Table />
    </>
  );
}

Startups.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};
