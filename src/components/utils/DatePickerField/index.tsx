import React from "react";
import "moment/locale/fr.js";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
interface Props {
	id?: string;
	date: Date;
	handleChange: any;
}

const DatePickerField = ({ id, date, handleChange }: Props): JSX.Element => {
	return (
		<DatePicker
			selected={new Date(date)}
			onChange={(e: any) => handleChange(e, id)}
			isClearable
			dateFormat="MM/dd/yyyy"
			closeOnScroll={true}
			minDate={new Date()}
		/>
	);
};

export default DatePickerField;
