import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from '../../components/Card/Card';
import { FormInputs } from '../../components/FormInputs/FormInputs';
import Button from '../../elements/CustomButton/CustomButton';

import { trustActions } from './actions';
import { alertConstants } from '../../constants/alert.constants';

class CreateTrust extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: '',
    document_link: '',
    submitted: false,
    isOpen: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const trust = {
      ...this.state,
      created_by: {
        name: this.props.name,
        userId: this.props.userId
      }
    };
    if (trust.name !== '' && trust.email !== '' && trust.phone !== '') this.props.dispatchSubmit(trust);
  };

  componentDidUpdate() {
    if (Object.keys(this.props.alert).length > 0 && this.props.alert.type === alertConstants.SUCCESS) {
      this.clearForm();
    }
  }

  clearForm = () => {
    document.getElementById('createTrustForm').reset();
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  render() {
    const { name, email, phone, submitted } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Create Trust"
                content={
                  <form id="createTrustForm" onSubmit={this.handleSubmit}>
                    <FormInputs
                      ncols={['col-md-5', 'col-md-3', 'col-md-4']}
                      proprieties={[
                        {
                          label: 'Name',
                          type: 'text',
                          name: 'name',
                          bsClass: 'form-control' + (submitted && !name ? ' has-error' : ''),
                          placeholder: 'Trust Name',
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
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Documents</ControlLabel>
                          <FormControl
                            rows="5"
                            name="document_link"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Documents if any"
                            default=" "
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="default" marginLeft pullRight onClick={this.clearForm}>
                      Cancel
                    </Button>
                    <Button bsStyle="info" pullRight type="submit">
                      Create Trust
                    </Button>
                    <div className="clearfix" />
                    {/* <button onClick={this.toggleModal}>
                      Open the modal
                    </button> */}
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapDispachToState = dispatch => ({
  dispatchSubmit: trust => {
    dispatch(trustActions.create(trust));
  }
});

const mapStateToProps = state => {
  return {
    name: state.authentication.user.user.name,
    userId: state.authentication.user.user.auth_id,
    alert: state.alert
  };
};

export default connect(mapStateToProps, mapDispachToState)(CreateTrust);
