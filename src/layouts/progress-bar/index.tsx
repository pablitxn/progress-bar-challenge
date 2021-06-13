import React, { FC } from "react";
import ProgressBar from "../../components/progress-bar";
import Button from "../../components/button";
import "./styles.scss";

/**
 * TODO: message with error for small screen
 * from a hook. don't render the component to improve
 * performance
 *
 */

const ProgressBarLayout: FC = () => {
	const handleStart = () => {};
	const handleStop = () => {};
	const handleReset = () => {};

	return (
		<div className="progress-bar-layout">
			<header className="progress-bar-layout__header">ProgressBar</header>
			<ProgressBar />
			<div className="progress-bar-layout__options">
				<Button onClick={handleStart}>Start</Button>
				<Button onClick={handleStop}>Stop</Button>
				<Button onClick={handleReset}>Reset</Button>
			</div>
		</div>
	);
};

export default ProgressBarLayout;
