import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Header } from "components";
import { Outlet } from "react-router";

export function Root(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Header />
      <Box sx={{ marginTop: "75px" }}>
        <Outlet />
      </Box>
    </Container>
  );
}
