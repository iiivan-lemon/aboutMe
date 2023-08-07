import React from "react";
import logo from "../../../public/static/jobRoadmap/mainJR.webp";
import './ProjectsPage.sass'
import {projectData} from "../../types/types";
import Project from "../../components/project/Project.component";
import {CSSTransition, SwitchTransition} from "react-transition-group";

function ProjectsPage({projects} :{projects: projectData[]}) {


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
          projects.map((data,i) =>
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
      <Project  data={curProject} />
    </div>

  </CSSTransition>
      </SwitchTransition>
    </main>
  )
}

export default ProjectsPage