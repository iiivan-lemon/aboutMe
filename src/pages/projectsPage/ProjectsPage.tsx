import React from "react";
import logo from "../../../public/static/jobRoadmap/mainJR.webp";
import './ProjectsPage.sass'
import {ProjectData} from "../../types/types";
import Project from "../../components/project/Project.component";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import main1 from "../../../public/static/jobRoadmap/mainJR.webp";
import img1 from "../../../public/static/jobRoadmap/JR1.webp";
import img2 from "../../../public/static/jobRoadmap/JR2.webp";
import main2 from "../../../public/static/movieSpace/mainMS.webp";
import img3 from "../../../public/static/movieSpace/MS1.webp";
import img4 from "../../../public/static/movieSpace/MS2.webp";
import img5 from "../../../public/static/blockWars/BW1.png";
import {observer} from "mobx-react-lite";
import ProjectStore from '../../stores/Store'

function ProjectsPage() {
  const todoStore = React.useContext(ProjectStore);
  const {projects} = todoStore;
  React.useEffect(() => {
    setProject(projects[0])
  }, [])
  const nodeRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const [curProject, setProject] = React.useState(projects[0])

  return (
    <main>
      <div className='main-title'>
        <span className='name'>Иван Сафронов</span>
        <span className='job'>Проекты</span>
      </div>

      <div className='tags-row'>
        {
          projects.map((data, i) =>
            <button key={i} className={'main-btn ' + ((curProject?.title === data.title) ? 'select' : 'unselect')}
                    onClick={() => setProject(data)}>{data.title}</button>)
        }</div>
      <SwitchTransition>
        <CSSTransition
          key={curProject.title}
          nodeRef={skillsRef}
          timeout={300}
          classNames="skills"
          unmountOnExit
        >
          <div className='tags-row hard' ref={skillsRef}>

            {curProject.hardSkills.map((data, i) =>
              <span key={i}>{data}</span>
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition>
        <CSSTransition
          key={curProject.title}
          nodeRef={nodeRef}
          timeout={200}
          classNames="alert"
          unmountOnExit
        >
          <div ref={nodeRef}>
            <Project data={curProject}/>
          </div>

        </CSSTransition>
      </SwitchTransition>
    </main>
  )
}

export default observer(ProjectsPage)