import React, { PropsWithChildren } from "react";
import { StyleProps, StylesAndChildren } from "../util/genericProps";
import "../../assets/css/styles.css";

// Emergency was omitted in favor of `site` prop. Using the `site` boolean will
// automatically imply an Emergency severity.
// See: https://designsystem.digital.gov/components/site-alert/
export enum USAlertSeverity {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

interface USAlertWrapperCustomProps {
  severity?: USAlertSeverity;
  slim?: boolean;
  noIcon?: boolean;
  site?: boolean;
}
type USAlertWrapperProps = USAlertWrapperCustomProps & StylesAndChildren;
// Top level of the Alert ecosystem; wraps children with props-based styling.
// Required use when building with bricks
export const USAlertWrapper = ({
  severity,
  slim,
  site,
  noIcon,
  className,
  children,
}: USAlertWrapperProps) => {
  if (site) {
    // Style handler for SiteAlert
    const siteAlertStyles: string[] = [
      "usa-site-alert",
      "usa-site-alert--emergency",
    ];
    if (noIcon) siteAlertStyles.push("usa-site-alert--no-icon");
    if (slim) siteAlertStyles.push("usa-site-alert--slim");
    // Returns separately because SiteAlert uses section while alert uses div
    return (
      <section className={`${siteAlertStyles.join(" ")}`}>
        <div className={`usa-alert ${className}`}>{children}</div>
      </section>
    );
  } else {
    // Style handler for Alert
    const alertStyles: string[] = ["usa-alert"];
    if (noIcon) alertStyles.push("usa-alert--no-icon");
    if (slim) alertStyles.push("usa-alert--slim");
    if (severity) {
      alertStyles.push(`usa-alert--${severity}`);
    } else {
      alertStyles.push(`usa-alert--${USAlertSeverity.INFO}`);
    }
    return (
      <div className={`${alertStyles.join(" ")} ${className}`}>{children}</div>
    );
  }
};

// Second level of the Alert ecosystem; wraps children with props-based styling.
// Required use when building with bricks
export const USAlertBody = ({ children, className }: StylesAndChildren) => {
  return <div className={`usa-alert__body ${className}`}>{children}</div>;
};

interface USAlertHeadingProps extends StyleProps {
  text: string;
}
// Heading brick
// Optional use to add a heading to your alert
export const USAlertHeading = ({ className, text }: USAlertHeadingProps) => {
  return <h4 className={`usa-alert__heading ${className}`}>{text}</h4>;
};

type USAlertTextProps = PropsWithChildren & StyleProps;
// Content brick
// Optional use to add a heading to your alert
export const USAlertContent = ({ children, className }: USAlertTextProps) => {
  return <p className={`usa-alert__text ${className}`}>{children}</p>;
};

interface USAlertProps extends USAlertWrapperCustomProps {
  heading: string;
  content: string | React.ReactNode;
  wrapperClasses?: string;
  bodyClasses?: string;
  headingClasses?: string;
  textClasses?: string;
}
// Full component, pipes props through to bricks
// All functionality should be accessible via the bricks and this component
export const USAlert = ({
  heading,
  content,
  severity,
  slim,
  site,
  noIcon,
  wrapperClasses,
  bodyClasses,
  headingClasses,
  textClasses,
}: USAlertProps) => {
  return (
    <USAlertWrapper
      slim={slim}
      site={site}
      noIcon={noIcon}
      severity={severity}
      className={wrapperClasses}
    >
      <USAlertBody className={bodyClasses}>
        {heading && (
          <USAlertHeading className={headingClasses} text={heading} />
        )}
        {content && (
          <USAlertContent className={textClasses}>{content}</USAlertContent>
        )}
      </USAlertBody>
    </USAlertWrapper>
  );
};
