import React from "react";
/**
 * Loading the Css here for the component.
 * Without proper loader code will not compile and will give errors.
 * For this we have to try the style-loader.
 */
import "./header.css";
/**
 * Footer component for the page.
 * @todo applying class Name dynamically from the webpack rather then hard coding.
 */
const Header = () => {
  return <div className="header">This is Header for the website.</div>;
};

export default Header;
