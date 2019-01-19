import {combineReducers} from 'redux';
import PlaceReducer from './PlaceReducer';

export default combineReducers ({
    place: PlaceReducer
});