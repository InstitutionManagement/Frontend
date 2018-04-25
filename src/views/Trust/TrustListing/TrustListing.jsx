import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Table, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FormInputs } from '../../../components/FormInputs/FormInputs.jsx';
import Card from '../../../components/Card/Card.jsx';
import { trustActions } from '../../../redux/Actions/trust.actions';
import { connect } from 'react-redux';
import Button from '../../../elements/CustomButton/CustomButton.jsx';
import Modal from '../../../components/Modal/Modal';
import { institutionActions } from '../../../redux/Actions/institution.actions';
import { trustAdminActions } from '../../../redux/Actions/trustAdmin.actions';
import { alertConstants } from '../../../constants/alert.constants';

const formFields = {
  name: '',
  email:'',
  phone:'',
  address:'',
  username:'',
  password:''
}



class TrustListing extends Component {
  state = {
    ...formFields,
    submitted: false,
    isModalOpen: false,
    isInstitution: false,
    isTrustAdmin: false,
    trust: {}
  }
  componentDidMount() {
    this.props.dispatchGetAllTrusts();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  deleteTrust(id) {
    this.props.dispatchDeleteTrust(id);
  }

  setTrustName = (prop, toggle) => {
    this.setState({ trust: prop });
    if(toggle === 'admin') {
      this.setState({ isTrustAdmin: true, isInstitution: false });
      const params = {
        condition: {
          parent_trust_id:prop._id
        }
      }
      this.props.dispatchGetTrustAdmins(params);
    } 
    if(toggle === 'institution') {
      this.setState({ isTrustAdmin: false, isInstitution: true })
    } 
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    if(!this.state.isModalOpen){
      this.setState({formFields: formFields, submitted: false});
    }
  }

  handleCreateInstitutionSubmit = e => {
    e.preventDefault();
    this.setState({submitted: true});
    const { name, email, phone, address } = this.state;
    let institution = {
      name,
      email,
      phone,
      address,
      trust_id: this.state.trust._id
    }
    if (institution.name !== '' && institution.email !== '' && institution.phone !== '' && institution.trust_id !== '') this.props.dispatchCreateInstitutionSubmit(institution);
  };

  handleCreateTrustAdminSubmit = e => {
    e.preventDefault();
    this.setState({submitted: true});
    const { name, email, phone, address, username, password } = this.state;
    let trustAdmin = {
      name,
      email,
      phone,
      address,
      username,
      password,
      parentTrustId: this.state.trust._id
    }
    if (trustAdmin.username !== '' && trustAdmin.password !== '' &&trustAdmin.name !== '' && trustAdmin.email !== '' && trustAdmin.phone !== '' && trustAdmin.parentTrustId !== '') {
      this.props.dispatchCreateTrustAdminSubmit(trustAdmin);
    }

  }

  componentDidUpdate() {
    if (Object.keys(this.props.alert).length > 0 && this.props.alert.type === alertConstants.SUCCESS) {
      this.clearForm();
    }
  }

  clearForm = () =>{
    if(this.state.isTrustAdmin)
    document.getElementById('createTrustAdminForm').reset();
    if(this.state.isInstitution)
    document.getElementById('createInstitutionForm').reset();
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
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Created By</th>
                        <th className="center">Add Admin</th>
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
                              <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Trust Admin Management</Tooltip>}>
                              <i className="icon text-info pe-7s-id" onClick={e => { this.setTrustName(prop, 'admin'); this.toggleModal(); }}></i>
                              </OverlayTrigger>
                              </td>
                              <td className="center">
                              <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip">Add Institution</Tooltip>}>
                              <i className="icon text-primary pe-7s-culture" onClick={e => { this.setTrustName(prop, 'institution'); this.toggleModal(); }}></i>
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
          header={this.state.isTrustAdmin ? `Add a Trust Admin to ${this.state.trust.name}`: this.state.isInstitution ? `Add an Institution to ${this.state.trust.name}` : "" }
        >
          <div>
            <Grid fluid>
              <Row>
                <Col md={12}>
                  {this.state.isInstitution && <CreateInstitution {...this}/>}
                  {this.state.isTrustAdmin && <CreateTrustAdmin {...this}/>}
                </Col>
              </Row>
            </Grid>
          </div>
        </Modal>
        
      </div>
    );
  }
}

const CreateInstitution = (context) => {
  const { name, email, phone, submitted } = context.state;
return(
  <form id="createInstitutionForm" onSubmit={context.handleCreateInstitutionSubmit}>
                    <FormInputs
                      ncols={['col-md-5', 'col-md-3', 'col-md-4']}
                      proprieties={[
                        {
                          label: 'Name',
                          type: 'text',
                          name: 'name',
                          bsClass: 'form-control' + (submitted && !name ? ' has-error' : ''),
                          placeholder: 'Institution Name',
                          onChange: context.handleChange
                        },
                        {
                          label: 'Email',
                          type: 'email',
                          name: 'email',
                          bsClass: 'form-control' + (submitted && !email ? ' has-error' : ''),
                          placeholder: 'Email',
                          onChange: context.handleChange
                        },
                        {
                          label: 'Phone',
                          type: 'number',
                          name: 'phone',
                          bsClass: 'form-control' + (submitted && !phone ? ' has-error' : ''),
                          placeholder: 'Phone',
                          onChange: context.handleChange
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Address</ControlLabel>
                          <FormControl
                            rows="2"
                            name="address"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Address"
                            onChange={context.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="default" marginLeft pullRight onClick={context.toggleModal}>
                      Cancel
                    </Button>
                    <Button bsStyle="info" pullRight type="submit">
                      Add New Institution
                    </Button>
                    <div className="clearfix" />

                  </form>);
};


const CreateTrustAdmin = (context) => {
  const { name, email, phone, username, password, submitted } = context.state; 
return(
  <form id="createTrustAdminForm" onSubmit={context.handleCreateTrustAdminSubmit}>
                <FormInputs
                      ncols={['col-md-6', 'col-md-6']}
                      proprieties={[
                        {
                          label: 'Username',
                          type: 'text',
                          name: 'username',
                          bsClass: 'form-control' + (submitted && !username ? ' has-error' : ''),
                          placeholder: 'Username',
                          onChange: context.handleChange
                        },
                        {
                          label: 'Password',
                          type: 'password',
                          name: 'password',
                          bsClass: 'form-control' + (submitted && !password ? ' has-error' : ''),
                          placeholder: 'Password',
                          onChange: context.handleChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-4', 'col-md-4', 'col-md-4']}
                      proprieties={[
                        {
                          label: 'Name',
                          type: 'text',
                          name: 'name',
                          bsClass: 'form-control' + (submitted && !name ? ' has-error' : ''),
                          placeholder: 'Name',
                          onChange: context.handleChange
                        },
                        {
                          label: 'Email',
                          type: 'email',
                          name: 'email',
                          bsClass: 'form-control' + (submitted && !email ? ' has-error' : ''),
                          placeholder: 'Email',
                          onChange: context.handleChange
                        },
                        {
                          label: 'Phone',
                          type: 'number',
                          name: 'phone',
                          bsClass: 'form-control' + (submitted && !phone ? ' has-error' : ''),
                          placeholder: 'Phone',
                          onChange: context.handleChange
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Address</ControlLabel>
                          <FormControl
                            rows="2"
                            name="address"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Address"
                            onChange={context.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="default" marginLeft pullRight onClick={context.toggleModal}>
                      Cancel
                    </Button>
                    <Button bsStyle="info" pullRight type="submit">
                      Add New Trust Admin
                    </Button>
                    <div className="clearfix" />

                  </form>);
}

const mapStateToProps = state => {
  const { trusts, alert } = state;
  return {
    trusts,
    alert
  };
};

const mapDispachToProps = dispatch => ({
  dispatchGetAllTrusts: () => {
    dispatch(trustActions.getAll());
  },
  dispatchDeleteTrust: id => {
    dispatch(trustActions.delete(id));
  },
  dispatchCreateInstitutionSubmit: institution => {
    dispatch(institutionActions.create(institution));
  },
  dispatchCreateTrustAdminSubmit: trustAdmin => {
    dispatch(trustAdminActions.registerTrustAdmin(trustAdmin));
  },
  dispatchGetTrustAdmins: params => {
    dispatch(trustAdminActions.getTrustAdmins(params));
  }

});

export default connect(mapStateToProps, mapDispachToProps)(TrustListing);
