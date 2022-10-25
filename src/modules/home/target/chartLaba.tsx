import React from 'react';
import ChartHome from '../charts';

import { trpc } from 'utils/trpc';
import { labaData } from '../mockdata';

const ChartLaba = () => {
	const chartData = trpc.chartData.useQuery({ result: labaData });

	return (
		<ChartHome
			id='chartlaba'
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

export default ChartLaba;
