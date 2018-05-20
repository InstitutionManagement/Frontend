import React, { Component } from 'react';
import { connect } from 'react-redux';
import { institutionAdminActions } from './actions';
import { Grid, Row, Col, Table, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Card from '../../../components/Card/Card.jsx';

class InstitutionAdminListing extends Component {
  componentDidMount() {
    if (this.props.user.user_type === 'TrustAdmin' && this.props.user.parent_trust_id) {
      const condition = {
        parent_trust_id: this.props.user.parent_trust_id,
        status: 'STATUS_REQUIRED'
      };
      this.props.getInstitutionAdmins(condition);
    }
  }
  render() {
    const { institutionAdmin } = this.props;
    const loading = institutionAdmin.loading ? 'Loading Institution Admins...' : 'Institution Admins';
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={loading}
                category="Institution Administrators in the platform are listed below. This page allows to Deactivate a Institution Admin, Reset Password"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Trust Name</th>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {institutionAdmin.data &&
                        institutionAdmin.data.length > 0 &&
                        institutionAdmin.data.map((prop, key) => {
                          return (
                            <tr key={key} className={prop.status.tag === 'DELETED' ? 'backgroundRed' : ''}>
                              <td>{key + 1}</td>
                              <td>
                                <OverlayTrigger
                                  placement="top"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      {prop.status.tag === 'DELETED' ? 'Deleted' : 'Active'}
                                    </Tooltip>
                                  }
                                >
                                  <i
                                    className={
                                      prop.status.tag === 'DELETED'
                                        ? 'icon fas fa-circle text-danger'
                                        : 'icon fas fa-circle text-success'
                                    }
                                  />
                                </OverlayTrigger>
                              </td>
                              <td>
                                <img src={prop.image_url} alt={prop.name} className="profile-pic" />
                              </td>
                              <td>{prop.name}</td>
                              <td>{prop.email}</td>
                              <td>
                                {prop.address}
                                <br />Phone : {prop.phone}
                              </td>
                              <td>{prop.trust_name}</td>
                              <td className="center">
                                {prop.status.tag === 'DELETED' ? (
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={
                                      <Tooltip id="tooltip">
                                        {prop.activating ? 'Activating ' + prop.name : 'Activate ' + prop.name}
                                      </Tooltip>
                                    }
                                  >
                                    <i
                                      className="icon pe-7s-add-user text-success"
                                      onClick={e => {
                                        e.preventDefault();
                                        this.activateSuperAdmin(prop.auth_id);
                                      }}
                                    />
                                  </OverlayTrigger>
                                ) : (
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={
                                      <Tooltip id="tooltip">
                                        {prop.deleting ? 'Deleting ' + prop.name : 'Delete ' + prop.name}
                                      </Tooltip>
                                    }
                                  >
                                    <i
                                      className="icon pe-7s-delete-user text-danger"
                                      onClick={e => {
                                        e.preventDefault();
                                        this.deleteSuperAdmin(prop.auth_id, prop.superadmin_id);
                                      }}
                                    />
                                  </OverlayTrigger>
                                )}
                              </td>
                              <td className="center">
                                <OverlayTrigger
                                  placement="top"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      {prop.resetPassword ? 'Resetting Password' : 'Reset Password'}
                                    </Tooltip>
                                  }
                                >
                                  <i
                                    className={
                                      prop.resetPassword
                                        ? 'icon pe-7s-shuffle text-danger'
                                        : 'icon pe-7s-refresh-2 text-warning'
                                    }
                                    onClick={e => {
                                      e.preventDefault();
                                      this.resetPassword(prop.auth_id, prop.email, prop.phone);
                                    }}
                                  />
                                </OverlayTrigger>
                                {/* <button className="btn btn-info btn-sm" onClick={e=> {e.preventDefault(); this.resetPassword(prop.auth_id, prop.email, prop.phone);}}>Reset Password</button> */}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapStatetoProps = state => {
  const { authentication, institutionAdmin } = state;
  return {
    user: authentication.user.user,
    institutionAdmin
  };
};
const mapDispatchtoProps = dispatch => ({
  getInstitutionAdmins: condition => {
    dispatch(institutionAdminActions.getAll(condition));
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(InstitutionAdminListing);
