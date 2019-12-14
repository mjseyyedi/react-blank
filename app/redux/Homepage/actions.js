
import types  from './constants';
import makeActionCreator from 'redux/helpers/makeActionCreator'

export const fetchHomePage = makeActionCreator(
  types.FETCH_HOME_PAGE,
  'data'
)
export const fetchHomePageSuccess = makeActionCreator(
  types.FETCH_HOME_PAGE_SUCCESS,
  'result'
)
