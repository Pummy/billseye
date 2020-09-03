import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBadge, MDBDataTableV5, MDBIcon } from 'mdbreact';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown,Collapse } from 'react-bootstrap';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/calllog', state: 'calllogMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../assets/images/favicon.png")} alt="logo"/><h4 class="text-left ml-3">BillsEye</h4></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../assets/images/logo-mini.svg" )} alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="profile-image">
                    <img src={ require("../../assets/images/faces/Sabrina.png")} alt="profile" />
                    <div className="bordershadow">
                      <i className="mdi mdi-pencil menu-icon mleft"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-start">
                    
                    <div className="text-left">
                      <p className="profile-name">Sabrina Yerin Hong</p>
                      {/* <small className="designation text-muted text-small">Manager</small>
                      <span className="status-indicator online"></span> */}
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                  Change Password 
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <button className="btn btn-success btn-block">New Project <i className="mdi mdi-plus"></i></button> */}
            </div>
          </li>
          <li className={ this.isPathActive('/calllog') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/calllog">
              <i className="mdi mdi-clock-outline menu-icon"></i>
              <span className="menu-title">Call Log</span>
            </Link>
          </li>
          {/* <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">Basic UI Elements</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons">Buttons</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns">Dropdowns</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography">Typography</Link></li>
              </ul>
            </Collapse>
          </li> */}
          <li className={ this.isPathActive('/exports') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/exports">
              <i className="mdi mdi-folder-move menu-icon"></i>
              <span className="menu-title">Export</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/integrate') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/integrate">
              <i className="mdi mdi-flash-outline menu-icon"></i>
              <span className="menu-title">Integrate</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/videocall') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/videocall">
              <i className="mdi mdi-video-outline menu-icon"></i>
              <span className="menu-title">Video Call</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/contacts') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/contacts">
              <i className="mdi mdi-account-circle-outline menu-icon"></i>
              <span className="menu-title">Contacts</span>
            </Link>
          </li>
          {/* <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/user-pages/blank-page">Blank Page</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1">Login</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1">Register</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/user-pages/error-404">404</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/user-pages/error-500">500</Link></li>
              </ul>
            </Collapse>
          </li> */}
          <li className={ this.isPathActive('/analytics') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/analytics">
              <i className="mdi mdi-poll-box menu-icon"></i>
              <span className="menu-title">Analytics</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/expandrow') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/expandrow">
              <i className="mdi mdi-poll-box menu-icon"></i>
              <span className="menu-title">Expand Row</span>
            </Link>
          </li>
        </ul>
        {/* <div className="marignbottom">
          <ul className="nav">
            <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/basic-ui/buttons">
                <i className="mdi mdi-chart-bar menu-icon"></i>
                <span className="menu-title">Analytics</span>
              </Link>
            </li>
            <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/basic-ui/buttons">
                <i className="mdi mdi-chart-bar menu-icon"></i>
                <span className="menu-title">Analytics</span>
              </Link>
            </li>
          </ul>
        </div> */}
        
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);