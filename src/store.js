import { createStore, combineReducers } from 'redux';
import players from './reducers/players';
import games from './reducers/gamesReducer';
import workspace from './reducers/workspace';
import { routerReducer } from 'react-router-redux'

const myReducers = { players, games, workspace }

export default(initialState) => {
    return createStore(combineReducers({...myReducers, routing: routerReducer}),
      initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
