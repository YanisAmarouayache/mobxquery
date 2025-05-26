import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const PageLayout: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Mon Application</Typography>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ flexGrow: 1, padding: 2 }}>
        <Outlet />
      </Container>

      <footer>
        <Box sx={{ backgroundColor: "#1976d2", color: "#fff", padding: "1rem", textAlign: "center" }}>
          <Typography variant="body2">© 2025 Mon Application</Typography>
        </Box>
      </footer>
    </Box>
  );
};

export default PageLayout;
