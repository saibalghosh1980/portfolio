import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import storage from "redux-persist/lib/storage";
import storageSession from 'redux-persist/lib/storage/session';
import App from "./App";
import "./index.css";
import allReducer from "./redux/reducer/allReducer";
import reportWebVitals from "./reportWebVitals";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage: storage // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, allReducer);

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware())
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
