import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Card from '../../../../components/Card/Card.jsx';
import { userActions } from '../../../../redux/Actions/user.actions';
import { connect } from 'react-redux';

class SuperAdminListing extends Component {
  componentDidMount() {
    this.props.getAllSuperAdmins();
  }

  deleteTrust(id) {
    this.props.deleteTrust(id);
  }

  render() {
    const { users } = this.props;
    const loading = users.loading ? 'Loading Super Admins....' : 'Super Admins';
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={loading}
                category="Super Admins in the Platform"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                       
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {users.superAdmins && users.superAdmins.length > 0 &&
                        users.superAdmins.map((prop, key) => {
                          return (
                            <tr key={key}>
                              <td>{key + 1}</td>
                              <td><img src={prop.image_url} alt={prop.name} width="150"/></td>
                              <td>{prop.name}</td>
                              <td>{prop.email}</td>
                              <td>{prop.phone}</td>
                              <td>{prop.address}</td>                             
                              <td>
                                <button className="btn btn-danger">Delete</button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            {/* <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return {
    users
  };
};

const mapDispachToProps = dispatch => ({
getAllSuperAdmins: () => {
    dispatch(userActions.getAllSuperAdmins());
  },
  deleteTrust: id => {
    dispatch(userActions.delete(id));
  }
});

export default connect(mapStateToProps, mapDispachToProps)(SuperAdminListing);
