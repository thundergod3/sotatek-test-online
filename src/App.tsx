import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import { TodoProvider } from "./contexts/TodoContext";

import Homepage from "./pages/Homepage";
import CreateTaskPage from "./pages/CreateTaskPage";

const App = (): JSX.Element => {
	const { todoStatus, todoDate, handleChangeTodoStatus, handleChangeTodoTime } = useContext(TodoProvider);

	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route path="/create" component={CreateTaskPage} />
		</Switch>
	);
};

export default App;
