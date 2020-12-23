import React, { useContext } from "react";
import { TodoProvider } from "../../../contexts/TodoContext";

import TodoItem, { TodoItemI } from "../TodoItem";

type TodoListI = Array<TodoItemI>;

const TodoList = (): JSX.Element => {
	const { todoList } = useContext(TodoProvider);

	return (
		<div className="todo-list">
			{todoList.length === 0 ? (
				<p style={{ marginTop: 10 }}>You don't have any task to do</p>
			) : (
				todoList
					.sort(
						(a: TodoItemI, b: TodoItemI): number => new Date(a.date).getTime() - new Date(b.date).getTime()
					)
					.map((item: TodoItemI): JSX.Element => <TodoItem item={item} />)
			)}
		</div>
	);
};

export default TodoList;

export type { TodoListI };
