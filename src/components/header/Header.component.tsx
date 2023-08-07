import {AppBar, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import {Link} from "react-router-dom";
import './Header.sass'
function Header() {
  return (
    <AppBar id='navbar' position="static" >
      <Toolbar id='header'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          <Link to='/' className='title-name'>ivan safronov</Link>
        </Typography>
        <Button color="inherit" className='title-header page'><Link to='/projects' className='title-header page'>проекты</Link></Button>
        <Button color="inherit"  className='title-header page'><Link to='/resume' className='title-header page '>резюме</Link></Button>
        <Link to='https://t.me/ivanlemon'><svg className='icon-header' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_10_631)">
            <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM17.894 8.221L15.924 17.501C15.779 18.159 15.387 18.319 14.84 18.009L11.84 15.799L10.394 17.193C10.254 17.373 10.037 17.488 9.794 17.488C9.792 17.488 9.791 17.488 9.789 17.488L10.002 14.434L15.562 9.412C15.802 9.199 15.508 9.078 15.189 9.291L8.32 13.617L5.36 12.693C4.72 12.49 4.702 12.053 5.495 11.739L17.061 7.281C17.599 7.085 18.067 7.409 17.893 8.222L17.894 8.221Z" fill="#0F0F0F"/>
          </g>
          <defs>
            <clipPath id="clip0_10_631">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg></Link>
        <Button color="inherit" className='title-header email'>lipton2807@yandex.ru</Button>
      </Toolbar>
    </AppBar>
  )
}
export default Header;