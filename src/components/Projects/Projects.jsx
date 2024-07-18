import React from 'react'
import "./projects.css"
import { useState } from 'react'

import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import { projectsInfo } from '../../constants'

export default function Projects() {
  let imgIndex = 0;
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState(true);
  const [info, setInfo] = useState(0);
  return (
    <div id='proyectos' className='projects'>
      <div className="projects-heading">
        <h3>Nuestros proyectos</h3>
      </div>
      <div className="projects-container">
        <div className='project-box'>
          <img src={project1} alt="" onClick={() => (setModal(true), setImg(true), setInfo(0))} />
        </div>
        <div className='project-box'>
          <img src={project2} alt="" onClick={() => (setModal(true), setImg(false), setInfo(1))} />
        </div>
      </div>
      <div className={`${modal ? 'modal active' : 'modal'}`}>
        <span className="close cursor" onClick={() => setModal((prev) => !prev)}>&times;</span>
        <div className="modal-content">
          <div className="fullImg">
            {
              <div className="img-info">
                <h2>{projectsInfo[info].title}</h2>
                <p><span>PROYECTO: </span> <a href={projectsInfo[info].link}>{projectsInfo[info].proyecto}</a></p>
                <p><span>OBJETIVO: </span>{projectsInfo[info].objetivo}</p>
                <p><span>DESARROLLO: </span>{projectsInfo[info].desarrollo}</p>
                <p><span>TECNOLOGÍA: </span>{projectsInfo[info].tech}</p>
              </div>
            }
            <img src={img ? project1 : project2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
