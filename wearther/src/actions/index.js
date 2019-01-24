
import {Actions} from 'react-native-router-flux';

import {DETAILS_FOUND} from './types';
//{type:LOCATIONS_UPDATED, payload: response}
/*

Have to first use autocomplete for dropdown. 
then when they click on option, fill it into input bar and use findplacefromtext
to get lat and long which will then be used in the dark sky weather api


*/

const locationDetails = (dispatch, details) => {
    dispatch({
        type:DETAILS_FOUND,
        payload: location
    });

    Actions.main();
}

export const findWeather = ({weather}) => {

    return (dispatch) => {
      fetch(``)
    }
}