import React, { PropsWithChildren } from "react";
import { StyleProps } from "../util/genericProps";
import "../../assets/css/styles.css";

type StylesAndChildren = PropsWithChildren & StyleProps;

// Enumerate the available severity levels
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
/** Top level of the Alert ecosystem. Wraps children with props-based styling */
export const AlertWrapper = ({
  severity,
  slim,
  site,
  noIcon,
  className,
  children,
}: AlertWrapperProps) => {
  if (site) {
    const styling: string[] = ["usa-site-alert"];
    if (noIcon) {
      styling.push("usa-site-alert--no-icon");
    }
    styling.push("usa-site-alert--emergency");
    if (slim) {
      styling.push("usa-site-alert--slim");
    }
    return (
      <section className={`${styling.join(" ")}`}>
        <div className={`usa-alert ${className}`}>{children}</div>
      </section>
    );
  } else {
    const styling: string[] = ["usa-alert"];
    if (noIcon) {
      styling.push("usa-alert--no-icon");
    }
    if (severity) {
      styling.push(`usa-alert--${severity}`);
    } else {
      styling.push(`usa-alert--${AlertSeverity.INFO}`);
    }
    if (slim) {
      styling.push("usa-alert--slim");
    }
    return (
      <div className={`${styling.join(" ")} ${className}`}>{children}</div>
    );
  }
};
/** Second level of the Alert ecosystem. Wraps children with props-based styling */
export const AlertBody = ({ children, className }: StylesAndChildren) => {
  return <div className={`usa-alert__body ${className}`}>{children}</div>;
};

interface AlertHeadingProps extends StyleProps {
  text: string;
}
export const AlertHeading = ({ className, text }: AlertHeadingProps) => {
  return <h4 className={`usa-alert__heading ${className}`}>{text}</h4>;
};

type AlertTextProps = PropsWithChildren & StyleProps;
export const AlertText = ({ children, className }: AlertTextProps) => {
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
        {content && <AlertText className={textClasses}>{content}</AlertText>}
      </AlertBody>
    </AlertWrapper>
  );
};
