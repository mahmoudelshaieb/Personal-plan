import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constrains/routes";

export default function Nav({ fname, lname, profession }) {
  const navItems = [
    {
      name: "work",
      url: `${ROUTES.WORK}`,
    },
    {
      name: "about",
      url: `${ROUTES.ABOUT}`,
    },
    {
      name: "contact",
      url: `${ROUTES.CONTACT}`,
    },
  ];
  return (
    <div
      className={`${styles.styledNav} shadow-sm mb-4 mb-md-5 position-sticky top-0`}
    >
      <div className="container">
        <header className={`${styles.Nav} mx-2 mx-md-0`}>
          <nav className="navbar navbar-expand-lg navbar-light py-2 py-md-3">
            <div className="container-fluid px-0">
              <Link
                className={`${styles.brand} text-capitalize`}
                to={ROUTES.WORK}
              >
                <span className={`${styles.myName}`}>
                  <span className="text-primary">{fname}</span> {lname}
                </span>
                <p className="text-capitalize m-0">{profession}</p>
              </Link>
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
                <ul className={`${styles.navItems} navbar-nav`}>
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.url}
                      className="nav-link"
                      aria-current="page"
                    >
                      <li className="nav-item text-uppercase">
                        <span>{item.name}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
