import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import { style } from '../../variables/Variables';
import {
  SUPER_ADMIN_ROUTES,
  TRUST_ADMIN_ROUTES,
  INSTITUTION_ADMIN_ROUTES,
  STAFF_ROUTES,
  STUDENT_ROUTES
} from '../../routes/routing';
import { alertConstants } from '../../constants/alert.constants';
import { alertActions } from '../../redux/Actions/alert.actions';
import './Private.css';

class Private extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.state = {
      _notificationSystem: null
    };
  }

  handleNotificationClick(type, message, position = 'tr') {
    var level = '',
      icon = '';
    switch (type) {
      case alertConstants.SUCCESS:
        level = 'success';
        icon = 'pe-7s-check';
        break;
      case alertConstants.WARNING:
        level = 'warning';
        icon = 'pe-7s-less';
        break;
      case alertConstants.ERROR:
        level = 'error';
        icon = 'pe-7s-close';
        break;
      case alertConstants.INFO:
        level = 'info';
        icon = 'pe-7s-info';
        break;
      default:
        break;
    }
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className={'notify-icon ' + icon} />,
      message: <div>{message}</div>,
      level: level,
      position: position,
      autoDismiss: 10
    });
  }
  componentDidMount() {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
    }
    if (Object.keys(this.props.alert).length > 0) {
      const { type, message } = this.props.alert;
      this.handleNotificationClick(type, message);
      this.props.clearAlert();
    }
  }
  render() {
    const user = localStorage.getItem('user');

    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel">
          <Header {...this.props} />
          <Switch>
            {user ? (
              SUPER_ADMIN_ROUTES.map((prop, key) => {
                if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={key} />;
                return <Route exact path={prop.path} component={prop.component} key={key} />;
              })
            ) : (
              <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
            )}
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alert: state.alert
  };
};

const mapDispachToState = dispatch => ({
  clearAlert: () => {
    dispatch(alertActions.clear());
  }
});

export default connect(mapStateToProps, mapDispachToState)(Private);
