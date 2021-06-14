import React, { FC } from "react";
import Home from "./views/home";
import "./styles.scss";

const App: FC = () => {
	return (
		<div className="app">
			<Home />
		</div>
	);
};

export default App;
