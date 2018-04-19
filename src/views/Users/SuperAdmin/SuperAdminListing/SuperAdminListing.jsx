import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Card from '../../../../components/Card/Card.jsx';
import { superAdminActions } from '../../../../redux/Actions/super_admin.actions';
import { connect } from 'react-redux';
import './SuperAdminListing.css';

class SuperAdminListing extends Component {
  componentDidMount() {
    this.props.getSuperAdmins();
  }

  deleteSuperAdmin = (authId, superAdminId) =>{
    this.props.deleteSuperAdmin(authId, superAdminId);
  }


  activateSuperAdmin = (authId) => {
    this.props.activateSuperAdmin(authId);
  }

  resetPassword = (authId, email, phone) => {
    this.props.resetPassword(authId, email, phone);
  }


  render() {
    const { superAdmin } = this.props;
    const loading = superAdmin.loading ? 'Loading Super Admins....' : 'Super Administrators';
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={loading}
                category="Super Administrators in the platform are listed below. This page allows to Deactivate a Super Admin, Reset Password, Add Super Admin to a Group Policy"
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
                        <th>Action</th>
                        <th>Reset Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      {superAdmin.data && superAdmin.data.length > 0 &&
                        superAdmin.data.map((prop, key) => {
                          return (
                            <tr key={key} className={prop.status.tag === "DELETED" ?"backgroundRed":""}>
                              <td>{key + 1}</td>
                              <td> <i className= {prop.status.tag === "DELETED" ?"icon fas fa-circle text-danger":"icon fas fa-circle text-success"} ></i></td>
                              <td><img src={prop.image_url} alt={prop.name} width="100" className="profile-pic"/></td>
                              <td>{prop.name}</td>
                              <td>{prop.email}</td>
                              <td>{prop.address}<br/>Phone : {prop.phone}</td>   
                                                      
                              <td>
                              {prop.status.tag === "DELETED" ?
                                <button className="btn btn-success btn-sm"  onClick={e => { e.preventDefault(); this.activateSuperAdmin(prop.auth_id); } }>{ prop.activating ? 'Activating' : 'Activate'}</button>
                                :
                                <button className="btn btn-danger btn-sm"  onClick={e => { e.preventDefault(); this.deleteSuperAdmin(prop.auth_id, prop.superadmin_id); } }>{ prop.deleting ? 'Deleting' : 'Delete'}</button>
                              }
                              </td>
                              <td>
                              <button className="btn btn-info btn-sm" onClick={e=> {e.preventDefault(); this.resetPassword(prop.auth_id, prop.email, prop.phone);}}>Reset Password</button>
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

const mapStateToProps = state => {
  const { superAdmin } = state;
  return {
    superAdmin
  };
};

const mapDispachToProps = dispatch => ({
  getSuperAdmins: () => {
    dispatch(superAdminActions.getSuperAdmins());
  },
  deleteSuperAdmin: (authId, superAdminId) => {
    dispatch(superAdminActions.deleteSuperAdmin(authId, superAdminId));
  },
  activateSuperAdmin: (authId) => {
    dispatch(superAdminActions.activateSuperAdmin(authId));
  },
  resetPassword:(authId, email, phone) => {
    dispatch(superAdminActions.resetPassword(authId, email, phone));
  }
});

export default connect(mapStateToProps, mapDispachToProps)(SuperAdminListing);
