import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";
import { useAppSelector } from "../store/configureStore";

const midLinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const rightLinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const navStyles = {
  typography: "h7",
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};
interface Props {
  changeTheme: (flag: boolean) => void;
}

export default function Header({ changeTheme }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTheme(event.target.checked);
  };
  const { basket } = useAppSelector((state) => state.basket);
  const itemQuantity = basket?.items.reduce(
    (sum, item) => (sum += item.quantity),
    0
  );
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Typography component={NavLink} to={"/"} variant="h6" sx={navStyles}>
            Re-Store
          </Typography>
          <Switch onChange={handleChange}></Switch>
        </Box>
        <List
          sx={{
            display: "flex",
          }}
        >
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display={"flex"} alignItems={"center"}>
          <IconButton
            component={Link}
            to="/basket"
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: "2" }}
          >
            <Badge badgeContent={itemQuantity} color="secondary">
              <ShoppingCart></ShoppingCart>
            </Badge>
          </IconButton>

          <List
            sx={{
              display: "flex",
            }}
          >
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
