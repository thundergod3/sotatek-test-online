import React from "react";

import "./style.scss";

interface Props {
	setShowDetail?: any;
	handleChange?: any;
	title?: string;
}

const BigButton = ({ handleChange, title, setShowDetail }: Props): JSX.Element => {
	return (
		<button
			className="big-button"
			onClick={() => {
				if (handleChange) {
					handleChange();
					if (setShowDetail) setShowDetail(false);
				}
			}}>
			{title}
		</button>
	);
};

export default BigButton;
