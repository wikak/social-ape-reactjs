import { connect } from 'react-redux'

import{ getDataFromApi } from '../actions/actions'

import App from '../App'

const mapStateToProps = (state) => {
    return {
        state: {state}
    }
}

const mapDispatchToProps = (dispatch) => {
return {
    fechtApi : () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((responseJson) => {
                    //console.log(JSON.stringify(responseJson) +  " responseJson.body");
                    dispatch(getDataFromApi(responseJson))
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    }

}

const AppContainer = connect(
mapStateToProps,
mapDispatchToProps
)(App)

export default AppContainer