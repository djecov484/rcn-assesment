import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import { userReducer } from './reducers/userReducer'
import thunk from 'redux-thunk'

const initialState = {
  data: {
    items: [],
    pages: [1, 2, 3, 4, 5],
    currentPage: 1,
    searchValue: '',
  },
}
const reducer = combineReducers({
  data: initialState,
  selectedUser: userReducer,
})

const middleware = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store
