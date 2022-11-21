import React, { Component } from "react";
import Layout from "../layout/Layout";
import CitySpace from "./CitySpace";
import SmartParking from "./SmartParking";
import ProConnect from "./ProConnect";
import MyHub from "./MyHub";
import Button from "../common/button/Button";

import { NavLink } from "react-router-dom";

/* 
Download Links
Doc: https://docs.google.com/document/d/1rQUigIKVexwfT-YBXisBr0cjIh50uHNSaKS2MZ1LC00/export?format=doc
Pdf: 
https://docs.google.com/document/d/1rQUigIKVexwfT-YBXisBr0cjIh50uHNSaKS2MZ1LC00/export?format=pdf

*/
export default class Blog extends Component {
  render() {
    return (
      <Layout>
        <div className="projects">
          {/* <div className="blog__search-bar">
						<input className="blog__search-bar__input" placeholder="Search"/>
					</div> */}
          <div className="projects__header">
            <NavLink to="/pet-projects">
              <Button label="Other Interests" onClick={() => {}} />
            </NavLink>
            <div className="header__resume">
              <a href="https://docs.google.com/document/d/1KaQReJdAQtJ-WdxMk45SZ2AN3CKNh2yU/export?format=pdf">
                <Button label={"Download Resume"} onClick={() => {}} />
              </a>
            </div>
          </div>
          <div className="projects__p-cards">
            <MyHub />
            <ProConnect />
            <CitySpace />
            <SmartParking />
          </div>
        </div>
      </Layout>
    );
  }
}
