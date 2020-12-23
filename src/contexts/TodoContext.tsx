import React, { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { TodoListI } from "../components/todos/TodoList";
import { TodoItemI } from "../components/todos/TodoItem";

import history from "../constants/history";

export const TodoProvider: any = createContext([]);

interface Props {
	children?: JSX.Element;
}

interface StateCreateTaskI {
	title: string;
	description: string;
}

const TodoContext = ({ children }: Props): JSX.Element => {
	const [todoList, setTodoList] = useState<TodoListI | any>(
		JSON.parse(localStorage.getItem("todoList") || "[]") || []
	);
	const [searchTodoList, setSearchTodoList] = useState<TodoListI | any>(
		JSON.parse(localStorage.getItem("searchTodoList") || "[]") || []
	);
	const [keyword, setKeyword] = useState<string>("");
	const [listIdChecked, setListIdChecked] = useState<Array<string>>([]);
	const [stateCreateTask, setStateCreateTask] = useState<StateCreateTaskI>({
		title: "",
		description: "",
	});
	const [valueCombox, setValueCombox] = useState<string>("1");
	const [valueDate, setValueDate] = useState<Date>(new Date());

	const createTodoItem = (): void => {
		setTodoList([
			...todoList,
			{
				...stateCreateTask,
				date: valueDate,
				priorityStatus: valueCombox,
				id: uuidv4(),
				temp_title: stateCreateTask.title,
			},
		]);
		setSearchTodoList([
			...searchTodoList,
			{
				...stateCreateTask,
				date: valueDate,
				priorityStatus: valueCombox,
				id: uuidv4(),
				temp_title: stateCreateTask.title,
			},
		]);

		const tempTodoList: TodoListI = todoList;
		const tempSearchTodoList: TodoListI = searchTodoList;

		tempTodoList.push({
			...stateCreateTask,
			date: valueDate,
			priorityStatus: valueCombox,
			id: uuidv4(),
			temp_title: stateCreateTask.title,
		});
		tempSearchTodoList.push({
			...stateCreateTask,
			date: valueDate,
			priorityStatus: valueCombox,
			id: uuidv4(),
			temp_title: stateCreateTask.title,
		});

		localStorage.setItem("todoList", JSON.stringify(tempTodoList));
		localStorage.setItem("searchTodoList", JSON.stringify(tempSearchTodoList));

		setStateCreateTask({
			title: "",
			description: "",
		});
		setValueCombox("1");
		setValueDate(new Date());

		history.push("/");
	};

	const updateTodoItem = (): void => {
		setTodoList(
			todoList.map(
				(item: TodoItemI): TodoItemI => {
					return {
						...item,
						temp_title: item.title,
					};
				}
			)
		);
		setSearchTodoList(
			searchTodoList.map(
				(item: TodoItemI): TodoItemI => {
					return {
						...item,
						temp_title: item.title,
					};
				}
			)
		);

		const tempTodoList: TodoListI = todoList.map(
			(item: TodoItemI): TodoItemI => {
				return {
					...item,
					temp_title: item.title,
				};
			}
		);
		const tempSearchTodoList: TodoListI = searchTodoList.map(
			(item: TodoItemI): TodoItemI => {
				return {
					...item,
					temp_title: item.title,
				};
			}
		);

		localStorage.setItem("todoList", JSON.stringify(tempTodoList));
		localStorage.setItem("searchTodoList", JSON.stringify(tempSearchTodoList));
	};

	const deleteTodoItem = (id: string): void => {
		setTodoList(todoList.filter((item: TodoItemI): boolean => item.id !== id));
		setSearchTodoList(searchTodoList.filter((item: TodoItemI): boolean => item.id !== id));

		const tempTodoList: TodoListI = todoList.filter((item: TodoItemI): boolean => item.id !== id);
		const tempSearchTodoList: TodoListI = searchTodoList.filter((item: TodoItemI): boolean => item.id !== id);

		localStorage.setItem("todoList", JSON.stringify(tempTodoList));
		localStorage.setItem("searchTodoList", JSON.stringify(tempSearchTodoList));
	};

	const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>, id: string): any => {
		setTodoList(
			todoList.map(
				(item: TodoItemI): TodoItemI => {
					if (item.id === id) {
						return {
							...item,
							[e.target.name]: e.target.value,
						};
					} else {
						return item;
					}
				}
			)
		);
		setSearchTodoList(
			searchTodoList.map(
				(item: TodoItemI): TodoItemI => {
					if (item.id === id) {
						return {
							...item,
							[e.target.name]: e.target.value,
						};
					} else {
						return item;
					}
				}
			)
		);
	};

	const handleChangeTodoStatus = (e: React.ChangeEvent<HTMLInputElement>, id: string): void => {
		setTodoList(
			todoList.map(
				(item: TodoItemI): TodoItemI => {
					if (item.id === id) {
						return {
							...item,
							priorityStatus: e.target.value,
						};
					} else {
						return item;
					}
				}
			)
		);
		setSearchTodoList(
			searchTodoList.map(
				(item: TodoItemI): TodoItemI => {
					if (item.id === id) {
						return {
							...item,
							priorityStatus: e.target.value,
						};
					} else {
						return item;
					}
				}
			)
		);
	};

	const handleChangeTodoTime = (date: Date, id: string): void => {
		setTodoList(
			todoList.map(
				(item: TodoItemI): TodoItemI => {
					if (item.id === id) {
						return {
							...item,
							date,
						};
					} else {
						return item;
					}
				}
			)
		);
		setSearchTodoList(
			searchTodoList.map(
				(item: TodoItemI): TodoItemI => {
					if (item.id === id) {
						return {
							...item,
							date,
						};
					} else {
						return item;
					}
				}
			)
		);
	};

	const handleSearch = (e: any): void => {
		setKeyword(e.target.value);

		if (e.keyCode === 13) {
			setTodoList(searchTodoList.filter((item: TodoItemI): boolean => item.title.indexOf(keyword) >= 0));
		}
	};

	const handleChecked = (id: string): void => {
		if (!listIdChecked.includes(id)) {
			setListIdChecked([...listIdChecked, id]);
		} else {
			setListIdChecked(listIdChecked.filter((item: string) => item !== id));
		}
	};

	const deleteMultipleTodoTask = () => {
		setTodoList(todoList.filter((item: TodoItemI, index: number): boolean => !listIdChecked.includes(item.id)));
		setSearchTodoList(
			searchTodoList.filter((item: TodoItemI, index: number): boolean => !listIdChecked.includes(item.id))
		);
		setListIdChecked(listIdChecked.filter((item: string): boolean => !listIdChecked.includes(item)));

		const tempTodoList: TodoListI = todoList.filter(
			(item: TodoItemI, index: number): boolean => !listIdChecked.includes(item.id)
		);
		const tempSearchTodoList: TodoListI = searchTodoList.filter(
			(item: TodoItemI, index: number): boolean => !listIdChecked.includes(item.id)
		);

		localStorage.setItem("todoList", JSON.stringify(tempTodoList));
		localStorage.setItem("searchTodoList", JSON.stringify(tempSearchTodoList));
	};

	const handleChangeCombox = (e: React.ChangeEvent<HTMLInputElement>) => setValueCombox(e.target.value);

	const handleChangeDate = (date: Date) => setValueDate(date);

	const handleChangeTextCreateTask = (e: React.ChangeEvent<HTMLInputElement>) =>
		setStateCreateTask({
			...stateCreateTask,
			[e.target.name]: e.target.value,
		});

	return (
		<TodoProvider.Provider
			value={{
				todoList,
				keyword,
				listIdChecked,
				stateCreateTask,
				valueCombox,
				valueDate,
				setTodoList,
				handleChangeTodoStatus,
				handleChangeTodoTime,
				handleSearch,
				handleChecked,
				deleteTodoItem,
				handleChangeText,
				updateTodoItem,
				deleteMultipleTodoTask,
				handleChangeTextCreateTask,
				createTodoItem,
				handleChangeCombox,
				handleChangeDate,
			}}>
			{children}
		</TodoProvider.Provider>
	);
};

export default TodoContext;
