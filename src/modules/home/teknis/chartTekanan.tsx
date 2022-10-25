import React from 'react';
import HomeChart from '../charts';

const ChartTekanan = () => {
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
					name: 'Aetra',
					data: [13, 20, 15, 35, 14],
				},
				{
					type: 'column',
					name: 'Palyja',
					data: [12, 35, 15, 75, 16],
				},
				{
					type: 'line',
					name: 'Pamjaya',
					data: [31, 25.67, 3, 63.3, 30.33],
				},
			]}
		/>
	);
};

export default ChartTekanan;
