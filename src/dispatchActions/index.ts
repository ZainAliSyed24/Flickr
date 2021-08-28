import {
  ALL_IMAGES,
   
  } from '../actions/ActionsTypes'
  import constants from '../constants';
  import {store, persistor} from '../store'
  import {
    request,
    generalSaveAction,
    logout,
    success,
    failure,
    requestAction,
  } from '../actions/ServiceAction'
  import HttpServiceManager from '../services/HttpServiceManager'

  const dispatchGetAllImages = (cbSuccess, cbFailure) => {
    dispatchApi(
      ALL_IMAGES,
      constants.get,
      'get',
      {},
      false,
      cbSuccess,
      cbFailure,
      false,
    )
  }

  const logoutDispatch = () => {
    store.dispatch(logout())
  }




export {
  dispatchGetAllImages,
}