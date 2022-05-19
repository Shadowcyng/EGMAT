import React from 'react';

const Input = (props) => {
	const { quant, setQuant, verbal, setVerbal } = props;

	const handleChangeInput = (e, obj, field) => {
		let value = e.target.value;
		obj[field] = value <= 60 ? value : obj[field];
		if ((obj = quant)) {
			setQuant({ ...obj });
		}
		if ((obj = verbal)) {
			setVerbal({ ...obj });
		}
	};
	return (
		<>
			<div className='main_wrapper'>
				<div className='type_wrapper'>
					<div className='quant_text type_text'>Quant</div>
					<div className='quant_input_wrapper input_wrapper'>
						<div className='quant_current'>
							<span>Current</span>
							<input
								className='input_box'
								type='number'
								value={quant.current}
								onChange={(e) => handleChangeInput(e, quant, 'current')}
							/>
						</div>
						<div className='quant_target'>
							<span>target</span>
							<input
								className='input_box'
								type='number'
								value={quant.target}
								onChange={(e) => handleChangeInput(e, quant, 'target')}
							/>
						</div>
					</div>
				</div>
				<div className='type_wrapper'>
					<div className='verbal_text type_text'>Verbal</div>
					<div className='verbal_input_wrapper input_wrapper'>
						<div className='verbal_current'>
							<span>Current</span>
							<input
								className='input_box'
								type='number'
								value={verbal.current}
								onChange={(e) => handleChangeInput(e, verbal, 'current')}
							/>
						</div>
						<div className='verbal_target'>
							<span>Target</span>
							<input
								className='input_box'
								type='number'
								name='target'
								value={verbal.target}
								onChange={(e) => handleChangeInput(e, verbal, 'target')}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Input;
