import Layout from "@/layout/Layout";
import React, { ReactNode } from "react";
import Table from "@/components/Table";
import { Box, Button, Typography } from "@mui/material";

export default function Examination() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="h2">
          Examinations
        </Typography>
      </Box>

      <br />

      <Table />
    </div>
  );
}

Examination.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};
