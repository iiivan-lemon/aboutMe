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
import main1 from "./public/static/jobRoadmap/mainJR.webp";
import img1 from "./public/static/jobRoadmap/JR1.webp";
import img2 from "./public/static/jobRoadmap/JR2.webp";
import main2 from "./public/static/movieSpace/mainMS.webp";
import img3 from "./public/static/movieSpace/MS1.webp";
import img4 from "./public/static/movieSpace/MS2.webp";
import {projectData} from "./src/types/types";


const projects: projectData[] = [
  {
    title: 'Job-Roadmap',
    subTitle: 'Веб-сервис по аналитике требований по it специальностям',
    year: '2023',
    description: 'Сервис для помощи молодым it специалистам понять и изучить ' +
      'что требуют работодатели по их профилю ' +
      'по актуальным вакансиям',
    addition: 'Job - Roadmap\n\n' +
      '- SPA приложение\n' +
      '- React Redux typescript Sass\n' +
      '- для отображения network-графов D3.js\n' +
      '- отдача статики настроена с помощью nginx\n' +
      '- макеты реализованы с помощью Figma\n' +
      '- адаптивная верстка\n' +
      '- кроссбраузерное приложение\n\n' +
      'Полностью отвечал за фронтенд, UI/UX часть продукта',
    content: [main1, img1, img2],
    links: {
      figma: 'https://www.figma.com/file/5zjMqDbPcupxUAUPV8cqiS/Untitled?type=design&node-id=149%3A3661&mode=design&t=4Zj6ZnYkXjx9avE9-1',
      github: 'https://github.com/start-your-project/jobRoadmap'
    },
    hardSkills:[
      'Typescript',
      'React',
      'Redux',
      'Figma',
      'D3.js',
      'SASS',
      'Nginx'
    ]
  },
  {
    title: 'Movie Space',
    subTitle: 'Сервис-видеостриминг',
    year: '2022',
    description: 'Веб-сервис для просмотра фильмов и сериалов онлайн',
    addition: 'Movie space\n' +
      '- SPA приложение\n' +
      '- чистый typescript, pug, scss, webpack\n' +
      '- не используются сторонние библиотеки\n' +
      '- реализована своя библиотека компонентов\n' +
      '- отдача статики настроена с помощью nginx\n' +
      '- макеты реализованы в figma\n' +
      '- адаптивная верстка\n' +
      '- кроссбраузерное приложение\n\n' +
      'Отвечал за фронтенд и UI/UX',
    content: [main2, img3, img4],
    links: {
      figma: 'https://www.figma.com/file/eQOdv9H0PdMUCkNejzHr9g/VK-%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B?type=design&node-id=7%3A62&mode=design&t=4Zj6ZnYkXjx9avE9-1',
      github: 'https://github.com/iiivan-lemon/2022_1_KURAGA_TEAM'
    },
    hardSkills:[
      'Typescript',
      'Pug',
      'SCSS',
      'Figma',
      'webpack',
      'Nginx'
    ]
  }
]

const routes = [
  {path: '/', name: 'MainPage', element: <MainPage projects={projects}/>, nodeRef: React.createRef()},
  {path: '/resume', name: 'ResumePage', element: <ResumePage/>, nodeRef: React.createRef()},
  {
    path: '/projects',
    name: 'Projects',
    element: <ProjectsPage projects={projects}/>,
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

