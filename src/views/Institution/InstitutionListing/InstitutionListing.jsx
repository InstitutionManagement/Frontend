import React, { Component } from 'react';
import { connect } from 'react-redux';
import { institutionActions } from '../../../redux/Actions/institution.action';

class InstitutionListing extends Component {
  componentWillMount() {}

  render() {
    return <div className="content" />;
  }
}

const mapStateToProps = state => {
  const { institutions } = state;
  return {
    institutions
  };
};

const mapDispatchToProps = dispatch => ({
  getAllInstitutions: () => {
    dispatch(institutionActions.getAll());
  },
  deleteInstitution: id => {
    dispatch(institutionActions.delete(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InstitutionListing);
