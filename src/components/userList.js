import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserCurrentProfile, getUserProfile} from "../actions/actions";
class userList extends Component {

  render() {
    return (
      <React.Fragment>
        {this.props.users.data.map((item, i) => (
          <div key={i} className="card mb-10">
            <div className="card-content">
              <div className="content">
                <div>
                  <b>{item.name}</b>
                </div>
                <div>{item.username}</div>
                <div>{item.email}</div>
              </div>
            </div>
            <footer className="card-footer">
              <button
                className="card-footer-item button is-primary is-light"
                onClick={this.props.setCharacter(item.id)}
              >
                Voir
              </button>
              <button className="card-footer-item is-info is-light">
                Ajouter
              </button>
            </footer>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(getUserCurrentProfile(id));
      dispatch(getUserProfile(id));
    };
  }
});

export default connect(null, mapDispatchToProps)(userList);

/**   **/
