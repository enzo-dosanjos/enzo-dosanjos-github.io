import React, {useState} from 'react'


const ProjectCard = ({ title, description, imgUrl }) => (
    <div className="project-box">
        <img src={imgUrl}/>
        <div className="project-text">
            <h1>{title}</h1>
            <span>{description}</span>
            <h4>Github link: </h4>
        </div>
    </div>
)

export default ProjectCard