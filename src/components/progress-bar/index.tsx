import React, { FC } from "react";
import "./styles.scss";

const ProgressBar: FC = () => {
	const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div className="progress-bar">
			{test.map((_, i) => (
				<div className={`progress-bar__square progress-bar__square--${i} `} />
			))}
		</div>
	);
};

export default ProgressBar;
