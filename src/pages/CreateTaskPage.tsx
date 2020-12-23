import React, { useContext } from "react";

import BigButton from "../components/utils/BigButton";
import Combox from "../components/utils/Combox";
import DatePickerField from "../components/utils/DatePickerField";
import InputField from "../components/utils/InputField";
import TextArea from "../components/utils/TextArea";

import { TodoProvider } from "../contexts/TodoContext";

const CreateTaskPage = () => {
	const {
		stateCreateTask,
		handleChangeTextCreateTask,
		createTodoItem,
		handleChangeCombox,
		handleChangeDate,
		valueDate,
		valueCombox,
	} = useContext(TodoProvider);

	return (
		<div className="create-task">
			<div className="create-task__container">
				<div className="create-task__title">
					<h1>New Task</h1>
				</div>
				<InputField
					value={stateCreateTask.title}
					handleChange={handleChangeTextCreateTask}
					placeholder="Search ..."
					name="title"
				/>
				<div className="create-task__description">
					<h5>Description</h5>
					<TextArea
						value={stateCreateTask.description}
						handleChange={handleChangeTextCreateTask}
						name="description"
					/>
				</div>
				<div className="create-task__option">
					<div className="create-task__date">
						<h5>Due Date</h5>
						<DatePickerField date={valueDate} handleChange={handleChangeDate} />
					</div>
					<div className="create-task__prority">
						<h5>Priority</h5>
						<Combox value={valueCombox} handleChange={handleChangeCombox} />
					</div>
				</div>
				<div className="create-task__update">
					<BigButton title="Add" handleChange={createTodoItem} />
				</div>
			</div>
		</div>
	);
};

export default CreateTaskPage;
