import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      minHeight="100vh"
    >
      <Stack direction="column">
        <Typography variant="h1">Oops!</Typography>
        <Typography>Sorry, an unexpected error has occurred.</Typography>
        <Typography component="i">
          {isRouteErrorResponse(error)
            ? error.statusText
            : "Something Went Wrong"}
        </Typography>
      </Stack>
    </Box>
  );
}
