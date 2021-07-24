import React from 'react';
import TextHeading from '../../../source/components/TextHeading/index';
import './layout_style.css';

export default function Layout(props) {
  return (
       <div className="main-app-container">
          <TextHeading title={props.title} fontSize="2.3rem" padding="0 0 3% 0" color="rgb(82 71 58)"/>
          {props.body}
          
      </div>
     
  );
}

 