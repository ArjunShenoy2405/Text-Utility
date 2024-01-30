export default function Navbar({ mode, setMode }) {
  function handleRoutingClicks(msg) {
    alert(msg);
  }

  function handleModeToggleEvent() {
    if (mode.displayText === "Light") {
      setMode((mode) => ({
        ...mode,
        displayText: "Dark",
        color: "White",
        backgroundColor: "Black",
      }));
    } else {
      setMode((mode) => ({
        ...mode,
        displayText: "Light",
        color: "Black",
        backgroundColor: "White",
      }));
    }
    console.log(mode);
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark" //Dark Mode
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h1>
            <b>Text Utility</b>
          </h1>
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                onClick={() =>
                  handleRoutingClicks(
                    "Routing is not supported on GitHub Pages"
                  )
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                onClick={() =>
                  handleRoutingClicks(
                    "Routing is not supported on GitHub Pages"
                  )
                }
              >
                About
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success mx-1"
              type="submit"
              onClick={() => handleRoutingClicks("Search feature coming soon!")}
            >
              Search
            </button>
            <button
              type="button"
              class="btn btn-dark mx-2"
              onClick={handleModeToggleEvent}
              style={{
                color: mode.color,
                backgroundColor: mode.backgroundColor,
              }}
            >
              {mode.displayText}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
