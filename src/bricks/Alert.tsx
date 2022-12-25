import React, { PropsWithChildren } from "react";
import { StyleProps, StylesAndChildren } from "../util/genericProps";
import "../../assets/css/styles.css";

// Emergency was omitted in favor of `site` prop. Using the `site` boolean will
// automatically imply an Emergency severity.
// See: https://designsystem.digital.gov/components/site-alert/
export enum AlertSeverity {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

interface AlertWrapperCustomProps {
  severity?: AlertSeverity;
  slim?: boolean;
  noIcon?: boolean;
  site?: boolean;
}
type AlertWrapperProps = AlertWrapperCustomProps & StylesAndChildren;
// Top level of the Alert ecosystem; wraps children with props-based styling.
// Required use when building with bricks
export const AlertWrapper = ({
  severity,
  slim,
  site,
  noIcon,
  className,
  children,
}: AlertWrapperProps) => {
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
      alertStyles.push(`usa-alert--${AlertSeverity.INFO}`);
    }
    return (
      <div className={`${alertStyles.join(" ")} ${className}`}>{children}</div>
    );
  }
};

// Second level of the Alert ecosystem; wraps children with props-based styling.
// Required use when building with bricks
export const AlertBody = ({ children, className }: StylesAndChildren) => {
  return <div className={`usa-alert__body ${className}`}>{children}</div>;
};

interface AlertHeadingProps extends StyleProps {
  text: string;
}
// Heading brick
// Optional use to add a heading to your alert
export const AlertHeading = ({ className, text }: AlertHeadingProps) => {
  return <h4 className={`usa-alert__heading ${className}`}>{text}</h4>;
};

type AlertTextProps = PropsWithChildren & StyleProps;
// Content brick
// Optional use to add a heading to your alert
export const AlertContent = ({ children, className }: AlertTextProps) => {
  return <p className={`usa-alert__text ${className}`}>{children}</p>;
};

interface AlertProps extends AlertWrapperCustomProps {
  heading: string;
  content: string | React.ReactNode;
  wrapperClasses?: string;
  bodyClasses?: string;
  headingClasses?: string;
  textClasses?: string;
}
// Full component, pipes props through to bricks
// All functionality should be accessible via the bricks and this component
export const Alert = ({
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
}: AlertProps) => {
  return (
    <AlertWrapper
      slim={slim}
      site={site}
      noIcon={noIcon}
      severity={severity}
      className={wrapperClasses}
    >
      <AlertBody className={bodyClasses}>
        {heading && <AlertHeading className={headingClasses} text={heading} />}
        {content && (
          <AlertContent className={textClasses}>{content}</AlertContent>
        )}
      </AlertBody>
    </AlertWrapper>
  );
};
