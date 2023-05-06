import Container from "@mui/material/Container";
import { Header } from "components";
import { Outlet } from "react-router";

export function Root(): JSX.Element {
  return (
    <Container maxWidth="lg">
      <Header />
      <Outlet />
    </Container>
  );
}
