var React = require('react')
var ReactDOM = require('react-dom')
var score = require('./components/Bubble.jsx').score

import App from './App'



var placeToMount = document.getElementById('root')

ReactDOM.render(<App width={window.innerWidth} height={window.innerHeight} />, placeToMount)
