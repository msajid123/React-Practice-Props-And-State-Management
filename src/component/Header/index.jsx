import React, { Component } from 'react'
import './header.css'
import Slider from './Slider'

export default class extends Component {
    render() {
        return (
            <div className='header'> 
                <div className="inner_nav">
                    <div className="logo">
            
                    </div>
                    <div className="navigation">
                        <ul className="nav">
                            <li className="nav_item">Home</li>
                            <li className="nav_item">Nav</li>
                            <li className="nav_item">Nav</li>
                            <li className="nav_item">Nav</li>
                        </ul>
                    </div>    
                </div>   

                <Slider/>
            </div>
        )
    }
}
