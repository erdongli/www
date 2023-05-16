import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Bitmoji from "assets/bitmoji.png";

export function Home(): JSX.Element {
  return (
    <Grid container>
      <Grid item xs={12} sm={9} md={6}>
        <img src={Bitmoji} alt="Erdong Li" style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={12} sm={3} md={6}>
        <Box
          sx={{
            marginTop: {
              sm: "150px",
            },
            textAlign: {
              xs: "center",
              sm: "start",
            },
          }}
        >
          <Typography sx={{ fontSize: "100px" }}>Hi,</Typography>
          <Typography sx={{ fontSize: "20px" }}>my name is Erdong.</Typography>
          <Stack
            direction="row"
            sx={{
              justifyContent: {
                xs: "center",
                sm: "start",
              },
            }}
          >
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/erdong-li-3063527b"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href="https://github.com/erdongli">
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
