import React, { Component } from 'react';
import { connect } from 'react-redux';


class DetailProfil extends Component {
  render() {
    const {profile} = this.props
    return (
      <div>
            <h1>Profile Information</h1>
            {profile.name && <p><i>Name:</i> <b>{profile.name}</b></p>}
            {profile.username && <p><i>Username:</i> <b>{profile.username}</b></p>}
            {profile.email && <p><i>Email:</i> <b>{profile.email}</b></p>}
            {profile.website && <p><i>Website:</i> <b>{profile.website}</b></p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.setProfileReducer
});

export default connect(
  mapStateToProps,
)(DetailProfil);