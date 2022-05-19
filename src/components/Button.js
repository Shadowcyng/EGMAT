import React from 'react';

const Button = ({ text, handleSubmit }) => {
	return (
		<div className='btn_wrapper'>
			<button className='submit_btn' onClick={() => handleSubmit()}>
				{text}{' '}
			</button>
		</div>
	);
};

export default Button;
