import React, { useContext } from "react";

import { TodoProvider } from "../../../contexts/TodoContext";

import { TodoItemI } from "../TodoItem";

import Combox from "../../utils/Combox";
import InputField from "../../utils/InputField";
import TextArea from "../../utils/TextArea";
import DatePickerField from "../../utils/DatePickerField/index";
import BigButton from "../../utils/BigButton";

import "./style.scss";

interface Props {
	item: TodoItemI;
	setShowDetail: any;
}

const TodoDetail = ({ item: { id, title, description, date, priorityStatus }, setShowDetail }: Props): JSX.Element => {
	const { handleChangeText, handleChangeTodoTime, handleChangeTodoStatus, updateTodoItem } = useContext(TodoProvider);

	return (
		<div className="todo-detail">
			<InputField id={id} value={title} handleChange={handleChangeText} name="title" required={true} />

			<div className="todo-detail__description">
				<h5>Description</h5>
				<TextArea id={id} value={description} handleChange={handleChangeText} name="description" />
			</div>

			<div className="todo-detail__option">
				<div className="todo-detail__date">
					<h5>Due Date</h5>
					<DatePickerField date={date} handleChange={handleChangeTodoTime} id={id} />
				</div>
				<div className="todo-detail__prority">
					<h5>Priority</h5>
					<Combox value={priorityStatus} handleChange={handleChangeTodoStatus} id={id} />
				</div>
			</div>
			<div className="todo-detail__update">
				<BigButton title="Update" handleChange={updateTodoItem} setShowDetail={setShowDetail} />
			</div>
		</div>
	);
};

export default TodoDetail;
