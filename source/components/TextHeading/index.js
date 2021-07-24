import React from 'react';
import './main_heading_style.css';

function MainHeading(props) {
    const {fontSize,padding,color}=props;
    return (
        <div className="main-heading-container" style={{fontSize,padding,color}}>
           {props.title}
        </div>

    )
}

export default MainHeading
