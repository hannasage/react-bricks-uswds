import React from "react";
import { BrowserRouter } from "react-router-dom";
import { USCrumbLink, USExtLink, USLink, USNavLink } from "../bricks/Link";

//TODO: Update docs with examples
// const Docs = () => {
//   return <p>Testing, testing!</p>;
// };

export default {
  title: "Links",
  component: USLink,
  subcomponents: { USExtLink, USCrumbLink, USNavLink },
  // parameters: {
  //   docs: {
  //     page: () => <Docs />,
  //   },
  // },
};

export const Standard = () => (
  <USLink href="/?path=/story/link--standard">This is a standard link</USLink>
);

export const ExternalBrick = () => (
  <USExtLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
    Click for good music
  </USExtLink>
);

export const BreadcrumbBrick = () => (
  <USCrumbLink href="/?path=/story/link--standard">A Breadcrumb</USCrumbLink>
);

export const NavLinkBrick = () => (
  <BrowserRouter>
    <USNavLink href="/?path=/story/link--standard">
      A NavLink Replacement
    </USNavLink>
  </BrowserRouter>
);
