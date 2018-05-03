import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Table,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import { institutionActions } from "../../../redux/Actions/institution.actions";
import { Card } from "../../../components/Card/Card";
import Modal from "../../../components/Modal/Modal";

const formFields = {
  name: "",
  email: "",
  phone: "",
  institution: {}
};

class InstitutionListing extends Component {
  state = {
    ...formFields,
    submitted: false,
    isModalOpen: false,
    isInsitutionAdmin: false,
    isStaff: false
  };

  componentWillMount() {
    this.props.getAllInstitutions();
  }

  setInstitution = (prop, toggle) => {
    this.setState({ institution: prop });
    if (toggle === "admin") {
      this.setState({ isInsitutionAdmin: true, isStaff: false });
    }
    if (toggle === "staff") {
      this.setState({ isInsitutionAdmin: false, isStaff: true });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    if (!this.state.isModalOpen) {
      this.setState({ formFields: formFields, submitted: false });
    }
  };

  render() {
    const { institution } = this.props;
    const loading = institution.loading
      ? "Loading Institution...."
      : "Institution Listing";

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
                        <th>Trust Name</th>
                        <th className="center">Add Admin</th>
                        <th className="center">Add Staff</th>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {institution.data &&
                        Object.keys(institution.data).length > 0 &&
                        institution.data.map((prop, key) => {
                          return (
                            <tr
                              key={key}
                              className={
                                prop.status.tag === "DELETED"
                                  ? "backgroundRed"
                                  : ""
                              }
                            >
                              <td>{key + 1}</td>
                              <td>{prop.name}</td>
                              <td>{prop.email}</td>
                              <td>{prop.phone}</td>
                              <td>{prop.address}</td>
                              <td>{prop.trust_name}</td>
                              <td className="center">
                                <OverlayTrigger
                                  placement="top"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      Institution Admin Management
                                    </Tooltip>
                                  }
                                >
                                  <i
                                    className="icon text-info pe-7s-id"
                                    onClick={e => {
                                      if (prop.status.tag === "DELETED") {
                                        e.preventDefault();
                                      } else if (prop.status.tag === "ACTIVE") {
                                        this.setInstitution(prop, "admin");
                                        this.toggleModal();
                                      }
                                    }}
                                  />
                                </OverlayTrigger>
                              </td>
                              <td className="center">
                                <OverlayTrigger
                                  placement="top"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      Staff Management
                                    </Tooltip>
                                  }
                                >
                                  <i
                                    className="icon text-primary pe-7s-user"
                                    onClick={e => {
                                      if (prop.status.tag === "DELETED") {
                                        e.preventDefault();
                                      } else if (prop.status.tag === "ACTIVE") {
                                        this.setInstitution(prop, "staff");
                                        this.toggleModal();
                                      }
                                    }}
                                  />
                                </OverlayTrigger>
                              </td>
                              <td>
                                {prop.status.tag === "DELETED" ? (
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={
                                      <Tooltip id="tooltip">
                                        Activate Institution
                                      </Tooltip>
                                    }
                                  >
                                    <i
                                      className="icon pe-7s-check text-success"
                                      onClick={this.toggleModal}
                                    />
                                  </OverlayTrigger>
                                ) : (
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={
                                      <Tooltip id="tooltip">
                                        Delete Institution
                                      </Tooltip>
                                    }
                                  >
                                    <i
                                      className="icon pe-7s-trash text-danger"
                                      onClick={this.toggleModal}
                                    />
                                  </OverlayTrigger>
                                )}
                              </td>
                              <td>
                                <OverlayTrigger
                                  placement="top"
                                  overlay={
                                    <Tooltip id="tooltip">
                                      Edit Institution
                                    </Tooltip>
                                  }
                                >
                                  <i
                                    className="icon fas fa-pencil-alt text-info"
                                    onClick={this.toggleModal}
                                  />
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
          close={this.toggleModal}
          header={
            this.state.isInsitutionAdmin
              ? `Add Admin to ${this.state.institution.name}`
              : `Add Staff to ${this.state.institution.name}`
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { institution } = state;
  return {
    institution
  };
};

const mapDispatchToProps = dispatch => ({
  getAllInstitutions: () => {
    dispatch(institutionActions.getAll());
  },
  deleteInstitution: id => {
    dispatch(institutionActions.delete(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InstitutionListing);
