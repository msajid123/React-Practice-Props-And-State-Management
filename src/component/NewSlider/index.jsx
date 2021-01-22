import React, { Component } from 'react'
import Content from './SliderContent'
import './slide.css'

export default class index extends Component {
    state={
        slide:[
            true
        ]
    }
    
    content=[
        'Hello world',
        'First Slider'
    ]

    handleNext(){
        var newSlide=[]
        if(this.state.slide[0]){
            newSlide=[false,true]
            this.setState({
                slide:newSlide
            })
        }
        else if(this.state.slide[1]){
            newSlide=[true,false]
            this.setState({
                slide:newSlide
            })
        }
    }

    handlePrev(){
        var newSlide=[]
        if(this.state.slide[0]){
            newSlide=[false,true]
            this.setState({
                slide:newSlide
            })
        }
        else if(this.state.slide[1]){
            newSlide=[true,false]
            this.setState({
                slide:newSlide
            })
        }
    }

    render() {
        return (
            <div className='slider-wrapper'>
                <button className='btnPrev' onClick={this.handlePrev.bind(this)}> Prev </button>
                <>
                    <Content active={this.state.slide[0] } content={this.content[0] } slideKey={1} /> 
                    <Content active={this.state.slide[1] } content={this.content[1]}  slideKey={2} /> 
                </>
                <button className='btnNext' onClick={this.handleNext.bind(this)}> Next </button>
            </div>
        )
    }
}
