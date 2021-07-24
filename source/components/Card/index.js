import React from 'react';
import '../../../global_style.css';
import './card_component_style.css';
function Card(props) {
    const { height, width, backgroundColor,fontSize,alignItems,onClick} = props;
    return (
        <div className="card" onClick={onClick} style={{height:height,width:width,backgroundColor,fontSize,alignItems}}>
            {props.children}
       </div>
    )
}

export default Card
