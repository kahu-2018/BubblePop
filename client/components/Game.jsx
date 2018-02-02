import React from 'react'
import Bubble from './Bubble'

var requestAnimationFrame = window.requestAnimationFrame

class Game extends React.Component {
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
    window.setInterval(this.spawnBubble, 1000)
  }

  spawnBubble(){
    let cx = Math.floor(Math.random() * 1500)
    let r = Math.floor(15 + Math.random() * (30 - 10))
    let bubble = {r: r, cx: cx, cy: 800, tx:  Math.floor(Math.random() * 5) - 2.5}
    //console.log(this.props.width)

    this.state.libraryOfBubbles.push(bubble)
  }

  moveBubbles(){
    // console.log("moveBubbles")
    let {libraryOfBubbles} = this.state
    libraryOfBubbles = libraryOfBubbles.map(bubble => {
      bubble.cy-= Math.floor(Math.random() * 10)
      bubble.cx+= bubble.tx
      if (Math.random() < 0.05) bubble.tx = Math.floor(Math.random() * 5) - 2.5
      return bubble
    })
    // console.log(libraryOfBubbles)
    this.setState({libraryOfBubbles})
    window.setTimeout(this.moveBubbles, 100)
  }

  render() {
    return (
      <div>
      <svg width='1500' height='1000'>
        {
          this.state.libraryOfBubbles.map(bubble=>{
            return <Bubble r={bubble.r} cx={bubble.cx} cy={bubble.cy} />
          })
        }
      </svg>
    </div>
    )
  }
}

export default Game


//
// r="20" cx="200" cy="200" />
