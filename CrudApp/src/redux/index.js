import {  legacy_createStore as createStore} from 'redux';
import Reducers from './reducers/index'

export default configStore = () => {
  
  let store = createStore(Reducers)
  return store
}