import { combineReducers } from "redux";
import Index from "./index";
const rootReducers = combineReducers({
  users: Index,
});
export default rootReducers;
