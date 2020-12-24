import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Homepage from "./pages/Homepage";
import CreateTaskPage from "./pages/CreateTaskPage";

const App = (): JSX.Element => {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/create" component={CreateTaskPage} />
		</Switch>
	);
};

export default App;
