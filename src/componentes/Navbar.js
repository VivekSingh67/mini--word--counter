import React from 'react'
function Navbar(props) {
  
  return (
    <div>
       <navbar>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
         <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li> 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
   

      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Dark-Mode</label>
</div>
<div className={`form-check form-switch text-${props.mode==='light'? '#DC3545':'light'}`}>
  <input className="form-check-input" onClick={props.greenToggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Green-Dark-Mode</label>
</div>
<div className={`form-check form-switch text-${props.mode==='light'? '#DC3545':'light'}`}>
  <input className="form-check-input" onClick={props.redToggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Red-Dark-Mode</label>
</div>
    </div>
  </div>
</nav>
</navbar> 
</div>
  )
}
export default Navbar
