import React from "react";
import  './MainPage.sass'
import logo from '../../../public/static/man.jpg';
function MainPage(){
  return (
    <main>
      <div className='main-title'>
        <span className='name'>Иван Сафронов</span>
        <span className='job'>Frontend разработчик</span>
        <button className='call'>связаться</button>
      </div>
        <div className='project-block'>
          <span className='project-title'>проект 1</span>
          <div className='project-image'><img src={logo} className='image-widget'/></div>
          <span className='sub-title'>
            <span>это крутой проект</span>
            <span>(2022)</span>
          </span>
          <div className='description'>
            учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов
          </div>
          <button className='addition-btn'>подробнее</button>
          <div className='addition'>
            учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов
          </div>
        </div>
      <div className='project-block'>
        <span className='project-title'>проект 1</span>
        <div className='project-image'><img src={logo} className='image-widget'/></div>
        <span className='sub-title'>
            <span>это крутой проект</span>
            <span>(2022)</span>
          </span>
        <div className='description'>
          учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов
        </div>
        <button className='addition-btn'>подробнее</button>
        <div className='addition'>
          учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов
        </div>
      </div>
      <div className='project-block'>
        <span className='project-title'>проект 1</span>
        <div className='project-image'><img src={logo} className='image-widget'/></div>
        <span className='sub-title'>
            <span>это крутой проект</span>
            <span>(2022)</span>
          </span>
        <div className='description'>
          учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов
        </div>
        <button className='addition-btn'>подробнее</button>
        <div className='addition'>
          учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов учебный проект по реализации веб-сервиса по просмотру фильмов и сериалов
        </div>
      </div>
    </main>
  )
}
export default MainPage