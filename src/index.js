import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from "./reducer";
import {createStore} from "redux";
import { Provider } from "react-redux";
import CounterGroup from "./CounterGroup";

//ReactDOM.render(<App />, document.getElementById('root'));
//serviceWorker.unregister();

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}> 
      <CounterGroup size="3" />
    </Provider>,
    document.getElementById("root")
  );