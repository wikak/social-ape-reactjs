import fetch from "cross-fetch";

export const GET_DATA_FROM_API = "GET_DATA_FROM_API";

export function getDataFromApi(json) {
  //console.log(JSON.stringify(json) + " json");
  return {
    type: GET_DATA_FROM_API,
    json
  };
}

/**export function fetchApi() {
  return dispatch => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => dispatch(getDataFromApi(response))
      .catch(error => console.error(error))
    }
}**/

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
