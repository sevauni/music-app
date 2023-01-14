import React, { Component } from 'react';

import './Slider.css'



class Slider extends Component {

    // Range
    // Position
    // BufferingPosition
    state = {
        value: 50,
    };
    componentDidMount() {


    }

    render() {
        return (

                <input type="range"
                    className={this.props.className}
                    id={this.props.id}
                    max={this.props.max}
                    onChange={(e) => { this.props.onChange(e.target.value) }}
                    value={this.props.value}
                />
        );
    }
}

export default Slider;