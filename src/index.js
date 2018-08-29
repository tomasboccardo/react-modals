import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppFrame from './components/app-frame'
import registerServiceWorker from './utils/registerServiceWorker';



ReactDOM.render(<AppFrame />, document.getElementById('root'));
registerServiceWorker();
