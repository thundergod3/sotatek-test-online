import React from "react";

import "./style.scss";

interface Props {
	id?: string;
	value?: string;
	name?: string;
	placeholder?: string;
	handleChange?: any;
}

const TextArea = ({ id, value, name, placeholder, handleChange }: Props): JSX.Element => {
	return (
		<textarea
			className="text-area"
			value={value}
			name={name}
			onChange={(e: any) => handleChange(e, id)}
			placeholder={placeholder}
		/>
	);
};

export default TextArea;
