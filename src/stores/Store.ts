import {observable, action, computed, reaction} from "mobx"
import {createContext} from "react"
import uuid from "uuid"
import {ProjectData} from "../types/types";
import main1 from "../../public/static/jobRoadmap/mainJR.webp";
import img1 from "../../public/static/jobRoadmap/JR1.webp";
import img2 from "../../public/static/jobRoadmap/JR2.webp";
import main2 from "../../public/static/movieSpace/mainMS.webp";
import img3 from "../../public/static/movieSpace/MS1.webp";
import img4 from "../../public/static/movieSpace/MS2.webp";
import img5 from "../../public/static/blockWars/BW1.webp";
import videoBw from "../../public/static/blockWars/videoplayback.webm";


const data = [
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
    video: [],
    links: {
      figma: 'https://www.figma.com/file/5zjMqDbPcupxUAUPV8cqiS/Untitled?type=design&node-id=149%3A3661&mode=design&t=4Zj6ZnYkXjx9avE9-1',
      github: 'https://github.com/start-your-project/jobRoadmap'
    },
    hardSkills: [
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
    video: [],
    links: {
      figma: 'https://www.figma.com/file/eQOdv9H0PdMUCkNejzHr9g/VK-%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B?type=design&node-id=7%3A62&mode=design&t=4Zj6ZnYkXjx9avE9-1',
      github: 'https://github.com/iiivan-lemon/2022_1_KURAGA_TEAM'
    },
    hardSkills: [
      'Typescript',
      'Pug',
      'SCSS',
      'Figma',
      'webpack',
      'Nginx'
    ]
  },
  {
    title: 'Block Wars',
    subTitle: 'Многопользовательская игра',
    year: '2022',
    description: '2D игра на 4-х человек в жанре королевской битвы',
    addition: 'Block Wars\n' +
      '- С++ приложение\n' +
      '- С++ SFML boost::asio\n' +
      '- многопользовательский режим по локальной сети\n\n' +
      'Отвечал за фронтенд и движок игры',
    content: [img5],
    video: [videoBw],
    links: {
      github: 'https://github.com/iiivan-lemon/technopark_game'
    },
    hardSkills: [
      'C++',
      'SFML',
      'boost::asio',
    ]
  }
]
const mainView = [...data]

export class ProjectStore {
  constructor() {
    reaction(() => this.projects, _ => console.log(this.projects.length))
    reaction(() => this.mainView, _ => console.log(this.mainView.length))
  }

  @observable projects: ProjectData[] = data
  @observable mainView: ProjectData[] = (() => {
    const newData = data.map(a => Object.assign({}, a));
    return newData.map(el => {
      el.content = [el.content[0]]
      if (el.video.length) {
        el.video = [];
      }
      return el
    }) as ProjectData[]
  })()
  // @action addTodo = (todo: Todo) => {
  //   this.projects.push({ ...todo, id: uuid.v4() })
  // }

  // @action removeTodo = (id: string) => {
  //   this.projects = this.projects.filter(todo => todo.id !== id)
  // }
  //
  // @computed get info() {
  //   return {
  //     total: this.projects.length,
  //     completed: this.projects.filter(todo => todo.completed).length,
  //     notCompleted: this.projects.filter(todo => !todo.completed).length,
  //   }
  // }
}

export default createContext(new ProjectStore())