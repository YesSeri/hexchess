import React from 'react';
export default class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {
      canvasSize: {
        height: 300,
        width: 500,
      },
    };
  }
  componentDidMount() {
    const { height, width } = this.state.canvasSize;
    this.canvasHex.width = width
    this.canvasHex.height = height
  }
  render() {
    return (
      <>
        <h1>Canvas</h1>
        <canvas
          ref={(canvasHex) => {
            console.log(canvasHex)
            this.canvasHex=canvasHex
          }}
        />
      </>
    );
  }
}
