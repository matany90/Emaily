import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

/* createStore takes:
 1. root tree's state of the app (from index.js in reducers file),
 2. init state (if needed),
 3. and applyMiddleware() that takes all helper middleware (likes redux-thunk for async logic in redux) */
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));  

ReactDOM.render(
<Provider store = { store }>
    <App />
</Provider>
, document.querySelector('#root'));
 //loads the react app to public/index.html (to last <div id = 'root' />)
