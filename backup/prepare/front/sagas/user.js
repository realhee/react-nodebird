import { all, fork, put, take, call } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI() { // generator가 아님! 주의!
    return axios.post('/api/login');
}
function* login() {
    try {
        const result = yield call(logInAPI);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data : result.data,
        });
    } catch (err) {
        yield put ({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        })
    }
    
}
function* watchLogIn() {
    yield take('LOG_IN_REQUEST', login);
}

function logOutAPI() { // generator가 아님! 주의!
    return axios.post('/api/logout');
}
function* logOut() {
    try {
        const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data : result.data,
        });
    } catch (err) {
        yield put ({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })
    }
}
function* watchLogOut() {
    yield take('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}