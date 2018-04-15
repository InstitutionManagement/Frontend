import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../../../redux/Actions/user.actions';
import {alertConstants} from '../../../../constants/alert.constants';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Card } from '../../../../components/Card/Card.jsx';
import { FormInputs } from '../../../../components/FormInputs/FormInputs.jsx';
import Button from '../../../../elements/CustomButton/CustomButton.jsx';
class CreateSuperAdmin extends Component {

    state = {
        username:'',
        password:'',
        name:'',
        email:'',
        phone:'',
        address:''
    } 

    validateError = (data) => {
      return  ( data.username !== '' &&
                data.password !== '' &&
                data.name !== '' &&
                data.email !== '')
    }
    
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.validateError(this.state)){
            this.props.dispatchSubmit(this.state);
        }
    }

    componentDidUpdate(){
        if (Object.keys(this.props.alert).length > 0 && this.props.alert.type === alertConstants.SUCCESS) {
            document.getElementById('createSuperAdminForm').reset();
          }
    }

    
    render(){
        return (
            <div className="content">
            <Grid fluid>
              <Row>
                <Col md={12}>
                  <Card
                    title="Edit Profile"
                    content={
                      <form id="createSuperAdminForm" onSubmit={this.handleSubmit}>
                        <FormInputs
                          ncols={['col-md-6', 'col-md-6']}
                          proprieties={[
                            
                            {
                              label: 'Username',
                              type: 'text',
                              name:'username',
                              bsClass: 'form-control',
                              placeholder: 'Username',
                              onChange: this.handleChange
                            },
                            {
                                label: 'Password',
                                type: 'password',
                                name:'password',
                                bsClass: 'form-control',
                                placeholder: 'Password',
                                onChange: this.handleChange
                              }
                            
                          ]}
                        />
                        <FormInputs
                          ncols={['col-md-4', 'col-md-4', 'col-md-4']}
                          proprieties={[
                            {
                              label: 'Name',
                              type: 'text',
                              name:'name',
                              bsClass: 'form-control',
                              placeholder: 'Name',
                              onChange: this.handleChange
                            },
                            {
                              label: 'Email',
                              type: 'email',
                              name:'email',
                              bsClass: 'form-control',
                              placeholder: 'Email',
                              onChange: this.handleChange
                            },
                            {
                                label: 'Phone',
                                type: 'number',
                                name:'phone',
                                bsClass: 'form-control',
                                placeholder: 'Phone Number',
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
                        <Button bsStyle="info" pullRight fill type="submit">
                          Create Super Admin
                        </Button>
                        <div className="clearfix" />
                      </form>
                    }
                  />
                </Col>
                {/* <Col md={4}>
                  <UserCard
                    bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                    avatar={avatar}
                    name="Mike Andrew"
                    userName="michael24"
                    description={
                      <span>
                        "Lamborghini Mercy
                        <br />
                        Your chick she so thirsty
                        <br />
                        I'm in that two seat Lambo"
                      </span>
                    }
                    socials={
                      <div>
                        <Button simple>
                          <i className="fa fa-facebook-square" />
                        </Button>
                        <Button simple>
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button simple>
                          <i className="fa fa-google-plus-square" />
                        </Button>
                      </div>
                    }
                  />
                </Col> */}
              </Row>
            </Grid>
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        alert: state.alert
    }
};

const mapDispatchToState = dispatch => ({
    dispatchSubmit: user => {
        dispatch(userActions.superAdminRegister(user));
    }
});

export default connect(mapStateToProps,mapDispatchToState)(CreateSuperAdmin);