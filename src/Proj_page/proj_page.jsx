import React from 'react';
import './proj_page.css'

export default function Project() {
  return (
    <>
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
      <script src="proj_interaction.js"></script>
    </>
  );
}

