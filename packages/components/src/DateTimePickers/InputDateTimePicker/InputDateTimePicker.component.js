import React from 'react';
import PropTypes from 'prop-types';

import InputDatePicker from '../InputDatePicker';
import InputTimePicker from '../InputTimePicker';
import LegacyInputDateTimePicker from '../LegacyDateTimePickers';

import DateTime from '../DateTime';
import { DateTimeContext } from '../DateTime/Context';

import theme from './InputDateTimePicker.scss';

function InputDateTimePicker(props) {
	if (props.selectedDateTime) {
		// eslint-disable-next-line no-console
		console.warn(
			'Warning: "selectedDateTime" is deprecated and will be removed in the next major version. Use "value" instead please.',
		);
	}
	return (
		<DateTime.Manager
			id={props.id}
			value={props.value || props.selectedDateTime}
			useSeconds={props.useSeconds}
			useUTC={props.useUTC}
			timezone={props.timezone}
			onChange={props.onChange}
			defaultTimeValue={props.defaultTimeValue}
		>
			<DateTimeContext.Consumer>
				{({ date, time, onDateChange, onTimeChange }) => (
					<div className={theme['date-time-picker']}>
						<InputDatePicker
							id={`${props.id}-date-picker`}
							readOnly={props.readOnly}
							onBlur={props.onBlur}
							onChange={onDateChange}
							value={date}
							dateFormat={props.dateFormat}
							startDate={props.startDate}
							endDate={props.endDate}
						/>
						<InputTimePicker
							id={`${props.id}-time-picker`}
							readOnly={props.readOnly}
							onBlur={props.onBlur}
							onChange={onTimeChange}
							value={time}
							useSeconds={props.useSeconds}
							timezone={props.timezone}
						/>
					</div>
				)}
			</DateTimeContext.Consumer>
		</DateTime.Manager>
	);
}
InputDateTimePicker.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string]),
	selectedDateTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.number,
		PropTypes.string,
	]),
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	readOnly: PropTypes.bool,
	dateFormat: PropTypes.string,
	useSeconds: PropTypes.bool,
	useUTC: PropTypes.bool,
	timezone: PropTypes.string,
	defaultTimeValue: PropTypes.shape({
		hours: PropTypes.string.isRequired,
		minutes: PropTypes.string.isRequired,
		seconds: PropTypes.string,
	}),
	startDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string]),
	endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string]),
};

InputDateTimePicker.defaultProps = {
	dateFormat: 'YYYY-MM-DD',
	useSeconds: false,
	useUTC: false,
	// default behaviour is to forbid empty values
	required: true,
};

function InputDateTimePickerSwitch(props) {
	if (props.formMode) {
		return <LegacyInputDateTimePicker {...props} />;
	}

	return <InputDateTimePicker {...props} />;
}
InputDateTimePickerSwitch.propTypes = {
	formMode: PropTypes.bool,
};

export default InputDateTimePickerSwitch;
