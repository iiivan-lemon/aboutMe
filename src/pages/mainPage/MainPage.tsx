import React from "react";
import './MainPage.sass'
import Project from "../../components/project/Project.component";
import {ProjectData} from '../../types/types'
import {Link} from "react-router-dom";
import main1 from "../../../public/static/jobRoadmap/mainJR.webp";
import img1 from "../../../public/static/jobRoadmap/JR1.webp";
import img2 from "../../../public/static/jobRoadmap/JR2.webp";
import main2 from "../../../public/static/movieSpace/mainMS.webp";
import img3 from "../../../public/static/movieSpace/MS1.webp";
import img4 from "../../../public/static/movieSpace/MS2.webp";
import img5 from "../../../public/static/blockWars/BW1.png";
import videoBw from "../../../public/static/blockWars/videoplayback.webm";
import {observer} from "mobx-react-lite"
import ProjectStore from "../../stores/Store";

function MainPage() {

  const todoStore = React.useContext(ProjectStore);
  const {mainView} = todoStore;
  return (
    <main>
      <div className='main-title'>
        <span className='name'>Иван Сафронов</span>
        <span className='job'>Frontend разработчик</span>
        <Link to='https://t.me/ivanlemon' className='main-btn'>связаться</Link>
      </div>
      {mainView.map((data, i) =>
        <Project data={data} key={i}/>
      )}
    </main>
  )
}

export default observer(MainPage)