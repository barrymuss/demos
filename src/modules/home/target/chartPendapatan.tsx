import React from 'react';
import ChartHome from '../charts';

import { trpc } from 'utils/trpc';
import { pendapatanData } from '../mockdata';

const ChartPendapatan = () => {
	const chartData = trpc.chartData.useQuery({ result: pendapatanData });
	return (
		<ChartHome
			id='chartpendapatan'
			options={{
				yAxis: {
					labels: {
						format: '{text}M',
					},
				},
			}}
			series={chartData.data?.result}
		/>
	);
};

export default ChartPendapatan;
