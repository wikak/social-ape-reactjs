import { GET_DATA_FROM_API, GET_USER_PROFILE, SET_USER_PROFILE } from "../actions/actions";
import { combineReducers } from "redux";

function userReducer(state = {data: []}, action) {
  //console.log(JSON.stringify(action) + " type GET_DATA_FROM_API");
  switch (action.type) {
    case GET_DATA_FROM_API:
      return Object.assign({}, state, {
        data: action.json
      });
    default:
      return state;
  }
}
function getProfileReducer(state = {id: 0}, action) {
  switch (action.type) {
    case GET_USER_PROFILE:
      return Object.assign({}, state, {
        id: action.id
      });
    default:
      return state;
  }
}
function setProfileReducer (state = {}, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return action.profile;
    default:
      return state;
  }
};

const appReducer = combineReducers({
  getProfileReducer,
  userReducer,
  setProfileReducer
});

export default appReducer;
