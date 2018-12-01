import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }
  
  tick() {
    this.setState({ date: new Date() });
  }
  
  componentDidMount() {
    this.tickInterval = setInterval(this.tick, 1000);
  }
  
  render() {
    return (
      <div>
        <h1>This is a REALLY nice clock because Julian and Eric made it.</h1> 
        <h2>Time: {this.formatTime(this.state.date)}</h2>
        <h2>Date: {this.state.date.toDateString()}</h2>
      </div>
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }
  
  formatTime(time) {
    let minutes = ("0" + (time.getMinutes() + 1)).slice(-2);
    let seconds = ("0" + (time.getSeconds() + 1)).slice(-2);
    return `${time.getHours() % 12}:${minutes}:${seconds}`;
  }
}