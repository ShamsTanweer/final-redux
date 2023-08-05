import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import postReducer from "./reducers/itemReducer";
import { createRoot } from "react-dom/client";

const rootReducer = combineReducers({
  posts: postReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
