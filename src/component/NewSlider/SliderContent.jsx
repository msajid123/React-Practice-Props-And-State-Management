import React from 'react'

export default function SliderContent(props) {
    console.log(props)
    var className='color--'+props.slideKey;
    return (
        <div className={props.active?'slide active '+className:'slide'}>
            {props.content}
        </div>
    )
}
