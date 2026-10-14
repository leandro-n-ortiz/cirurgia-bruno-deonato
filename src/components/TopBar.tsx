"use client";

import { useState } from "react";
import Link from "next/link";

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { SITE_NAME } from "@/constants/site";
import { SECTIONS } from "../constants/sections";

/** Site's top bar, holding the menu button that opens the navigation drawer with links to the home page sections. */
export function TopBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ columnGap: 2 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="/"
            aria-label="Ir para a página inicial"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Typography variant="h6" component="span">
              {SITE_NAME}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {SECTIONS.map(({ id, title }) => (
            <ListItemButton
              key={id}
              component="a"
              href={`#${id}`}
              onClick={() => setIsDrawerOpen(false)}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
