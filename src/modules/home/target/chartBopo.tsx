import React from 'react';
import ChartHome from '../charts';
import { trpc } from 'utils/trpc';
import { bopoData } from '../mockdata';

const ChartBopo = () => {
	const chartData = trpc.chartData.useQuery({ result: bopoData });

	return (
		<ChartHome
			id='chartbopo'
			options={{
				yAxis: {
					labels: {
						format: '{text}%',
					},
				},
			}}
			series={chartData.data?.result}
		/>
	);
};

export default ChartBopo;
