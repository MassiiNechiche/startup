import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { Avatar, Button, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          display: "flex",
          flexDirection: "column",
          width: 400,
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            sx={{ bgcolor: "orange", fontSize: "1.5rem" }}
            src="/broken-image.jpg"
            sizes=""
          />
          <Typography variant="h6" component="h2">
            Connexion
          </Typography>
        </Box>

        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Login</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            placeholder="Login"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Mot de passe
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            }
            placeholder="Mot de passe"
          />
        </FormControl>

        <Button variant="contained" style={{ marginTop: "30px" }}>
          Valider
        </Button>
      </Box>
    </Box>
  );
}
