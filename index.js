var React = require('react')
var ReactDOM = require('react-dom')

import App from './App'


var placeToMount = document.getElementById('root')

ReactDOM.render(<App width={window.innerWidth} height={window.innerHeight} />, placeToMount)
