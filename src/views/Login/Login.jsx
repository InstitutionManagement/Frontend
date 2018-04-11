import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../redux/Actions/user.actions';
import backgroundImage from '../../assets/img/login-bg.jpg';
import logoImage from '../../assets/img/login-logo.png';
import './Login.css';
import A from '../../elements/A/A.jsx';

const SocialIcon = props => {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        title={props.title}
        data-placement="bottom"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={props.icon} />
      </a>
    </li>
  );
};

class Login extends Component {
  state = {
    username: 'a0d00kc',
    password: 'iit_EN003',
    submitted: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.dispatchSubmit(username, password);
    }
  };

  componentDidMount() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      this.props.logout();
    }
  }

  render() {
    const backImage = {
      backgroundImage: 'url(' + backgroundImage + ')'
    };
    let formError = this.props.alert.type ? (
      <span className="error-message">{String(this.props.alert.message)}</span>
    ) : (
      ''
    );
    const { username, password } = this.state;

    return (
      <div className="login-page sidebar-collapse">
        <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent ">
          <div className="container">
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navigation"
              data-nav-image="../assets/img/blurred-image-1.jpg"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <A class="nav-link" link="../index.html" text="About Us" />
                </li>
                <li className="nav-item">
                  <A class="nav-link" link="../index.html" text="Contact Us" />
                </li>
                <li className="nav-item">
                  <A class="nav-link" link="#" text="Have an issue?" />
                </li>
              </ul>
              <ul className="navbar-nav">
                <SocialIcon text="Twitter" title="Follow us on Twitter" link="#" icon="fab fa-twitter" />
                <SocialIcon text="Facebook" title="Follow us on Facebook" link="#" icon="fab fa-facebook" />
                <SocialIcon text="Instagram" title="Follow us on Instagram" link="#" icon="fab fa-instagram" />
              </ul>
            </div>
          </div>
        </nav>
        <div className="page-header">
          <div className="page-header-image" style={backImage} />
          <div className="container">
            <div className="col-md-4 content-center">
              <div className="card card-login card-plain">
                <form className="form" onSubmit={this.handleSubmit}>
                  <div className="header header-primary text-center">
                    <div className="logo-container">
                      <img src={logoImage} alt="" />
                    </div>
                  </div>
                  {formError}
                  <div className="content">
                    <div className="input-group form-group-no-border input-lg">
                      <span className="input-group-addon">
                        <i className="far fa-user-circle" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="input-group form-group-no-border input-lg">
                      <span className="input-group-addon">
                        <i className="fas fa-key" />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="footer text-center">
                    <button className="btn btn-primary btn-round btn-lg btn-block" type="submit">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="copyright">
                &copy; &nbsp;
                {new Date().getFullYear()}
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authentication.loggedIn,
    alert: state.alert
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchSubmit: (username, password) => {
    dispatch(userActions.login(username, password));
  },
  logout: () => {
    dispatch(userActions.logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
