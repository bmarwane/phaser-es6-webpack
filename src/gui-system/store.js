import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import createHistory from 'history/createHashHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'


import mainScreenReducer from './screens/Main/behaviors'
import simpleMessageReducer from './screens/SimpleMessage/behaviors'

export const history = createHistory()
const routingMiddleware = routerMiddleware(history)


const reducers = {
    router: routerReducer,
    mainScreen: mainScreenReducer,
    simpleMessage: simpleMessageReducer,
}

const reducer  = combineReducers(reducers)

export function initStore(initialState){
    return applyMiddleware(thunkMiddleware, routingMiddleware)(createStore)(reducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

}

const store = initStore()
export default store