import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from 'redux/Homepage/reducer';
import saga from 'redux/Homepage/saga';

import {fetchHomePage} from 'redux/Homepage/actions'

import View from './view'

const key = 'home';

export default function HomePageIndex(props){
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const mapStateToProps = useSelector(createStructuredSelector({

  }));

  const dispatch = useDispatch();

  const mapDispatchToProps = {
      fetchHomePage: data => dispatch(fetchHomePage(data))
  }

  const finalProps = Object.assign({}, mapStateToProps, mapDispatchToProps, props)

  return <View {...finalProps}/>
}
