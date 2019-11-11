//https://gkueny.fr/react-lecon-4

import React from 'react'
class App extends React.Component {

    componentDidMount () {
      //console.log("componentDidMount");
        this.props.fechtApi()
    }

    render() {
      console.log(JSON.stringify(this.props.state.state.data) +  " this.props.state");
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome  { this.props.title }</h2>
                </div>

                <div className="App-intro">
                OOOK

                </div>
                <ul>
        {this.props.state.state.data.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
            </div>
        )
    }

}

export default App;