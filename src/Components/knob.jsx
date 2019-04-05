import React from 'react';
import Knob from './knob';

export default class UDKnob extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {value: props.value};
    }

    handleChange(newValue) {
        this.setState({value: newValue});
    }

  render() {
    return (
      <Knob
        value={this.state.value}
        onChange={this.handleChange}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        log={this.props.log}
        width={this.props.width}
        height={this.props.height}
        thickness={this.props.thickness}
        lineCap={this.props.lineCap}
        bgColor={this.props.bgColor}
        fgColor={this.props.fgColor}
        font={this.props.font}
        fontWeight={this.props.fontWeight}
        clockwise={this.props.clockwise}
        displayInput={false}
        readOnly={true}
        angleArc={this.props.angleArc}
        angleOffset={this.props.angleOffset}
        title={this.props.title}
      />
    );
  }
}