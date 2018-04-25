import React from 'react';
import Button from '../../elements/CustomButton/CustomButton';
// import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends React.Component {
  //show: Modal Toggle
  //header: Header Name
  //onSave : function
  //onClose: function
  //buttonName: ButtonName


  


  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdropStyle">
        <div className="modalStyle">
        {<i className="pe-7s-close close-icon" onClick={this.props.close}></i>}
          {this.props.header && <h3>{this.props.header}</h3>}
          {this.props.children}
          {this.props.onClose &&
            this.props.onSave && (
              <Footer
                onClose={this.props.onClose}
                onSave={this.props.onSave}
                buttonName={this.props.buttonName ? this.props.buttonName : 'Save'}
              />
            )}
        </div>
      </div>
    );
  }
}

const Footer = props => {
  return (
    <div className="modal-footer-content">
      <Button onClick={props.onClose} bsStyle="default" marginLeft pullRight>
        Close
      </Button>
      <Button onClick={props.onSave} bsStyle="info" pullRight>
        {props.buttonName}
      </Button>
    </div>
  );
};

export default Modal;
