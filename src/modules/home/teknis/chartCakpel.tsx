import React from 'react';
import HomeChart from '../charts';

const ChartCakpel = () => {
	return (
		<HomeChart
			options={{
				yAxis: {
					min: 0,
					max: 100,
					labels: {
						format: '{text}%',
					},
				},
			}}
			series={[
				{
					type: 'column',
					name: 'Cakpel (R)',
					data: [13, 20, 15, 35, 14],
				},
				{
					type: 'column',
					name: 'Cakpel (T)',
					data: [12, 30, 15, 70, 16],
				},
			]}
		/>
	);
};

export default ChartCakpel;
