import React from "react";
import './Project.sass'
import {projectData} from "../../types/types";
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

function Project({data, style, ref}: { data: projectData, style?: {}, ref?: any }) {

  const [showAddition, setShowAddition] = React.useState(false)
  const nodeRef = React.useRef(null);

  return (
    <div className='project-block' ref={ref} style={style}>
      <span className='project-title'>{data.title}</span>
      <div className='project-content'>
        {data.content.map((file, i) =>
          <div className='project-image' key={i}><img src={file} className='image-widget'/></div>)
        }
        {!!data.video.length &&
          <video className='project-image' width="400" height="320" controls={true} autoPlay>
            <source src={data.video[0]}></source>
          </video>
        }
      </div>

      <span className='sub-title'>
            <span>{data.subTitle}</span>
            <span>({data.year})</span>
          </span>
      <div className='description'>
        {data.description}
      </div>
      <button className='addition-btn' onClick={() => {
        setShowAddition(!showAddition)
      }}>подробнее
        <div className={'addition-icon-container ' + ((showAddition) ? 'open' : '')}>
          <svg className={'addition-icon '} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                    fill="#000000"></path>
            </g>
          </svg>
        </div></button>
      <CSSTransition
        nodeRef={nodeRef}
        in={showAddition}
        timeout={200}
        classNames="alert"
        unmountOnExit
        onEnter={() => {
          setShowAddition(true)
        }}
        onExited={() => {
          setShowAddition(false)
        }}
      >
        <div ref={nodeRef}>
          <div className={'addition'}>
            {data.addition}
          </div>
          <div className='links-row'>
            { data.links?.github && <Link to={data.links?.github as string}>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"
                   xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="33" height="33" fill="url(#pattern0)"/>
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_4_190" transform="scale(0.00125)"/>
                  </pattern>
                  <image id="image0_4_190" width="800" height="800"
                         xlinkHref="data:image/png;base64,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"/>
                </defs>
              </svg>
            </Link>}
            {data.links?.figma && <Link to={data.links?.figma as string}>
              <svg className="svg" style={{transform: 'scale(1.5)'}} width="34" height="34" viewBox="0 0 34 34"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 11c0-1.657 1.343-3 3-3h5c1.657 0 3 1.343 3 3 0 1.043-.533 1.963-1.341 2.5.808.537 1.341 1.457 1.341 2.5 0 1.657-1.343 3-3 3-.768 0-1.47-.289-2-.764V21c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3 0-1.044.533-1.962 1.341-2.5C10.533 17.962 10 17.044 10 16c0-1.043.533-1.963 1.341-2.5C10.533 12.963 10 12.043 10 11zm3 2c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2h2v4h-2zm2 1h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm0 5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-2zm3-5c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2 0-1.105-.895-2-2-2zm0-1c1.105 0 2-.895 2-2 0-1.105-.895-2-2-2h-2v4h2z"
                  fillRule="evenodd" fillOpacity="1" fill="#000" stroke="none"></path>
              </svg>
            </Link>}
          </div>
        </div>
      </CSSTransition>


    </div>
  )
}

export default Project