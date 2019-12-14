import produce from 'immer';
import types from './constants';

import initialState from './initialState.json'

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.FETCH_HOME_PAGE:{
        draft.homeData = {}
        break
      }

      case types.FETCH_HOME_PAGE_SUCCESS:{
        console.log('response ....', action)
        draft.homeDate = action.result;
        break;
      }
    }

  });

export default homeReducer;
