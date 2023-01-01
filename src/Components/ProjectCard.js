import React, {useState} from 'react'

import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';


const ProjectCard = ({ title, description, imgUrl }) => (
    <div className="project-box">
        <img src={imgUrl}/>
        <div className="project-icon">
            <ZoomInOutlinedIcon className="icon"/>
        </div>
        <div className="project-text">
            <h1>{title}</h1>
        </div>
    </div>
)

export default ProjectCard