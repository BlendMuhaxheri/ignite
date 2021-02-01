import {combineReducers} from 'redux'

import gamesReducer from "./gamesReducers"

const rootReducer=combineReducers({
    games:gamesReducer,
});

export default rootReducer;