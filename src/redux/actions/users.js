import * as type from "../types";
export function getUsers(data) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: data,
  };
}
