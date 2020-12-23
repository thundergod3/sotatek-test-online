import React from "react";
import { prorityListName, prorityListCode } from "../../../constants/priorityList";

interface Props {
	id?: string;
	value: string;
	handleChange: any;
}

const Combox = ({ id, value, handleChange }: Props): JSX.Element => {
	return (
		<select
			value={value}
			defaultValue={value}
			onChange={(e: any): any => handleChange(e, id)}
			className="combox"
			name="combox">
			<option value="select">Select an Option</option>
			{prorityListName.map(
				(item: string, index: number): JSX.Element => (
					<option value={prorityListCode[index]} key={index}>
						{item}
					</option>
				)
			)}
		</select>
	);
};

export default Combox;
