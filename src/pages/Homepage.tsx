import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./pages.scss";

import { TodoProvider } from "../contexts/TodoContext";

import TodoList from "../components/todos/TodoList";
import InputField from "../components/utils/InputField";
import BulkBox from "../components/utils/BulkBox";
import BigButton from "../components/utils/BigButton";

const Homepage = (): JSX.Element => {
	const { keyword, handleSearch, listIdChecked } = useContext(TodoProvider);

	return (
		<div className="homepage">
			<div className="homepage__container">
				<div className="homepage__title">
					<h1>To Do List</h1>
				</div>
				<div className="homepage__addTask">
					<Link to="/create">
						<BigButton title="Add Task" />
					</Link>
				</div>
				<InputField value={keyword} handleChange={handleSearch} placeholder="Search ..." name="keyword" />
				<TodoList />
			</div>
			{listIdChecked.length !== 0 && <BulkBox />}
		</div>
	);
};

export default Homepage;
