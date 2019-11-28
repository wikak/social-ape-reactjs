import { GET_DATA_FROM_API } from "../actions/actions";
//import { combineReducers } from 'redux'

const initialState = {
  data: []
};

export function userReducer(state = initialState, action) {
  //console.log(JSON.stringify(action) + " type GET_DATA_FROM_API");
  switch (action.type) {
    case GET_DATA_FROM_API:
      return Object.assign({}, state, {
        //data: action.json
        data: action.json
      });
    default:
      return state;
  }
}

export default userReducer;
//export default combineReducers({userReducer});
