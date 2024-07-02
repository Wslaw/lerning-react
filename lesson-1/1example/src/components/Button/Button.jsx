import React from 'react'
import "./button.modules.css"

const Button = (props) => {
  return (
    <div>
          <button className='btn' type={props.type}>{ props.text}</button>
    </div>
  );
}

export default Button;
