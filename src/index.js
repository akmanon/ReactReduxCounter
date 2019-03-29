import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./styles.css";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state = { count: 0 }, action) => {
  if (action.type === INCREMENT) {
    return {
      count: ++state.count
    };
  } else if (action.type === DECREMENT) {
    return {
      count: --state.count
    };
  } else {
    return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
