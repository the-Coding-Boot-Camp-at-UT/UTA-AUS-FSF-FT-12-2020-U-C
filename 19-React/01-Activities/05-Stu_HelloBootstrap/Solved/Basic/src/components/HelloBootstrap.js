import React from "react";

function HelloBootstrap() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="jumbotron">
        <h1>Your Project</h1>
        <p>
          Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris magna
          exercitation. Aliquip reprehenderit magna elit cillum adipisicing dolore aliquip velit.
          Ipsum ullamco nostrud tempor eu deserunt ipsum incididunt fugiat esse ipsum. Exercitation
          nostrud exercitation sit ex nostrud aliqua officia magna nostrud deserunt et esse eu
          deserunt. Non dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
        </p>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Non eu sit duis adipisicing esse incididunt ad proident.</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo magna eu ex
            mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad
            adipisicing.Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo
            magna eu ex mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad
            adipisicing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;
