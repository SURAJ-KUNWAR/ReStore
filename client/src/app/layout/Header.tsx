import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
interface Props {
  changeTheme: (flag: boolean) => void;
}
export default function Header({ changeTheme }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTheme(event.target.checked);
  };
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Re-Store</Typography>
        <Switch onChange={handleChange}></Switch>
      </Toolbar>
    </AppBar>
  );
}
