import { Outlet } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
} from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => (
  <Box
    component="nav"
    sx={{
      backgroundColor: "background.surface",
      borderBottom: "1px solid",
      borderColor: "divider",
    }}
  >
    <Container sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
      <Box
        component="a"
        href="https://flowbite.com/"
        sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
      >
        <Box
          component="img"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          sx={{ height: 32, mr: 2 }}
        />
        <Typography level="h4" component="span">
          Flowbite
        </Typography>
      </Box>
      <IconButton
        variant="plain"
        sx={{
          display: { xs: "inline-flex", md: "none" },
        }}
        aria-label="Open main menu"
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          gap: 2,
        }}
      >
        <List orientation="horizontal" sx={{ display: "flex", gap: 2 }}>
          <ListItem>
            <ListItemButton
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                "&.Mui-selected, &.Mui-selected:hover": {
                  backgroundColor: "primary.50",
                  color: "primary.main",
                },
              }}
            >
              <ListItemContent>Home</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "action.hover",
                  color: "primary.main",
                },
              }}
            >
              <ListItemContent>About</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component="a"
              href="#"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "action.hover",
                  color: "primary.main",
                },
              }}
            >
              <ListItemContent>Services</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component="a"
              href="#"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "action.hover",
                  color: "primary.main",
                },
              }}
            >
              <ListItemContent>Pricing</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component="a"
              href="#"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "action.hover",
                  color: "primary.main",
                },
              }}
            >
              <ListItemContent>Contact</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Container>
  </Box>
);

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "background.surface",
      borderTop: "1px solid",
      borderColor: "divider",
      py: 2,
      mt: 4,
    }}
  >
    <Container>
      <Typography
        level="body3"
        textAlign="center"
        sx={{ color: "text.secondary" }}
      >
        © 2022{" "}
        <Box
          component="a"
          href="https://flowbite.com/"
          sx={{ textDecoration: "underline" }}
        >
          FlowbiteTM
        </Box>
        . All Rights Reserved.
      </Typography>
    </Container>
  </Box>
);

const Layout = () => {
  return (
    <Box>
      <header>
        <Navbar />
      </header>

      <main>
        <Container sx={{ px: 4, maxHeight: "100dvh", overflow: "hidden" }}>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </Box>
  );
};

export default Layout;
