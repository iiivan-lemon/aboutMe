import React from "react";

import './src/App.sass'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
  useOutlet
} from "react-router-dom";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {createRoot} from "react-dom/client";
import Header from "./src/components/header/Header.component";
import ProjectsPage from "./src/pages/projectsPage/ProjectsPage";
import MainPage from "./src/pages/mainPage/MainPage";
import ResumePage from "./src/pages/resumePage/ResumePage";


const routes = [
  {path: '/', name: 'MainPage', element: <MainPage/>, nodeRef: React.createRef()},
  {path: '/resume', name: 'ResumePage', element: <ResumePage/>, nodeRef: React.createRef()},
  {
    path: '/projects',
    name: 'Projects',
    element: <ProjectsPage/>,
    nodeRef: React.createRef(),
  },
]
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function App() {


  const location = useLocation()
  const currentOutlet = useOutlet()
  const {nodeRef} : any =
  routes.find((route) => route.path === location.pathname) ?? React.useRef(null)


  return (
    <>
        <Header/>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={400}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
    </>

  )
}

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
root.render(<RouterProvider router={router} />)

