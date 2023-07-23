import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {AppBar, Box, IconButton, Menu, Toolbar, Typography} from "@mui/material";
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";
//
// const lightMuiTheme = getMuiTheme(lightBaseTheme);
import './App.sass'
import Header from "./components/header/Header.component";
import MainPage from "./pages/mainPage/MainPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import ResumePage from "./pages/resumePage/ResumePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App(){
    return (
      <>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={ <MainPage/>} />
                  <Route path="/resume" element={        <ResumePage/>} />
                  <Route path="/projects" element={ <ProjectsPage/>} />
              </Routes>
          </BrowserRouter>
      </>

    )
}

export default App