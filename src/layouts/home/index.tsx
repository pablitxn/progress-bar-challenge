import React, { FC } from "react";
import ProgressBar from "../../components/progress-bar";
import "./styles.scss";

/**
 * TODO: message with error for small screen
 * from a hook. don't render the component to improve
 * performance
 *
 */

const Home: FC = () => {
	return (
		<div>
			<ProgressBar />
		</div>
	);
};

export default Home;
