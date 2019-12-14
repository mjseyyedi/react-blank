import { call, put, takeLatest, all } from 'redux-saga/effects';

import {fetchHomePageSuccess} from './actions.js'

import types from './constants';
import request from 'utils/request';

function* getHomepage(actions) {
    const params = {  lat : 35.6892, long : 51.389}
    const response = yield call(request, 'getHomePage', params )
  if (response.status){
    yield put(fetchHomePageSuccess(response.data))
  }
  console.log(1121212121, response);

}
export default function* HomepageRootSaga() {

  yield all([
    takeLatest(types.FETCH_HOME_PAGE, getHomepage)
  ]);
}
