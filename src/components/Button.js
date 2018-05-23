import React from 'react';

export default function Button(props){
    return(
        <button className='button-clickable' onClick={props.action}>
            {props.name}
        </button>
    )
}
