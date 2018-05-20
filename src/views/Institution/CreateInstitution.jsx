import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from '../../components/Card/Card';
import { FormInputs } from '../../components/FormInputs/FormInputs';
import Button from '../../elements/CustomButton/CustomButton';

import { institutionActions } from './actions';
import { alertConstants } from '../../constants/alert.constants';

class CreateInstitution extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    document_link: '',
    submitted: false,
    isOpen: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCreateInstitutionSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { name, email, phone, address, website, document_link, trust } = this.state;
    let institution = {
      name,
      email,
      phone,
      address,
      parent_trust_id: this.props.user.parent_trust_id,
      website,
      document_link,
      created_by: {
        name: this.props.user.name,
        userId: this.props.user.auth_id
      }
    };
    if (
      institution.name !== '' &&
      institution.email !== '' &&
      institution.phone !== '' &&
      institution.parent_trust_id !== ''
    )
      this.props.dispatchSubmit(institution);
  };

  componentDidUpdate() {
    if (Object.keys(this.props.alert).length > 0 && this.props.alert.type === alertConstants.SUCCESS) {
      this.clearForm();
    }
  }

  clearForm = () => {
    document.getElementById('createInstitutionForm').reset();
  };

  render() {
    const { name, email, phone, submitted, website, document_link } = this.state;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Create Institution"
                content={
                  <form id="createInstitutionForm" onSubmit={this.handleCreateInstitutionSubmit}>
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
                    <FormInputs
                      ncols={['col-md-4', 'col-md-4']}
                      proprieties={[
                        {
                          label: 'Website',
                          type: 'text',
                          name: 'website',
                          bsClass: 'form-control' + (submitted && !website ? ' has-error' : ''),
                          placeholder: 'Institution Website',
                          onChange: this.handleChange
                        },
                        {
                          label: 'Documents',
                          type: 'text',
                          name: 'document_link',
                          bsClass: 'form-control' + (submitted && !document_link ? ' has-error' : ''),
                          placeholder: 'Documents For the Institution',
                          onChange: this.handleChange
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
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="default" marginLeft pullRight onClick={this.clearForm}>
                      Cancel
                    </Button>
                    <Button bsStyle="info" pullRight type="submit">
                      Add New Institution
                    </Button>
                    <div className="clearfix" />
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
  dispatchSubmit: institution => {
    dispatch(institutionActions.register(institution));
  }
});

const mapStateToProps = state => {
  return {
    user: state.authentication.user.user,

    alert: state.alert
  };
};

export default connect(mapStateToProps, mapDispachToState)(CreateInstitution);
