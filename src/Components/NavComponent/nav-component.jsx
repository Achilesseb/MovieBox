import React from "react";
import "./nav-component.styles.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navigationData = ["plot", "about", "cast", "ratings", "production"];
  const NavigationLinks = () =>
    navigationData.map((data) => (
      <Link to={`/${data}`} className="navigation-type">
        {data}
      </Link>
    ));
  return (
    <div className="navigation">
      <NavigationLinks />
    </div>
  );
};

export default Navigation;
