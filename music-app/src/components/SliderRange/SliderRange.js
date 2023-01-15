import React, { Component } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


import './SliderRange.css';



class SliderRange extends Component {
    render() {
        return (
            <RangeSlider
                className="slider slider-volume"
                defaultValue={[0, this.props.startPosition]}
                thumbsDisabled={[true, false]}
                rangeSlideDisabled={true}
                onInput={(value) => {
                    console.log(value);
                }}
            />
        );
    }
}

export default SliderRange;