import React from 'react';
import ChartHome from '../charts';

import { trpc } from 'utils/trpc';
import { capexData } from '../mockdata';

const ChartCapex = () => {
	const chartData = trpc.chartData.useQuery({ result: capexData });
	return (
		<ChartHome
			id='chartcapex'
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

export default ChartCapex;
