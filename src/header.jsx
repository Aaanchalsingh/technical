import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [anchor, setAnchor] = useState(null);

  useEffect(() => {
    const home = document.getElementById("box1");
    const about = document.getElementById("box2");
    const services = document.getElementById("box3");
    const contact = document.getElementById("box4");
    setAnchor({
      home,
      about,
      services,
      contact,
    });
  }, []);

  const handleclick = (event, target) => {
    event.preventDefault();
    if (anchor && anchor[target]) {
      anchor[target].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container-fluid nav_bg top-0" style={{ position: "fixed" }}>
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="#">
                Its Aanchal
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="ml-auto">
                  <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                        onClick={(event) => handleclick(event, "home")}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item ml-auto">
                      <Link
                        className="nav-link active ml-auto"
                        aria-current="page"
                        to="/about"
                        onClick={(event) => handleclick(event, "about")}
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active ml-auto"
                        aria-current="page"
                        to="/services"
                        onClick={(event) => handleclick(event, "services")}
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/contact"
                        onClick={(event) => handleclick(event, "contact")}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
