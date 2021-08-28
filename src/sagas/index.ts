import { fork } from "redux-saga/effects";
import init from "./init";
import serviceSaga from "./serviceSaga";
// import socketConnectionSaga from "./SocketSaga/socketConnectionSaga";
// import socketDataSaga from "./SocketSaga/socketDataSaga";
export default function* root() {
    yield fork(init);
    yield fork(serviceSaga);
    // yield fork(socketConnectionSaga);
    // yield fork(socketDataSaga);
}
