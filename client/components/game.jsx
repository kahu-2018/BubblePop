import React from 'react'
var Bubble = require('./Bubble').Bubble
var requestAnimationFrame = window.requestAnimationFrame


class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: false,
      libraryOfBubbles: [],
      width: 200,
      score: 0
    }
    this.spawnBubble = this.spawnBubble.bind(this)
    this.moveBubbles = this.moveBubbles.bind(this)
    this.spawnBubbleOnInterval = this.spawnBubbleOnInterval.bind(this)
    this.pop = this.pop.bind(this)

    this.spawnBubbleOnInterval()
    this.moveBubbles()
  }

  spawnBubbleOnInterval() {
    window.setInterval(this.spawnBubble, 700)
  }
  pop(bubble) {
    console.log('pop', {bubble})
    const {score} = this.state
    this.setState({score: score + 1})
    console.log(score + 1);
  }
  spawnBubble(){
    let cx = Math.floor(Math.random() * 1500)
    let r = Math.floor(15 + Math.random() * (30 - 10))
    let bubble = {r: r, cx: cx, cy: 800, tx:  Math.floor(Math.random() * 5) - 2.5}
    // console.log(cx)
    this.state.libraryOfBubbles.push(bubble)
  }

  moveBubbles(){
    // console.log("moveBubbles")
    let {libraryOfBubbles} = this.state
    libraryOfBubbles = libraryOfBubbles.map(bubble => {
      bubble.cy-= Math.floor(Math.random() * 15)
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
        <h2 class="header"> Score:{this.state.score}</h2>
        <svg width={1500} height={1000}>
          {
            this.state.libraryOfBubbles.map(bubble=>{
              return <Bubble pop={this.pop} r={bubble.r} cx={bubble.cx} cy={bubble.cy} />
            })
          }
        </svg>
      </div>
    )
  }
}

export default Game
