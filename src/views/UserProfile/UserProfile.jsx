import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import { Card } from '../../components/Card/Card.jsx';
import { FormInputs } from '../../components/FormInputs/FormInputs.jsx';
import { UserCard } from '../../components/UserCard/UserCard.jsx';
import Button from '../../elements/CustomButton/CustomButton.jsx';
import { connect } from 'react-redux';

class UserProfile extends Component {
  render() {
    const { image_url, username, usename, name, email, phone, address } = this.props.authentication.user.user;
    console.log(phone);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={['col-md-6', 'col-md-6']}
                      proprieties={[
                        
                        {
                          label: 'Username',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Username',
                          defaultValue: `${username}`
                        },
                        {
                          label: 'Password',
                          type: 'password',
                          bsClass: 'form-control',
                          placeholder: 'Passowrd'
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={['col-md-6', 'col-md-6']}
                      proprieties={[
                        {
                          label: 'Phone',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Phone',
                          defaultValue: `${phone}`
                        },
                        {
                          label: 'Email address',
                          type: 'email',
                          bsClass: 'form-control',
                          placeholder: 'Email',
                          defaultValue: `${email}`
                        }
                      ]}
                    />
                    {/* <FormInputs
                      ncols={['col-md-12']}
                      proprieties={[
                        {
                          label: 'Adress',
                          type: 'text',
                          bsClass: 'form-control',
                          placeholder: 'Home Adress',
                          defaultValue: `${address}`
                        }
                      ]}
                    /> */}
                    

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Address</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue={address}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={image_url}
                name={name}
                userName={usename}
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
            </Col>
          </Row>
        </Grid>>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authentication } = state;
  return {
    authentication
  };
};

const mapDispachToProps = dispatch => ({
  getSuperAdmins: () => {
  }
});

export default connect(mapStateToProps, mapDispachToProps)(UserProfile);
