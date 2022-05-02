// Write your Character component here
import React from "react";

const Character = props => {
    return (
        <div className='character'>
            <h2>{props.name}</h2>
        </div>
  )
}

export default Character;