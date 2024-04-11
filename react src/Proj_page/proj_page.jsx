import React from 'react';
import './proj_page.css'

export function ProjectPage() {
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="center-image">
              <img src="Screenshot 2024-02-05 172230.png" alt='logo' style={{ width: "144px", height: "46px" }} />
            </div>
            <a className="navbar-brand" href="https://getbootstrap.com/">
              <h1>TechConnect</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="Home.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Proj_Page.html">Project Page</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="About.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#accordionTypography" data-bs-toggle="collapse"></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>

        <div id="card" className="demo-box">
          <h2>LET Joint</h2>
          <div className="card" style={{ width: "fill" }}>
            <div className="center-image">
              <img src="dsc09822.jpg" style={{ width: "280px", height: "200px" }} />
            </div>

            <p>
              Summary:
              The Lamina Emergent Torsional (LET) joint is a sophisticated yet versatile technology
              developed by BYU researchers. It involves a flat sheet of material with specialized segments.
              These segments serve as hinges, enabling controlled twisting movements, and they are interconnected
              by a component that maintains their alignment.
            </p>

            <p>
              View available patents here:
              <a href="https://patents.google.com/patent/US9157497B1">US Patent US9157497B1</a>
              <a href="https://patents.google.com/patent/US11224124B2">US Patent US11224124B2</a>
              <a href="https://patents.google.com/patent/US10506708B2">US Patent US10506708B2</a>
              <a href="https://patents.google.com/patent/US11549563B2">US Patent US11549563B2</a>
            </p>
          </div>
        </div>

      </main>

      <footer className="sticky-bottom">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <p className="text-muted">&copy; Aaron Earl - Web Programming 260</p>
            <a href="https://github.com/aearl23/Startup-">GitHub</a>
          </div>
        </nav>
      </footer>
      <script src="proj_interaction.js"></script>
    </>
  );
}

