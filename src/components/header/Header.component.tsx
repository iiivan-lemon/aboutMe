import {AppBar, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import {Link} from "react-router-dom";
// import styles from 'Header.module.css'
function Header() {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/'>ivan safronov</Link>
        </Typography>
        <Button color="inherit"><Link to='/projects'>проекты</Link></Button>
        <Button color="inherit"><Link to='/resume'>резюме</Link></Button>
        <Button color="inherit">lipton2807@yandex.ru</Button>
      </Toolbar>
    </AppBar>
  )
}
export default Header;