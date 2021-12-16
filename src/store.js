import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducers);
sagaMiddleware.run(rootSaga);
export default store;
