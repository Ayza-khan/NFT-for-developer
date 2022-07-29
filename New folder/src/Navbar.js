
function Navbar() {
  return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
         <h4><b>NFT</b></h4>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-auto" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <b>MarketPlace</b>
              </a>
            </li>
            <li className="nav-item text-dark">
              <a className="nav-link" href="/">
              <b>Community</b> 
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
              <b>Overview</b>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
              <b>Support</b>
              </a>
            </li>
          </ul> 
        </div>
        <div className="mx-4 d-flex">
          <div className="p-4">
            <button type="button" className="btn btn-light">Log In </button>
          </div>
          <div className="p-4">
            <button type="button" className="btn btn-dark">Sign Up</button>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
