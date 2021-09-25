import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';

const Profiles = ({ getProfileById }) => {
  return (
    <Fragment>
      <h1>Profiles</h1>
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStatToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStatToProps, { getProfileById })(Profiles);
