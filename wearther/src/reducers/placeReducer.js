import {REQ_WEATHER, DETAILS_FOUND} from '../actions/types'; 


const INITIAL_STATE = {
    error:'',
    loading: false,
    weather:''};

export default (state = INITIAL_STATE, action) => {
    console.log('actionL',action);
    switch (action.type) {

        case REQ_WEATHER:
            return {...state, loading: true, error:''};
        
        case DETAILS_FOUND:
            return {...state, weather:action.payload};

        default:
            return state;
    }
}