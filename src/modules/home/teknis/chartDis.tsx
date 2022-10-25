import React from 'react';
import HomeChart from '../charts';

const ChartDis = () => {
	return (
		<HomeChart
			options={{
				yAxis: {
					labels: {
						format: '{text}M',
					},
				},
			}}
			series={[
				{
					type: 'column',
					name: 'Distibusi (R)',
					data: [13, 2, 1, 3, 14],
				},
				{
					type: 'column',
					name: 'Distibusi (T)',
					data: [12, 3, 15, 7, 16],
				},
				{
					type: 'line',
					name: 'Distibusi YTD (R)',
					data: [14, 13, 13, 9, 0],
				},
				{
					type: 'line',
					name: 'Distibusi YTD (T)',
					data: [3, 2.67, 3, 6.33, 3.33],
				},
			]}
		/>
	);
};

export default ChartDis;
