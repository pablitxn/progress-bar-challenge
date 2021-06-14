import React, { FC } from "react";
import { IProgressBar } from "./types";
import { handleBarStyles } from "../../utils/progress-bar";
import "./styles.scss";

const ProgressBar: FC<IProgressBar> = ({ barProperties }) => {
	return (
		<div className="progress-bar">
			{barProperties.map((step, index) => {
				const { percentage, isFilled } = step;
				const fillClassName = handleBarStyles(percentage, index, isFilled);
				return (
					<div
						key={`step_${index}`}
						className={`progress-bar__step ${fillClassName}`}
					/>
				);
			})}
		</div>
	);
};

export default ProgressBar;
