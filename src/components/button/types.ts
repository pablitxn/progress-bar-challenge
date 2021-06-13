import { ReactChild } from "react";

export interface IButton {
	onClick: () => {};
	child: ReactChild;
}
