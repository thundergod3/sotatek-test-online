import React from "react";

import "./style.scss";

interface Props {
	required?: boolean;
	id?: string;
	value?: string;
	name?: string;
	placeholder?: string;
	handleChange?: any;
}

const InputField = ({ id, value, name, placeholder, handleChange, required }: Props): JSX.Element => {
	return (
		<input
			required={required}
			className="input-field"
			value={value}
			name={name}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, id)}
			onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleChange(e, id)}
			placeholder={placeholder}
		/>
	);
};

export default InputField;
