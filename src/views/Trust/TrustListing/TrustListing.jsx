import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Card from '../../../components/Card/Card.jsx';
// import { thArray, tdArray } from 'variables/Variables.jsx';
import { trustActions } from '../../../redux/Actions/trust.actions';
import { connect } from 'react-redux';

class TrustListing extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  deleteTrust(id) {
    this.props.deleteTrust(id);
  }

  render() {
    const { trusts } = this.props;
    const loading = trusts.loading ? 'Loading Trusts....' : 'Trust Listing';
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={loading}
                category="Active Trusts in the System"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {/* {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })} */}
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Created By</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {trusts.data && Object.keys(trusts.data).length > 0 &&
                        trusts.data.map((prop, key) => {
                          return (
                            <tr key={key}>
                              <td>{key + 1}</td>
                              <td>{prop.name}</td>
                              <td>{prop.email}</td>
                              <td>{prop.phone}</td>
                              <td>{prop.address}</td>
                              <td>{prop.created_by.name}</td>
                              <td>
                                <button>Delete</button>
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
  const { trusts } = state;
  return {
    trusts
  };
};

const mapDispachToProps = dispatch => ({
  getAll: () => {
    dispatch(trustActions.getAll());
  },
  deleteTrust: id => {
    dispatch(trustActions.delete(id));
  }
});

export default connect(mapStateToProps, mapDispachToProps)(TrustListing);
