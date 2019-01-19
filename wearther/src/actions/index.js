import {LOCATION_CHANGED} from './types';
import {API_KEY_GOOG,API_KEY_WEATHER} from '../API';
export const locationChanged = (text) => {
  return {
      type: LOCATION_CHANGED,
      payload: text
  };
};

export const findLocation = ({location}) => {
  

  return (dispatch) => {
    
  };
};

export const findWeather = ({weather}) => {

    return (dispatch) => {
      fetch(``)
    }
}