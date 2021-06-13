import React, { MouseEvent, FC } from "react";
import { IButton } from "./types";
import "./styles.scss";

const Button: FC<IButton> = ({ child, onClick }) => {
	const handleClick = (event: MouseEvent) => {
		event.preventDefault();
		onClick();
	};

	return (
		<button className="button" onClick={handleClick}>
			{child}
		</button>
	);
};

export default Button;
