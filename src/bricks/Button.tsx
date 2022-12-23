import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="usa-button" onClick={onClick}>
      {children}
    </button>
  );
};
