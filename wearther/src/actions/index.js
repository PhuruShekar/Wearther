import {LOCATION_CHANGED, LOCATIONS_UPDATED} from './types';
import {API_KEY_GOOG,API_KEY_WEATHER} from '../API';
import axios from 'axios';



export const locationChanged = (text) => {
  return {
      type: LOCATION_CHANGED,
      payload: text
  };
};
/*

Have to first use autocomplete for dropdown. 
then when they click on option, fill it into input bar and use findplacefromtext
to get lat and long which will then be used in the dark sky weather api


*/

export const findLocation = ({location}) => {
  return (dispatch) => {
  axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&types=(cities)&key=${API_KEY_GOOG}`)
    .then(response => {
        dispatch({type:LOCATIONS_UPDATED, payload: response});
    });

  };
};

export const findWeather = ({weather}) => {

    return (dispatch) => {
      fetch(``)
    }
}