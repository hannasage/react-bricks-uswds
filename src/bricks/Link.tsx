import React from "react";
import { NavLink } from "react-router-dom";
import { StylesAndChildren } from "../util/genericProps";

export enum USLinkUse {
  STD = "standard",
  EXT = "external",
  NAV = "nav",
  CRUMB = "breadcrumb",
}

interface USLinkProps extends StylesAndChildren {
  href: string;
  usage?: USLinkUse;
  activeClassName?: string;
}
type USNavLinkProps = Omit<USLinkProps, "usage">;
type USLinkBrickProps = Omit<USLinkProps, "usage" | "activeClassName">;

/** A single link brick to replace NavLink (react-router-dom) */
export const USNavLink = ({
  href,
  children,
  className,
  activeClassName,
}: USNavLinkProps) => {
  const navLinkStyles = ["usa-nav__link"];
  // Extracted functionality for active vs standard classNames
  const getStyles = (isActive: boolean) => {
    if (isActive) {
      navLinkStyles.push(activeClassName || "");
    } else {
      navLinkStyles.push(className || "");
    }
    return navLinkStyles.join(" ");
  };
  return (
    <NavLink to={href} className={({ isActive }) => getStyles(isActive)}>
      {children}
    </NavLink>
  );
};

/** A single link brick for rendering external links */
export const USExtLink = ({ href, className, children }: USLinkBrickProps) => {
  const linkStyles = ["usa-link", "usa-link--external", className];
  return (
    <a href={href} className={linkStyles.join(" ")}>
      {children}
    </a>
  );
};

/** A single link brick for building breadcrumbs */
export const USCrumbLink = ({
  href,
  className,
  children,
}: USLinkBrickProps) => (
  <a href={href} className={`usa-breadcrumb__link ${className}`}>
    {children}
  </a>
);

/** Because links are fairly small UI components, all of them are pretty much `bricks`. However, to maintain
 * the brick-like mentality, all subcomponents are broken out into their own bricks that can be called in
 * JSX. To use them through this single component, you can utilize the `usage` prop and enumerated values to
 * select your desired brick.
 */
export const USLink = ({
  children,
  href,
  activeClassName,
  className,
  usage = USLinkUse.STD, // default to standard usage
}: USLinkProps) => {
  if (usage === USLinkUse.NAV) {
    return (
      <USNavLink
        href={href}
        className={className}
        activeClassName={activeClassName}
      >
        {children}
      </USNavLink>
    );
  }
  if (usage === USLinkUse.CRUMB) {
    return (
      <USCrumbLink href={href} className={className}>
        {children}
      </USCrumbLink>
    );
  }
  if (usage === USLinkUse.EXT) {
    return (
      <USExtLink href={href} className={className}>
        {children}
      </USExtLink>
    );
  }
  return (
    <a href={href} className={`usa-link ${className}`}>
      {children}
    </a>
  );
};
