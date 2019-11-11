import {GETDATAFROMAPI} from '../actions/actions'

const initialState = {
    data: []
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case GETDATAFROMAPI :
            return {
                ...state,
                data : action.json
            }

        default:
            return state
    }
}

export default appReducer
    
  
