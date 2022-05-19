import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Graph from './components/Graph';
import Input from './components/Input';

function App() {
	const [quant, setQuant] = useState({ current: '', target: '' });
	const [verbal, setVerbal] = useState({ current: '', target: '' });
	const [total, setTotal] = useState({ current: '', target: '' });
	const [marks, setMarks] = useState({
		quant: { current: '', target: '' },
		verbal: { current: '', target: '' },
		total: { current: '', target: '' },
	});
	const [showGraph, setShowGraph] = useState(false);

	const handleSubmit = () => {
		if (
			verbal.current > 0 &&
			verbal.target > 0 &&
			quant.current > 0 &&
			quant.target > 1
		) {
			let total = {};
			if (verbal.current && quant.current) {
				total.current =
					200 + (Number(verbal.current) + Number(quant.current)) * 5;
			} else {
				total.current = 0;
			}
			if (verbal.target && quant.target) {
				total.target = 200 + (Number(verbal.target) + Number(quant.target)) * 5;
			} else {
				total.target = 0;
			}
			setMarks({
				quant: { current: Number(quant.current), target: Number(quant.target) },
				verbal: {
					current: Number(verbal.current),
					target: Number(verbal.target),
				},
				total: total,
			});

			setShowGraph(true);
		}
	};
	return (
		<div className='App'>
			<Input
				quant={quant}
				setQuant={setQuant}
				verbal={verbal}
				setVerbal={setVerbal}
			/>
			<Button text='Submit and Refresh' handleSubmit={handleSubmit} />
			{showGraph && (
				<>
					<Graph marks={marks} />
				</>
			)}
		</div>
	);
}

export default App;
