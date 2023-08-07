import React from "react";
import './MainPage.sass'
import main1 from '../../../public/static/jobRoadmap/mainJR.webp';
import main2 from '../../../public/static/movieSpace/mainMS.webp';
import Project from "../../components/project/Project.component";
import {projectData} from '../../types/types'
import {Link} from "react-router-dom";



function MainPage({projects}: {projects: projectData[]}) {


  return (
    <main>
      <div className='main-title'>
        <span className='name'>Иван Сафронов</span>
        <span className='job'>Frontend разработчик</span>
        <Link to='https://t.me/ivanlemon' className='main-btn'>связаться</Link>
      </div>
      {projects.map(el => { el.content.length = 1; if(el.video.length) el.video.length = 0; return el}).map((data, i) =>
        <Project data={data} key={i}/>
      )}
    </main>
  )
}

export default MainPage