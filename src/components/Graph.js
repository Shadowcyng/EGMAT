import React, { useRef, useState, useEffect } from 'react';
import { DownTrangle, UpTrangle } from './Trangle';

const Graph = (props) => {
	const { marks } = props;
	const [quantTargetAnchor, setQuantTargetAnchor] = useState('');
	const [verbalTargetAnchor, setVerbalTargetAnchor] = useState('');
	const [totalTargetAnchor, setTotalTargetAnchor] = useState('');
	const total_current = useRef();
	const total_target = useRef();
	const quant_current = useRef();
	const quant_target = useRef();
	const verbal_current = useRef();
	const verbal_target = useRef();
	const total_plus_anchor = useRef();
	const quant_plus_anchor = useRef();
	const verbal_plus_anchor = useRef();
	const quant_current_anchor = useRef();
	const quant_target_anchor = useRef();
	const verbal_current_anchor = useRef();
	const verbal_target_anchor = useRef();
	const total_current_anchor = useRef();
	const total_target_anchor = useRef();

	useEffect(() => {
		total_current.current.style.width = '0%';
		total_target.current.style.width = '0%';

		quant_current.current.style.width = '0%';
		quant_target.current.style.width = '0%';
		verbal_current.current.style.width = '0%';
		verbal_target.current.style.width = '0%';

		total_current.current.style.width =
			(Number(marks.total.current) * 100) / 800 + '%';
		total_target.current.style.width =
			(Number(marks.total.target) * 100) / 800 + '%';

		quant_current.current.style.width =
			(Number(marks.quant.current) * 100) / 60 + '%';
		quant_target.current.style.width =
			(Number(marks.quant.target) * 100) / 60 + '%';
		verbal_current.current.style.width =
			(Number(marks.verbal.current) * 100) / 60 + '%';
		verbal_target.current.style.width =
			(Number(marks.verbal.target) * 100) / 60 + '%';
		if (total_plus_anchor.current) {
			total_plus_anchor.current.style.left =
				(Number(marks.total.current) * 100) / 800 + 2 + '%';
		}
		if (quant_plus_anchor.current) {
			quant_plus_anchor.current.style.left =
				(Number(marks.quant.current) * 100) / 60 + 2 + '%';
		}
		if (verbal_plus_anchor.current) {
			verbal_plus_anchor.current.style.left =
				(Number(marks.verbal.current) * 100) / 60 + 2 + '%';
		}
		quant_current_anchor.current.style.left =
			(Number(marks.quant.current) * 100) / 60 - 1 + '%';
		quant_target_anchor.current.style.left =
			(Number(marks.quant.target) * 100) / 60 - 1 + '%';
		verbal_current_anchor.current.style.left =
			(Number(marks.verbal.current) * 100) / 60 - 1 + '%';
		verbal_target_anchor.current.style.left =
			(Number(marks.verbal.target) * 100) / 60 - 1 + '%';
		total_current_anchor.current.style.left =
			(Number(marks.total.current) * 100) / 800 - 1 + '%';
		total_target_anchor.current.style.left =
			(Number(marks.total.target) * 100) / 800 - 1 + '%';
		if (Math.abs(marks.total.current - marks.total.target) < 30) {
			setTotalTargetAnchor('reverse');
		} else {
			setTotalTargetAnchor('');
		}
		if (Math.abs(marks.quant.current - marks.quant.target) < 5) {
			setQuantTargetAnchor('reverse');
		} else {
			setQuantTargetAnchor('');
		}
		if (Math.abs(marks.verbal.current - marks.verbal.target) < 5) {
			setVerbalTargetAnchor('reverse');
		} else {
			setVerbalTargetAnchor('');
		}
	}, [marks]);

	return (
		<div className='graph_wrapper'>
			<div className='total_wrapper'>
				<div className='graph_text total_text'>Total Score</div>
				<div className='score'>{marks.total.current}</div>
				<div className='graph main_graph_container'>
					<div className='current_anchor anchor' ref={total_current_anchor}>
						<span className='anchor_score'>{marks.total.current}</span>
						<span className='anchor_current_pointer'>!</span>
					</div>
					<div
						className={'target_anchor anchor ' + totalTargetAnchor}
						ref={total_target_anchor}
					>
						<span className='anchor_score'>{marks.total.target}</span>
						<span className='anchor_target_pointer'>!</span>
					</div>
					{marks.total.current < marks.total.target && (
						<div className='plus_anchor anchor' ref={total_plus_anchor}>
							{`+${marks.total.target - marks.total.current}`}
						</div>
					)}
					<div
						id='total_current'
						className='graph graph_current'
						ref={total_current}
					></div>
					<div
						id='total_target'
						className='graph graph_target'
						ref={total_target}
					></div>
				</div>
				<div className='score_description'>
					Your estimate GMAT score per your performance in this mock test is{' '}
					{marks.total.current} which is{' '}
					{marks.total.target != marks.total.current && (
						<>
							<strong>
								{Math.abs(marks.total.target - marks.total.current)} points
							</strong>{' '}
						</>
					)}
					{marks.total.target != marks.total.current
						? marks.total.target > marks.total.current
							? 'lower than'
							: ' heigher than'
						: 'equal to'}{' '}
					your target GMAT score of {marks.total.target}
				</div>
			</div>
			<div className='multi_graph_wrapper'>
				<div className='subject_graph_wrapper'>
					<div className='graph_text'>Quant Score</div>
					<div className='score'>Q{marks.quant.current}</div>
					<div className='graph main_graph_container'>
						<div className='current_anchor anchor' ref={quant_current_anchor}>
							<span className='anchor_score'>{marks.quant.current}</span>
							<span className='anchor_current_pointer'>!</span>
						</div>
						<div
							className={'target_anchor anchor ' + quantTargetAnchor}
							ref={quant_target_anchor}
						>
							<span className='anchor_score'>{marks.quant.target}</span>
							<span className='anchor_target_pointer'>!</span>
						</div>
						{marks.quant.current < marks.quant.target && (
							<div className='plus_anchor anchor' ref={quant_plus_anchor}>
								{`+${marks.quant.target - marks.quant.current}`}
							</div>
						)}
						<div
							id='total_current'
							className='graph graph_current'
							ref={quant_current}
						></div>
						<div
							id='total_target'
							className='graph graph_target'
							ref={quant_target}
						></div>
					</div>
					<div className='score_description'>
						Your estimate quantitative score per your performance in this mock
						test is Q{marks.quant.current} which is{' '}
						{marks.quant.target != marks.quant.current && (
							<>
								<strong>
									{Math.abs(marks.quant.target - marks.quant.current)} points
								</strong>{' '}
							</>
						)}
						{marks.quant.target != marks.quant.current
							? marks.quant.target > marks.quant.current
								? 'lower than'
								: ' heigher than'
							: 'equal to'}{' '}
						your target GMAT score of Q{marks.total.target}
					</div>
				</div>
				<div className='subject_graph_wrapper'>
					<div className='graph_text'>Verbal Score</div>
					<div className='score'>V{marks.verbal.current}</div>
					<div className='graph main_graph_container'>
						<div className='current_anchor anchor' ref={verbal_current_anchor}>
							<span className='anchor_score'>{marks.verbal.current}</span>
							<span className='anchor_current_pointer'>!</span>
						</div>
						<div
							className={'target_anchor anchor ' + verbalTargetAnchor}
							ref={verbal_target_anchor}
						>
							<span className='anchor_score'>{marks.verbal.target}</span>
							<span className='anchor_target_pointer'>!</span>
						</div>
						{marks.verbal.current < marks.verbal.target && (
							<div className='plus_anchor anchor' ref={verbal_plus_anchor}>
								{`+${marks.verbal.target - marks.verbal.current}`}
							</div>
						)}
						<div
							id='total_curren'
							className='graph graph_current'
							ref={verbal_current}
						></div>
						<div
							id='total_target'
							className='graph graph_target'
							ref={verbal_target}
						></div>
					</div>
					<div className='score_description'>
						Your estimate verbal score per your performance in this mock test is
						V{marks.verbal.current} which is{' '}
						{marks.verbal.target != marks.verbal.current && (
							<>
								<strong>
									{Math.abs(marks.verbal.target - marks.verbal.current)} points
								</strong>{' '}
							</>
						)}
						{marks.verbal.target != marks.verbal.current
							? marks.verbal.target > marks.verbal.current
								? 'lower than'
								: ' heigher than'
							: 'equal to'}{' '}
						your target GMAT score of V{marks.verbal.target}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Graph;
