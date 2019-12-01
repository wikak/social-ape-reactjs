import fetch from "cross-fetch";

export const GET_DATA_FROM_API = "GET_DATA_FROM_API";
export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export function getDataFromApi(json) {
  return {
    type: GET_DATA_FROM_API,
    json
  };
}
export function getUserCurrentProfile(id) {
  //console.log(JSON.stringify(json) + " json");
  return {
    type: GET_USER_PROFILE,
    id
  };
}
export function setUserProfile(profile) {
  return {
    type: SET_USER_PROFILE,
    profile
  };
}
export function fetchApi() {
  return function(dispatch) {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(getDataFromApi(json)));
  };
}
export function getUserProfile(id) {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(profile => dispatch(setUserProfile(profile)));
  };
}
