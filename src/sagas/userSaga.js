import { call, put, takeEvery } from "redux-saga/effects";
function addPost(data) {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "content-type": "application-json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json)
    .catch((error) => {
      throw error;
    });
}
function* fetchUsers(action) {
  console.log(action);
  try {
    const users = yield call(addPost);
    yield put({ type: "ADD_USERS_SUCEESS", users: users });
  } catch (e) {
    yield put({ type: "ADD_USERS_FAILURE", message: e.message });
  }
}
function* userSaga() {
  yield takeEvery("ADD_USERS_REQUESTED", fetchUsers);
}
export default userSaga;
