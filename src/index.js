import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css'
import Game from './components/Game';
import registerServiceWorker from './registerServiceWorker';
//comment
ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
