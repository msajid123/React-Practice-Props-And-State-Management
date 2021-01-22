import React, { Component } from 'react'
import SliderContent from './SliderContent'


export default class Slider extends Component {
    
    state={
        slide:[
            true,
            false,
            false
        ]
    }

    content=[
        {
            one:'ANTE NEQUE TRISTIQUE FERMENTUM',
            two:'ALIQUAM AC UT IACULIS',
            three:'ARCU VEL PULVINAR COMMODO URNA NUNC LAOREET VELIT NEC ALIQUET'
        },
        {
            one:'ANTE NEQUE TRISTIQUE FERMENTUM',
            two:'Welcome to India',
            three:'ARCU VEL PULVINAR COMMODO URNA NUNC LAOREET VELIT NEC ALIQUET'
        },
        {
            one:'Hello Its Me',
            two:'Welcome to Pakistan',
            three:'ARCU VEL PULVINAR COMMODO URNA NUNC LAOREET VELIT NEC ALIQUET'
        }
    ]

    handleNext(){
        if(this.state.slide[0]){
            var newSlide=[false,true,false];
            this.setState({
                slide:newSlide
            })
        }
        else if(this.state.slide[1]){
            var newSlide=[false,false,true];
            this.setState({
                slide:newSlide
            })
        }
        else{
            var newSlide=[true,false,false];
            this.setState({
                slide:newSlide
            })
        }
    }

    handlePrev(){
        if(this.state.slide[0]){
            var newSlide=[false,false,true];
            this.setState({
                slide:newSlide
            })
        }
        else if(this.state.slide[1]){
            var newSlide=[true,false,false];
            this.setState({
                slide:newSlide
            })
        }
        else{
            var newSlide=[false,true,false];
            this.setState({
                slide:newSlide
            })
        }
    }
    
    render() {
        return (
            <>
                <div class="slider">
                    
                    <SliderContent active={this.state.slide[0]} content={this.content[0]} />
                    <SliderContent active={this.state.slide[1]} content={this.content[1]} />
                    <SliderContent active={this.state.slide[2]} content={this.content[2]} />
                    
                </div>

                <div class="controls">
                    <div className="prev" onClick={this.handlePrev.bind(this)}>{'<'}</div>
                    <div className="next" onClick={this.handleNext.bind(this)}>{'>'}</div>
                </div>

                <div className="indicator">
                    
                </div>
            </>
        )
    }
}
