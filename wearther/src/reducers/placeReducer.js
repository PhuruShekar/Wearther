import {DETAILS_FOUND} from '../actions/types'; 


const INITIAL_STATE = {location:''};

export default (state = INITIAL_STATE, action) => {
    console.log('actionL',action);
    switch (action.type) {

        case DETAILS_FOUND:
            return {...state, location: action.payload};
        
        default:
            return state;
    }
}