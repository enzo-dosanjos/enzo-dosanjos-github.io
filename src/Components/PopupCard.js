import React, { useState } from 'react'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const PopupCard = ({title, description, imgUrl, setcloseModal}) => {

    return (
        <div className='modal'>
            <div className="modal-content">
                <img src={imgUrl}/>
                <div className="modal-text">
                    <button className='close-btn' onClick={() => {setcloseModal(false)}}> <CloseOutlinedIcon/> </button>
                    <h1>{title}</h1>
                    <span>{description}</span>
                    <h4>Github link: </h4>
                </div>
            </div>
        </div>
    )
}

export default PopupCard