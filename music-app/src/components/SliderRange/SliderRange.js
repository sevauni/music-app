import React, { Component } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


import './SliderRange.css';



class SliderRange extends Component {
    render() {
        return (
            <RangeSlider
                className="slider slider-volume"
                thumbsDisabled={[true, false]}
                rangeSlideDisabled={true}
                max = {this.props.max}
                value = {[0,this.props.value]}
                onInput={this.props.onInput}
            />
        );
    }
}

export default SliderRange;