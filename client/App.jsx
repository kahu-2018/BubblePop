import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Game from './components/Game'

const App = () => {
  return (
    <Router>
      <div>
        <h1>BublePop</h1>
        <Route path="/game" component={Game} />
        <a href='/#/game' className="startButton">Start</a>
      </div>
    </Router>
  )
}

export default App