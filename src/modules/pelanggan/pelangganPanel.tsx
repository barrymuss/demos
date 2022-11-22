import React, { FC } from 'react';

import { Card, Grid } from 'components';
import Grafik from 'modules/grafik';
import PelangganTable from './pelangganTable';

export type PelangganProps = {
	chart?: any;
	table?: any;
	empty?: any;
};

export const chartOpt = {
	tooltip: {
		shared: true,
		useHTML: true,
		headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
		pointFormat: '<tr><td>{series.name} :</td>' + '<td style="text-align: right"><b>{point.y}K</b></td></tr>',
		footerFormat: '</table>',
		valueDecimals: 0,
	},
	yAxis: {
		min: 0,
		title: {
			text: 'Jumlah Pelanggan',
		},
		labels: {
			format: '{text}K',
		},
	},
};

const PelangganPanel: FC<PelangganProps> = ({ chart, table, empty }) => {
	return (
		<Grid>
			<Grid.Col>
				<Card title={chart?.title} subtitle={chart?.subtitle} notshadow notpadding>
					<Grafik
						empty={{
							status: empty?.status,
							onClick: empty?.onClick,
						}}
						options={chartOpt}
						series={chart?.data}
					/>
				</Card>
			</Grid.Col>
			<Grid.Col>
				<Card title={table?.title} subtitle={table?.subtitle} notshadow notpadding>
					<PelangganTable data={table?.data} />
				</Card>
			</Grid.Col>
		</Grid>
	);
};

export default PelangganPanel;
