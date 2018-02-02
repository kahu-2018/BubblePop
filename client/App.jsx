import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Game from './components/Game'

const App = () => {
  return (
    <Router>
      <div>
        <div className = 'header'>
          <h1 className = 'title'> Bublé-Pop </h1>
          <Route path="/game" component={Game} />
          <a href='/#/game' className="startButton">Start</a>
          <h2 className = 'score'> Score: {this.state.score}</h2>
        </div>
        <svg className="buble" width={this.props.width} height={this.props.height}>
          {
            this.state.libraryOfBubbles.map(bubble=>{
              return <Bubble pop={this.pop} r={bubble.r} cx={bubble.cx} cy={bubble.cy} />
            })
          }
        </svg>
      </div>
    </Router>
  )
}

export default App