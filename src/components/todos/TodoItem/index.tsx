import React, { useContext, useState } from "react";

import { TodoProvider } from "../../../contexts/TodoContext";

import Button from "../../utils/Button";
import TodoDetail from "../TodoDetail";

import "./style.scss";

interface TodoItemI {
	id: string;
	title: string;
	temp_title: string;
	description: string;
	date: Date;
	priorityStatus: string;
}

interface Props {
	item: TodoItemI;
}

const TodoItem = ({ item }: Props): JSX.Element => {
	const { handleChecked, deleteTodoItem } = useContext(TodoProvider);
	const { id, temp_title } = item;

	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [showDetal, setShowDetail] = useState<boolean>(false);

	const showDetailTodoItem = (): void => setShowDetail(!showDetal);

	return (
		<>
			<div className="todo-item" key={id}>
				<div className="todo-item__bio">
					<input
						className="todo-item__checkbox"
						type="checkbox"
						checked={isChecked}
						onChange={(): void => {
							setIsChecked(!isChecked);
							handleChecked(id);
						}}
					/>
					<p className="todo-item__title">{temp_title}</p>
				</div>
				<div className="todo-item__buttonContainer">
					<Button title="Detail" handleChange={showDetailTodoItem} customClassname="btn--detail" />
					<Button title="Remove" handleChange={() => deleteTodoItem(id)} customClassname="btn--delete" />
				</div>
			</div>
			{showDetal && <TodoDetail item={item} setShowDetail={setShowDetail} />}
		</>
	);
};

export default TodoItem;

export type { TodoItemI };
