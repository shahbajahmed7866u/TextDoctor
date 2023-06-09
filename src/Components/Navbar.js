import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
function Navbar(a) {




  return (
<nav className={`navbar navbar-expand-lg navbar-${a.mode} bg-${a.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{a.titl}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/about">{a.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${a.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={a.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" hrmlFor="flexSwitchCheckDefault">{a.mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}</label>
</div>

    </div>
  </div>
</nav>
  )

}
export default Navbar;



Navbar.propTypes = {
    titl : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'Set tite here',
    aboutText : 'About text here'
};


