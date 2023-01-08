import React, { useState } from 'react'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const Modal = ({title, description, imgUrl, setOpenModal}) => {

    return (
        <div className='modal'>
            <div onClick={() => {setOpenModal(false)}} className="overlay"/>
            <div className="modal-content">
                <div className="modal-top">
                    <button className='close-btn' onClick={() => {setOpenModal(false)}}> <CloseOutlinedIcon/> </button>
                    <h1>{title}</h1>
                </div>
                    <img src={imgUrl}/>
                <div className="modal-text">
                    <span>{description}</span>
                </div>
                <a href="src/Components/Modal">
                    <button className="source">View source</button>
                </a>
                <div className="modal-bottom">
                    <button className="close-btn-bottom" onClick={() => {setOpenModal(false)}}>
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal