import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const initState = {
    isMobile: false,
}

export const actionTypes = {
    CHANGE_STATE: 'CHANGE_STATE',
}


// REDUCERS
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_STATE:
            return {
                ...state,
                [action.stateName]: action.value
                ,
            }
        default: return state
    }
}

// ACTIONS
// export const setLanguage = lang => dispatch => {
//   return dispatch({ 
//     type: actionTypes.SET_LANGUAGE,
//     lang
//   })
// }

export const initStore = (initialState = initState) =>
    createStore(
        reducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            logger
        ))