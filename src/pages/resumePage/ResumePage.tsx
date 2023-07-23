import React from "react";
import myFile from "../../../public/pdfs/safrRes.pdf"
function ResumePage() {
  return (
    <main>
      <div className='main-title'>
        <span className='name'>Иван Сафронов</span>
        <span className='job'>Резюме</span>
        <a className='call'   href={myFile}
           download >скачать резюме</a>
      </div>
      <object width="100%" height="1000" data={myFile} type="application/pdf">   </object>

    </main>
  )
}

export default ResumePage