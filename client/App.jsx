import React from 'react'
import Bubble from './components/Bubble'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
var requestAnimationFrame = window.requestAnimationFrame

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: false,
      libraryOfBubbles: [],
      width: 200
    }
    this.spawnBubble = this.spawnBubble.bind(this)
    this.moveBubbles = this.moveBubbles.bind(this)
    this.spawnBubbleOnInterval = this.spawnBubbleOnInterval.bind(this)

    this.spawnBubbleOnInterval()
    // this.spawnBubble()
    // this.spawnBubble()
    // this.spawnBubble()
    // this.spawnBubble()
    this.moveBubbles()
  }

  spawnBubbleOnInterval() {
    window.setTimeout(this.spawnBubble, 1000)
  }

  spawnBubble(){
    let cx = Math.floor(Math.random() * this.props.width)
    let r = Math.floor(15 + Math.random() * (30 - 10))
    let bubble = {r: r, cx: cx, cy: 800, tx:  Math.floor(Math.random() * 5) - 2.5}
    console.log(cx)
    this.state.libraryOfBubbles.push(bubble)
  }

  moveBubbles(){
    console.log("moveBubbles")
    let {libraryOfBubbles} = this.state
    libraryOfBubbles = libraryOfBubbles.map(bubble => {
      bubble.cy-= Math.floor(Math.random() * 10)
      bubble.cx+= bubble.tx
      if (Math.random() < 0.05) bubble.tx = Math.floor(Math.random() * 5) - 2.5
      return bubble
    })
    console.log(libraryOfBubbles)
    this.setState({libraryOfBubbles})
    window.setTimeout(this.moveBubbles, 100)
    window.setTimeout(this.spawnBubble, 5000)

  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        {
          this.state.libraryOfBubbles.map(bubble=>{
            return <Bubble r={bubble.r} cx={bubble.cx} cy={bubble.cy} />
          })
        }
      </svg>
    )
  }
}

export default App


//
// r="20" cx="200" cy="200" />
