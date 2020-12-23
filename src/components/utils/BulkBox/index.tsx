import React, { useContext } from "react";

import { TodoProvider } from "../../../contexts/TodoContext";

import Button from "../Button";

import "./style.scss";

interface Props {}

const BulkBox = ({}: Props): JSX.Element => {
	const { listIdChecked, deleteMultipleTodoTask } = useContext(TodoProvider);

	return (
		<div className="bulk-box">
			<div className="bulk-box__title">
				<p>Bulk Action</p>
			</div>
			<div className="bulk-box__buttonContainer">
				<Button title="Done" handleChange={deleteMultipleTodoTask} customClassname="btn--detail" />
				<Button title="Remove" handleChange={deleteMultipleTodoTask} customClassname="btn--delete" />
			</div>
		</div>
	);
};

export default BulkBox;
