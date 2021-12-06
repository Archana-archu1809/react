import { combineReducers } from "redux";
import firstReducers from "./users";
const rootReducers = combineReducers({
  users: firstReducers,
});
export default rootReducers;
