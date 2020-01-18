import { takeLatest, all, put, call } from "redux-saga/effects";
import { GET_USERS_SUCCESS, GET_USERS_FAILURE, GET_USERS } from "../consts";
import axios from "axios";

function* fetchUsers() {
  try {
    debugger;
    const json = yield call(getUsersAPI);
    yield put({ type: GET_USERS_SUCCESS, payload: json.data });
  } catch (err) {
    yield put({ type: GET_USERS_FAILURE, payload: err });
  }
}

function* actionWatcher() {
  yield takeLatest(GET_USERS, fetchUsers);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}

const getUsersAPI = () =>
  axios
    .get("https://reqres.in/api/users", {
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
