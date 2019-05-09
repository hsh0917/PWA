import React, { Component } from "react";
import { Link } from "react-router";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div>
              <h6>Developed by OHRI</h6>
              <img className="toh_logo" alt="logo" title="toh logo" src="https://res.cloudinary.com/ottawa-hospital-research-institute/image/upload/v1556026839/TOH_App/Ottawa_Hospital_Research_Institute_Horizontal_Colour.png" />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


export default Footer;