import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { WORK } from "../../constrains/routes";
import { Fade } from "react-reveal";
import { navItems } from "../../constrains/data";

export default function Nav({ fname, lname, profession }) {
  const menuToggle = () => {
    const navbarNav = document.getElementById("navbarNav");
    navbarNav.classList.toggle("show");
  };

  return (
    <Fade top duration={1000} distance="20px">
      <div
        className={`${styles.styledNav} shadow-sm mb-4 position-sticky top-0`}
      >
        <div className="container">
          <header className={`${styles.Nav} mx-2 mx-md-0`}>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid px-0">
                <NavLink
                  className={`${styles.brand} text-capitalize`}
                  to={WORK}
                >
                  <span className={`${styles.myName}`}>
                    <span className="text-primary">{fname}</span> {lname}
                  </span>
                  <p className="text-capitalize m-0">{profession}</p>
                </NavLink>
                <button
                  className="navbar-toggler border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNav"
                >
                  <ul
                    className={`${styles.navItems} navbar-nav align-items-center`}
                  >
                    {navItems.map((item, index) => (
                      <NavLink
                        onClick={menuToggle}
                        key={index}
                        to={item.url}
                        className="nav-link px-0 w-100"
                        aria-current="page"
                        exact
                      >
                        <li className="nav-item text-uppercase ps-0 ps-lg-5 text-center">
                          <span className="pb-2">{item.name}</span>
                        </li>
                      </NavLink>
                    ))}
                    <a
                      href="./assets/mahmoudhassancv.pdf"
                      target="_blank"
                      className={`${styles.resume} btn btn-primary text-uppercase ms-0 ms-lg-5 my-2 my-lg-0 py-2 px-4 rounded-3 w-100`}
                    >
                      resume
                    </a>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </Fade>
  );
}
