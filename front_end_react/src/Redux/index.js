import {combineReducers} from 'redux';
import {GetReducer} from "./ActionReducers";

export const reducers=combineReducers({
    allProducts:GetReducer
});

