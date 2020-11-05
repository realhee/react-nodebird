import { delay, put, all, fork, take } from 'redux-saga/effects';
// import axios from 'axios';

// function addPostAPI(data) {
//     return axios.post('/api/post', data);
// }
function* addPost() {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: 'ADD_POST_SUCCESS',
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        });
    }
}
function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ]);
}