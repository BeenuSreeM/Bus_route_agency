import React, { useState } from 'react';
import { BsPlusLg } from "react-icons/bs";
import "./Features.css";

const SingleFeatures = ({ id, title, text }) => { 
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='item' key={id}>
            <div 
              className={`item-head flex flex-between bg-light ${isActive ? 'item-head-border' : null}`} 
              onClick={() => setIsActive(!isActive)}
            >
                <h6 className='fs-20 fw-4'>{title}</h6>
                <button type="button" className={`item-icon ${isActive ? 'item-icon-rotate' : ""}`}>
                    <BsPlusLg style={{ fill: isActive ? "#bc9b22" : "#fff" }} size={22} />
                </button>
            </div>

            <div className={`item-body ${isActive ? 'item-body-show' : ""}`}>
                <p className='text'>{text}</p>
            </div>
        </div>
    )
}

export default SingleFeatures;
