import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Personal Plans", link: "" },
    { text: "Business Plans", link: "" },
    { text: "Guide", link: "" },
    { text: "Blog", link: "" },
  ];

  return (
    <>
      <AppBar
        position={isMobile ? "fixed" : "sticky"}
        sx={{
          backgroundColor: theme.palette.primary.main,
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: isMobile ? "0" : "12px",
          padding: "0 20px",
          justifyContent: "space-between",
          width: isMobile ? "100%" : "calc(100% - 32px)",
          margin: isMobile ? "0" : theme.spacing(1),
          top: isMobile ? "auto" : 0,
          left: "auto",
          right: "auto",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 8px",
          }}
        >
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  flexGrow: 0,
                  marginRight: theme.spacing(2),
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  color: "white",
                }}
                component={Link}
                to="/"
                color="inherit"
              >
                Insure
              </Typography>
              <div style={{ display: "flex", flexGrow: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    color="inherit"
                    component={Link}
                    to={item.link}
                    sx={{ margin: "0 12px" }}
                    key={item.text}
                  >
                    {item.text}
                  </Button>
                ))}
              </div>
            </>
          )}
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: "250px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px",
            [theme.breakpoints.down("sm")]: {
              width: "50%",
            },
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              component={Link}
              to={item.link}
              key={item.text}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {isMobile && <div style={{ height: "64px" }} />}
    </>
  );
};

export default Header;
