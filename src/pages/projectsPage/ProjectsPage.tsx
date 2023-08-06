import React from "react";
import logo from "../../../public/static/jobRoadmap/mainJR.webp";
import './ProjectsPage.sass'
import {projectData} from "../../types/types";
import main1 from "../../../public/static/jobRoadmap/mainJR.webp";
import img1 from "../../../public/static/jobRoadmap/JR1.webp";
import img2 from "../../../public/static/jobRoadmap/JR2.webp";
import img3 from "../../../public/static/movieSpace/MS1.webp";
import img4 from "../../../public/static/movieSpace/MS2.webp";
import main2 from "../../../public/static/movieSpace/mainMS.webp";
import Project from "../../components/project/Project.component";
import {CSSTransition} from "react-transition-group";

function ProjectsPage() {

  const projects: projectData[] = [
    {
      title: 'Job-Roadmap',
      subTitle: 'Веб-сервис по аналитике требований по it специальностям',
      year: '2023',
      description: 'Сервис для помощи молодым it специалистам понять и изучить ' +
        'что требуют работодатели по их профилю ' +
        'по актуальным вакансиям',
      addition: 'Основные возможности сервиса:\nАнализ навыков актуальных вакансий it специализации\nАнализ резюме по навыкам\nГенерация сопроводительного письма \nГайд  по навыкам \n\n' + 'Job roadmap - SPA приложение\n' +
        'Используется: \n' +
        'React Redux \n' +
        'препроцессор Sass \n' +
        'Для отображения network-графов D3.js\n' +
        'Отдача статики настроена с помощью nginx \n' +
        'Макеты реализованы с помощью Figma\n' +
        'Адаптивная верстка \n' +
        'Кроссбраузерное приложение \n' +
        '\n' +
        'Полностью отвечал за фронтенд, UI/UX часть продукта \n' +
        '\n' +
        'Цель реализовать полноценный продукт - стартап \n' +
        'Командой из 4 человек за семестр \n' +
        'С создания идеи до защиты продукта',
      content: [main1, img1, img2],
      links: {
        figma: 'https://www.figma.com/file/5zjMqDbPcupxUAUPV8cqiS/Untitled?type=design&node-id=149%3A3661&mode=design&t=4Zj6ZnYkXjx9avE9-1',
        github: 'https://github.com/start-your-project/jobRoadmap'
      }
    },
    {
      title: 'Movie Space',
      subTitle: 'Сервис-видеостриминг',
      year: '2022',
      description: 'Веб-сервис для просмотра фильмов и сериалов онлайн',
      addition: 'Movie space - SPA приложение \n' +
        'фронтенд - чистый typescript без использования фрэйворков \n' +
        'Используется шаблонизатор pug\n' +
        'препроцессор scss \n' +
        'сборщик зависимостей webpack\n' +
        'не используются сторонние библиотеки \n' +
        'реализована своя библиотека компонентов \n' +
        'отдача статики настроена с помощью nginx \n' +
        'Макеты реализованы в figma \n' +
        'Адаптивная верстка \n' +
        'Кроссбраузерное приложение \n' +
        '\n' +
        'Отвечал за фронтенд  и UI/UX \n\n' +
        'Цель проекта - реализовать с нуля за семестр рабочий сервис, аналогичный существующим сервис по видеостримингу',
      content: [main2, img3, img4],
      links: {
        figma: 'https://www.figma.com/file/eQOdv9H0PdMUCkNejzHr9g/VK-%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B?type=design&node-id=7%3A62&mode=design&t=4Zj6ZnYkXjx9avE9-1',
        github: 'https://github.com/iiivan-lemon/2022_1_KURAGA_TEAM'
      }
    }
  ]
  const nodeRef = React.useRef(null);
  const [curProject, setProject] = React.useState(projects[0])

  return (
    <main>
      <div className='main-title'>
        <span className='name'>Иван Сафронов</span>
        <span className='job'>Проекты</span>
      </div>
      <div className='tags-row'><span>frontend</span><span>UI/UX</span><span>C++</span></div>

      <div className='tags-row'>
        {
          projects.map(data =>
            <button className={'main-btn ' + ((curProject?.title === data.title) ? 'select' : 'unselect')}
                    onClick={() => setProject(data)}>{data.title}</button>)
        }</div>
      {projects.map((data, i) =>
        <Project ref={nodeRef} data={data} key={i} style={{display: (curProject?.title === data.title) ? 'flex' : 'none'}}/>
      )}
    </main>
  )
}

export default ProjectsPage