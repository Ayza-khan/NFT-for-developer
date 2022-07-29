import React from 'react'

function Footer() {
  return (
    <div className='container'>
        <footer className="bd-footer py-4 py-md-4 mt-4 ">
                <div className="container py-4 py-md-4 px-4 px-md-3">
                    <div className="row text-dark text-decoration-none">
                        <div className="col-lg-3 mb-3 text-center">
                            <a className="align-items-center mb-2 text-dark text-decoration-none" href="/"
                                aria-label="NFT">
                                <h3>NFT</h3>
                                <p>
                                    @2020 - 2021<br/>
                                    Privacy - Term
                                </p>
                            </a>

                        </div>
                        <div className="col-6 col-lg-2 offset-lg-1 mb-3 ">
                            <h5>ABC</h5><br/>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/">abc</a></li>
                                <li className="mb-2"><a href="/">def</a></li>
                                <li className="mb-2"><a href="/">ghi</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5>DEF</h5><br/>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/">jkl</a></li>
                                <li className="mb-2"><a href="/">mno</a> </li>
                                <li className="mb-2"><a href="/">pqr</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3 text-dark">
                            <h5>GHI</h5><br/>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/">stu</a></li>
                                <li className="mb-2"><a href="/">vwx</a> </li>
                                <li className="mb-2"><a href="/">yz</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3 text-dark">
                            <h5>Company</h5><br/>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/">About</a></li>
                                <li className="mb-2"><a href="/">Careers</a></li>
                                <li className="mb-2"><a href="/">Ventures</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </footer>
    </div>
  );
}

export default Footer;