import React from "react";
import myFile from "../../../public/pdfs/safrRes.pdf"
import {CSSTransition} from "react-transition-group";
function ResumePage() {
  const nodeRef = React.useRef(null);
  const [showResume, setShowResume] = React.useState(false)
  React.useEffect(()=>{
    setShowResume(true)
  }, [nodeRef])

  myFile.onLoad
  return (
    <main>
      <div className='main-title'>
        <span className='name'>Иван Сафронов</span>
        <span className='job'>Резюме</span>
        <a className='main-btn'   href={myFile}
           download >скачать резюме</a>
      </div>
      <CSSTransition
        nodeRef={nodeRef}
        in={showResume}
        timeout={200}
        classNames="alert"
        unmountOnExit
        onEnter={()=>{setShowResume(true)}}
        onExited={()=>{setShowResume(false)}}
        >
        <div style={{background: 'transparent url(AnimatedLoading.gif) no-repeat center'}}>
          <object ref={nodeRef} width="100%" height="1000" data={myFile} type="application/pdf">
            <param value="aaa.pdf" name="src"/>
            <param value="transparent" name="wmode"/>
          </object>
        </div>
      </CSSTransition>
    </main>
  )
}

export default ResumePage