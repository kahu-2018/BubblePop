import React from 'react'


  class Buble extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        r: props.r,
        cx: props.cx,
        cy: props.cy,
        opacity: 0.5,
        bubleStroke: 1,
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

      return (
        <Buble r={this.props.r} cx={this.props.cx} cy={this.props.cy} fill="#525CFF" fillOpacity={this.state.opacity} strokeOpacity={this.state.bubbleStroke} stroke="#AA1561"/>
    )
    }
  }


module.exports= {
  Buble: Buble,
}
