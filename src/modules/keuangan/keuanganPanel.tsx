import React, { FC } from 'react';

import { Card, Grid } from 'components';
import Grafik from 'modules/grafik';
import KeuanganTable from './keuanganTable';

export type KeuanganProps = {
	chart?: any;
	table?: any;
	empty?: any;
	type?: 'milion' | 'percent';
};

export const milionOption = {
	tooltip: {
		shared: true,
		useHTML: true,
		headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
		pointFormat: '<tr><td>{series.name} :</td>' + '<td style="text-align: right"><b>{point.y} M</b></td></tr>',
		footerFormat: '</table>',
		valueDecimals: 0,
	},
	yAxis: {
		// min: -100,
		// max: 100,
		title: {
			text: undefined,
		},
		labels: {
			format: '{text}M',
		},
	},
};

export const percetOption = {
	tooltip: {
		shared: true,
		useHTML: true,
		headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
		pointFormat: '<tr><td>{series.name} :</td>' + '<td style="text-align: right"><b>{point.y} %</b></td></tr>',
		footerFormat: '</table>',
		valueDecimals: 0,
	},
	yAxis: {
		min: 0,
		max: 100,
		title: {
			text: undefined,
		},
		labels: {
			format: '{text}%',
		},
	},
};

const KeuanganPanel: FC<KeuanganProps> = ({ chart, table, empty, type = 'milion' }) => {
	return (
		<Grid>
			<Grid.Col>
				<Card title={chart?.title} subtitle={chart?.subtitle} notshadow notpadding>
					<Grafik
						empty={{
							status: empty?.status,
							onClick: empty?.onClick,
						}}
						options={type === 'milion' ? milionOption : type === 'percent' ? percetOption : chart?.options}
						series={chart?.data}
					/>
				</Card>
			</Grid.Col>
			<Grid.Col>
				<Card title={table?.title} subtitle={table?.subtitle} notshadow notpadding>
					<KeuanganTable type={type} data={table?.data} />
				</Card>
			</Grid.Col>
		</Grid>
	);
};

export default KeuanganPanel;
