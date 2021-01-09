
import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <>  
    <BrowserRouter>
      <Provider store={store}>  
        <App />
      </Provider>
    </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);

