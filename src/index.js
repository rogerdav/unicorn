import React, {setGlobal} from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

setGlobal ({
  unicorns: [],
})

axios.get(`https://unicorn-backend.herokuapp.com/api/v1/unicorn`)
 .then(results => {
   console.log('results', results.data);
   setGlobal ({
    unicorns: results.data
  })
 })


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
