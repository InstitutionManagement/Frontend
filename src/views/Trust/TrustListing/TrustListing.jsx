import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Table, Tooltip, OverlayTrigger } from 'react-bootstrap';


import { FormInputs } from '../../../components/FormInputs/FormInputs.jsx';
import Card from '../../../components/Card/Card.jsx';
import { trustActions } from '../../../redux/Actions/trust.actions';
import { connect } from 'react-redux';
import Button from '../../../elements/CustomButton/CustomButton.jsx';
import Modal from '../../../components/Modal/Modal';
import { institutionActions } from '../../../redux/Actions/institution.action';


class TrustListing extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: '',
    isModalOpen: false,
    trust: {}
  }
  componentDidMount() {
    this.props.getAll();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  deleteTrust(id) {
    this.props.deleteTrust(id);
  }

  setTrustName = (prop) => {
    this.setState({ trust: prop });
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, phone, address } = this.state;
    let institution = {
      name,
      email,
      phone,
      address,
      trust_id: this.state.trust._id
    }
    if (institution.name !== '' && institution.email !== '' && institution.phone !== '' && institution.trust_id !== '') this.props.dispatchSubmit(institution);
  };

  render() {
    const { name, email, phone, submitted } = this.state;
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
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Created By</th>
                        <th className="center">Add Institution</th>
                        <th/>
                        <th/>
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
                              <td className="center">
                              <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Add Institution</Tooltip>}>
                              <i className="icon text-primary far fa-building" onClick={e => { this.setTrustName(prop); this.toggleModal(); }}></i>
                              </OverlayTrigger>
                              </td>
                              <td>
                              <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Delete Trust</Tooltip>}>
                                <i className="icon pe-7s-trash text-danger" onClick={this.toggleModal}></i>
                              </OverlayTrigger>
                              </td>
                              <td>
                              <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Edit Trust</Tooltip>}>
                                <i className="icon fas fa-pencil-alt text-info" onClick={this.toggleModal}></i>
                              </OverlayTrigger>
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
        <Modal
          show={this.state.isModalOpen}
          header={`Add Institution in ${this.state.trust.name}`}
        >
          <div>
            <Grid fluid>
              <Row>
                <Col md={12}>
                  <form id="createInstitutionForm" onSubmit={this.handleSubmit}>
                    <FormInputs
                      ncols={['col-md-5', 'col-md-3', 'col-md-4']}
                      proprieties={[
                        {
                          label: 'Name',
                          type: 'text',
                          name: 'name',
                          bsClass: 'form-control' + (submitted && !name ? ' has-error' : ''),
                          placeholder: 'Institution Name',
                          onChange: this.handleChange
                        },
                        {
                          label: 'Email',
                          type: 'email',
                          name: 'email',
                          bsClass: 'form-control' + (submitted && !email ? ' has-error' : ''),
                          placeholder: 'Email',
                          onChange: this.handleChange
                        },
                        {
                          label: 'Phone',
                          type: 'number',
                          name: 'phone',
                          bsClass: 'form-control' + (submitted && !phone ? ' has-error' : ''),
                          placeholder: 'Phone',
                          onChange: this.handleChange
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Address</ControlLabel>
                          <FormControl
                            rows="5"
                            name="address"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Address"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="default" marginLeft pullRight onClick={this.toggleModal}>
                      Cancel
                    </Button>
                    <Button bsStyle="info" pullRight type="submit">
                      Create Institution
                    </Button>
                    <div className="clearfix" />

                  </form>

                </Col>
              </Row>
            </Grid>
          </div>
        </Modal>
        
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
  },
  dispatchSubmit: institution => {
    dispatch(institutionActions.create(institution));
  }
});

export default connect(mapStateToProps, mapDispachToProps)(TrustListing);
