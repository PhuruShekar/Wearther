import {REQ_WEATHER} from '../actions/types'; 


const INITIAL_STATE = {weather:''};

export default (state = INITIAL_STATE, action) => {
    console.log('actionL',action);
    switch (action.type) {

        case REQ_WEATHER:
            return {...state, weather: action.payload};
        
        default:
            return state;
    }
}