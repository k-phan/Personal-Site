import React from 'react';
import ReactDOM from 'react-dom';
import './utils/skeleton/normalize.css';
import './utils/skeleton/skeleton.css';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
