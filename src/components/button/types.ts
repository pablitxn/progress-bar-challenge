import { ReactChild } from "react";

export interface IButton {
	onClick: () => void;
	children: ReactChild;
}
