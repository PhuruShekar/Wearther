import {LOCATION_CHANGED, LOCATIONS_UPDATED} from './types';
import {API_KEY_GOOG,API_KEY_WEATHER} from '../API';
//import debounce from 'lodash/debounce';
import axios from 'axios';



export const locationChanged = ({query}) => {
  return (dispatch) => {
    axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&key=${API_KEY_GOOG}`)
      .then(response => {
          dispatch(consol.log(response));
      });
  
    };
};

//{type:LOCATIONS_UPDATED, payload: response}
/*

Have to first use autocomplete for dropdown. 
then when they click on option, fill it into input bar and use findplacefromtext
to get lat and long which will then be used in the dark sky weather api


*/

export const findLocation = ({location}) => {
 
};

export const findWeather = ({weather}) => {

    return (dispatch) => {
      fetch(``)
    }
}