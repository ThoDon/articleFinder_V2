import React, { useRef, useEffect } from 'react';
import { InputWithLabelProps } from '../types';

const InputWithLabel = ({
	id,
	value,
	type = 'text',
	onInputChange,
	isFocused,
	children,
}: InputWithLabelProps) => {
	const inputRef = useRef<HTMLInputElement>(null!);

	useEffect(() => {
		if (isFocused && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isFocused]);

	return (
		<>
			<label htmlFor={id} className='label'>
				{children}
			</label>
			&nbsp;
			<input
				ref={inputRef}
				id={id}
				type={type}
				value={value}
				onChange={onInputChange}
				className='input'
			/>
		</>
	);
};
export default InputWithLabel;
