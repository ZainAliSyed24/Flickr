import {LOAD} from 'redux-storage';
import {take, fork, select, put} from 'redux-saga/effects';
import utility from '../utility';
import {store} from '../store';

function* watchReduxLoadFromDisk() {
  while (true) {
    console.log('init  ********  ', LOAD);
    yield take(LOAD);
    try {
      console.log('init user : condiction ********  ');
    } catch (err) {
      console.warn('saga watchReduxLoadFromDisk error: ', err);
    }
  }
}

export default function* root() {
  yield fork(watchReduxLoadFromDisk);
}
