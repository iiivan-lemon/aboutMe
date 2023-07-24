import React from "react";
import  './MainPage.sass'
import main1 from '../../../public/static/jobRoadmap/mainJR.webp';
import main2 from '../../../public/static/movieSpace/mainMS.webp';
import Project from "../../components/project/Project.component";
import { projectData } from '../../types/types'
import {Link} from "react-router-dom";

const projects: projectData[] = [
  { title: 'Job-Roadmap', subTitle: 'Веб-сервис по аналитике требований по it специальностям', year: '2023', description: 'Сервис для помощи молодым it специалистам понять и изучить ' +
      'что требуют работодатели по их профилю ' +
      'по актуальным вакансиям', addition: 'Основные возможности сервиса:\nАнализ навыков актуальных вакансий it специализации\nАнализ резюме по навыкам\nГенерация сопроводительного письма \nГайд  по навыкам  ', content: [main1], links: {figma: 'https://www.figma.com/file/5zjMqDbPcupxUAUPV8cqiS/Untitled?type=design&node-id=149%3A3661&mode=design&t=4Zj6ZnYkXjx9avE9-1' , github: 'https://github.com/start-your-project/jobRoadmap'} },
  { title: 'Movie Space', subTitle: 'Сервис-видеостриминг', year: '2022', description: 'Веб-сервис для просмотра фильмов и сериалов онлайн', addition: 'Фронтенд написан на чистом TS, pug, SASS', content: [main2], links: {figma: 'https://www.figma.com/file/eQOdv9H0PdMUCkNejzHr9g/VK-%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B?type=design&node-id=7%3A62&mode=design&t=4Zj6ZnYkXjx9avE9-1' , github: 'https://github.com/iiivan-lemon/2022_1_KURAGA_TEAM'}}
]
function MainPage(){


  return (
    <main>
      <div className='main-title'>
        <span className='name'>Иван Сафронов</span>
        <span className='job'>Frontend разработчик</span>
        <Link to='https://t.me/ivanlemon'>связаться</Link>
      </div>
        {projects.map((data, i)=>
          <Project data={data} key={i} />
        )}
    </main>
  )
}
export default MainPage