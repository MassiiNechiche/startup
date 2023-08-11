import Layout from "@/layout/Layout";
import React, { ReactNode } from "react";
import Table from "@/components/Table";
import { Box, Button, Typography } from "@mui/material";

export default function Paiements() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="h2">
          Paiements
        </Typography>
      </Box>

      <br />

      <Table />
    </div>
  );
}

Paiements.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};
