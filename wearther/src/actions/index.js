
import {Actions} from 'react-native-router-flux';
import Config from 'react-native-config';
import {REQ_WEATHER} from './types';
//{type:LOCATIONS_UPDATED, payload: response}
/*

Have to first use autocomplete for dropdown. 
then when they click on option, fill it into input bar and use findplacefromtext
to get lat and long which will then be used in the dark sky weather api


*/

const locationDetails = (dispatch, details) => {
    dispatch({
        type:REQ_WEATHER,
        payload: details
    });

    Actions.mainpage();
}

 export const findWeather = (lat,lng) => {

    return  fetch(`https://api.darksky.net/forecast/${Config.REACT_APP_API_KEY_WEATHER}/${lat},${lng}`)
            .then((response) => response.json() )
            .then((responseJson) => {
                console.log(responseJson);
                return responseJson;
            });
    
}

