import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducers);
sagaMiddleware.run(rootSaga);
export default store;
