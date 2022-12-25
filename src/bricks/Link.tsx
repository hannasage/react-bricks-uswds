import React from "react";
import { NavLink } from "react-router-dom";
import { StylesAndChildren } from "../util/genericProps";

enum LinkUse {
  NAV = "nav",
  CRUMB = "breadcrumb",
}

interface LinkProps extends StylesAndChildren {
  href: string;
  usage?: LinkUse;
  activeClassName?: string; // ignored if nav is false
}
export const USLink = ({
  href,
  children,
  activeClassName,
  className,
  usage,
}: LinkProps) => {
  if (usage === LinkUse.NAV) {
    return (
      <NavLink
        to={href}
        className={(isActive) => (isActive ? activeClassName : className)}
      >
        {children}
      </NavLink>
    );
  } else {
    return (
      <a href={href} className="usa-link">
        <span>Home</span>
      </a>
    );
  }
};
