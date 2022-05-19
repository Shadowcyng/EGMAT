import React, { useEffect } from 'react';
export const DownTrangle = ({ color }) => {
	useEffect(() => {
		var canvasElement = document.querySelector('#myCanvas');
		var context = canvasElement.getContext('2d');

		// the triangle
		context.beginPath();
		context.moveTo(0, 12);
		context.lineTo(12, 0);
		context.lineTo(25, 12);
		context.lineTo(0, 12);
		context.closePath();

		// the outline
		context.lineWidth = 5;

		// the fill color
		context.fillStyle = '#FFCC00';
		context.fill();
	}, []);
	return <canvas id='myCanvas' width='25' height='25'></canvas>;
};

export const UpTrangle = ({ color }) => {
	useEffect(() => {
		var canvasElement = document.querySelector('#myCanvas');
		var context = canvasElement.getContext('2d');

		// the triangle
		context.beginPath();

		context.beginPath();
		context.moveTo(12, 12);
		context.lineTo(0, 12);
		context.lineTo(0, 12);
		context.lineTo(25, 12);
		context.closePath(); // connect end to start

		// the outline

		// the fill color
		context.fillStyle = '#000000';
		context.fill();
	}, []);
	return <canvas id='myCanvas' width='25' height='25'></canvas>;
};
