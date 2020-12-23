import React from "react";

import "./style.scss";

interface Props {
	title: string;
	handleChange: VoidFunction;
	customClassname: string;
}

const Button = ({ title, handleChange, customClassname }: Props): JSX.Element => {
	return (
		<button className={`button ${customClassname}`} onClick={handleChange}>
			<p>{title}</p>
		</button>
	);
};

export default Button;
