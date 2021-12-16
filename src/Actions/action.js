import * as type from "../types";
export function addUser(data) {
  console.log(data);
  return {
    type: type.ADD_USERS_REQUESTED,
    payload: data,
  };
}
