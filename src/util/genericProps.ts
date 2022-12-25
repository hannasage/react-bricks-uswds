import { PropsWithChildren } from "react";

export interface StyleProps {
  className?: string;
}
export type StylesAndChildren = PropsWithChildren & StyleProps;
