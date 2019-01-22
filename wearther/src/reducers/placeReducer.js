import {LOCATION_CHANGED, LOCATIONS_UPDATED} from '../actions/types'; 


const INITIAL_STATE = {location:''};

export default (state = INITIAL_STATE, action) => {
    console.log('actionL',action);
    switch (action.type) {

        case LOCATION_CHANGED:
            return {...state, location: action.payload};
        
        case LOCATIONS_UPDATED:
            return{...state, location: action.payload};
        default:
            return state;
    }
}