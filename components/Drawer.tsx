import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PaidIcon from "@mui/icons-material/Paid";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import Link from "next/link";
import { useRouter } from "next/router";

const drawerWidth = 240;

let routes = [
  {
    name: "Startups",
    path: "startups",
    icon: <RocketLaunchIcon />,
  },
  {
    name: "Paiements",
    path: "paiements",
    icon: <PaidIcon />,
  },
  {
    name: "Coaches & Mentors",
    path: "coaches",
    icon: <ConnectWithoutContactIcon />,
  },
  {
    name: "Partenaires",
    path: "partenaires",
    icon: <CoPresentIcon />,
  },
  {
    name: "Examinations",
    path: "examination",
    icon: <FindInPageIcon />,
  },
];

export default function ClippedDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useRouter();
  const formattedPathname = pathname.slice(1);
  const CurrentTitle =
    formattedPathname.charAt(0).toUpperCase() + formattedPathname.slice(1);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          sx={{
            bgcolor: "white",
            color: "black",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Incubateur
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List component="nav">
            {routes.map(({ name, path, icon }, index) => (
              <Link href={path} key={name} style={{ textDecoration: "none" }}>
                <ListItem
                  key={name}
                  disablePadding
                  sx={{
                    bgcolor: pathname === "/" + path ? "background.paper" : "",
                  }}
                >
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "black",
                      }}
                      primary={name}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          {/* <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
