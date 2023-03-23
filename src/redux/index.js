// import rootReducer from "./reducers"
// import { composeWithDevTools } from "redux-devtools-extension"
// import thunk from "redux-thunk"
// import {applyMiddleware,compose,createStore} from "redux"

// const initialState = {}

// const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
// const composeEnhances = composeFunc(applyMiddleware(thunk))
// const store = createStore(rootReducer(),initialState, composeEnhances )

// export default store
import {createStore, compose, applyMiddleware} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnhances = composeFunc(applyMiddleware(thunk))
const store = createStore(rootReducer(),initialState, composeEnhances )

export default store;