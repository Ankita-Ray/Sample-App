import React from 'react';
import './card_component_style.css';

function Card(props) {
    const { height, width, backgroundColor,fontSize,alignItems} = props;
    return (
        <div className="card card:hover" style={{height,width,backgroundColor,fontSize,alignItems}}>
            {props.children}
        </div>
    )
}

export default Card
