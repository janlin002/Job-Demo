import React from 'react'

class Cat extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const mouse = this.props.mouse;

    console.log(mouse, 'mouse')
    
    return (
      // eslint-disable-next-line react/prop-types
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}
  
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }
  
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
        {/*
            用 `render` prop 去動態決定該 render 什麼，而不是將 <Mouse> render 的東西靜態表示出來。
          */}
        {/* eslint-disable-next-line react/prop-types */}
        {this.props.render(this.state)}
      </div>
    );
  }
}
  
class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}

export default MouseTracker