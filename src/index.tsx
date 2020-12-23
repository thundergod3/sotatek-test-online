import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import App from "./App";
import history from "./constants/history";
import TodoContext from "./contexts/TodoContext";

ReactDOM.render(
	<>
		<TodoContext>
			<Router history={history}>
				<App />
			</Router>
		</TodoContext>
	</>,
	document.getElementById("root")
);
