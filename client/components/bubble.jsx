import React from 'react'
var requestAnimationFrame = window.requestAnimationFrame

  class Bubble extends React.Component {
    constructor(props) {
      super(props)
      console.log("constructed");
      this.state={
        r: props.r,
        cx: props.cx,
        cy: props.cy
      }
    }
    componentWillReceiveProps(nextProps) {
      const {r, cx, cy} = nextProps
      this.setState({r, cx, cy})
    }
    render() {
      console.log(this.state, this.props)
      return (
        <circle r={this.props.r} cx={this.props.cx} cy={this.props.cy} fill="#FF53FF" fillOpacity={.5} stroke="#AA1561"/>
      )
    }
  }

  // function Bubble (props) {
  //   return (
  //     <circle r={props.r} cx={props.cx} cy={props.cy} fill="#FF53FF" fillOpacity={.5} stroke="#AA1561"/>
  //
  //   )
  // }
    // this.moveBubble=this.moveBubble.bind(this)
    // this.animateBubble = this.animateBubble.bind(this)
    // function animateBubble() {
    //   let {cx, cy, r} = this.props.circle
    //   let bubble = [
    //     { r: r++ }
    //   ]
    //   requestAnimationFrame(animateBubble)

// function moveBubble() {
//   return (
//   <circle r={this.state.r} cx={this.state.cx} cy={this.state.cy} fill="#FF53FF" fillOpacity={.5} stroke="#AA1561"/>
// }

    // }



export default Bubble
