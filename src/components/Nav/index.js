import styles from "./index.module.scss";

export default function Nav({ fname, lname, profession }) {
  const navItems = [
    {
      name: "work",
      url: "",
    },
    {
      name: "about",
      url: "",
    },
    {
      name: "contact",
      url: "",
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
              <a className={`${styles.brand} text-capitalize`} href="#">
                <span className={`${styles.myName}`}>
                  <span className="text-primary">{fname}</span> {lname}
                </span>
                <p className="text-capitalize m-0">{profession}</p>
              </a>
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
                    <li key={index} className="nav-item text-uppercase">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href={item.url}
                      >
                        {item.name}
                      </a>
                    </li>
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
