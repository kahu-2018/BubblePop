import React from 'react'


  class Bubble extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        r: props.r,
        cx: props.cx,
        cy: props.cy,
        opacity: 0.5,
        bubbleStroke: 1,
      }
      this.click = this.click.bind(this)
    }
    componentWillReceiveProps(nextProps) {
      const {r, cx, cy} = nextProps
      this.setState({r, cx, cy})
    }
    click() {
      this.setState({opacity: 0, bubbleStroke: 0})
      this.props.pop()
    }
    render() {

      // var pop = (props) => {
      //
      //   console.log('yup')
      //    this.state.opacity = 0
      //    this.state.bubbleStroke = 0
      //    score ++
      //    //this.setState({score: this.state.score ++})
      //    console.log(score)
      //  }
      return (
        <circle style={{cursor: 'crosshair'}} onClick={this.click} r={this.props.r} cx={this.props.cx} cy={this.props.cy} fill="#FF53FF" fillOpacity={this.state.opacity} strokeOpacity={this.state.bubbleStroke} stroke="#AA1561"/>
      )
    }
  }


module.exports= {
  Bubble: Bubble,
}
