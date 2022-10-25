import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LaunchPage extends Component {
  render() {
    return (
      <div className="launch-page" id="particles-js">
        <div className="launch-page__name">
          <span className="name__letter">Y</span>
          <span className="name__letter">a</span>
          <span className="name__letter">s</span>
          <span className="name__letter">a</span>
          <span className="name__letter">s</span>
          &nbsp;&nbsp;
          <span className="name__letter--lname">K</span>
          <span className="name__letter--lname">a</span>
          <span className="name__letter--lname">k</span>
          <span className="name__letter--lname">a</span>
          <span className="name__letter--lname">r</span>
          <span className="name__letter--lname">l</span>
          <span className="name__letter--lname">a</span>
          {/* <span className='name lName'>d</span> 
              <span className='name lName'>e</span>   */}
        </div>
        <div className="launch-page__links">
          <Link to="/blog">
            <span className="launch-page__link">Blog</span>
          </Link>
          <a
            href="https://github.com/yasaskc"
            target="_blank"
            className="launch-page__link"
            rel="noreferrer"
          >
            Github Portfolio
          </a>
          {/* <span className='launch-page__link--seperator'>|</span> */}
          <Link to="/projects">
            <span className="launch-page__link">Projects</span>
          </Link>
          {/* <span className='launch-page__link--seperator'>|</span> */}
          {/* <a href='https://itunes.apple.com/us/developer/vikram-belde/id1164307305' className='launch-page__link'>Apps</a> */}
          {/* <span className='launch-page__link--seperator'>|</span> */}
          <a
            href="https://www.linkedin.com/in/chandra-k-2601/"
            target="_blank"
            className="launch-page__link"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {/* <span className='launch-page__link--seperator'>|</span> */}
          {/* <span className='launch-page__link--seperator'>|</span> */}
          <Link to="/my-interview">
            <span className="launch-page__link">My Interview</span>
          </Link>
          <Link to="/contact">
            <span className="launch-page__link">Contact</span>
          </Link>
        </div>
      </div>
    );
  }
}
