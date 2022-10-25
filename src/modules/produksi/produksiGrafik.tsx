import { FC } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { baseOptions, Empty } from 'components';

if (typeof Highcharts === 'object') {
	HighchartsExporting(Highcharts);
}

type props = {
	id?: any;
	series?: any[];
	options?: any;
	type?: any;
	title?: any;
	empty?: any;
};

const ProduksiGrafik: FC<props> = ({ id, series, options, type, title, empty }) => {
	const ProdOptions = {
		...baseOptions,
		...options,
		series: series,
		chart: {
			type: 'line',
			height: 400,
		},
		title: {
			text: title,
			style: {
				textTransform: 'capitalize',
			},
			floating: false,
		},
		subtitle: {
			text: type,
			style: {
				textTransform: 'capitalize',
			},
		},
		xAxis: [
			{
				...options?.xAxis,
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				crosshair: true,
			},
		],
		yAxis: {
			...baseOptions.yAxis,
			title: {
				text: 'Volume (M³)',
			},
			labels: {
				format: '{text}M',
			},
			...options?.yAxis,
		},
		plotOptions: {
			...options?.plotOptions,
			series: {
				...baseOptions.plotOptions.series,
				dataLabels: {
					enabled: false,
				},
			},
		},
		tooltip: {
			...options?.tooltip,
			shared: true,
			useHTML: true,
			headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
			pointFormat: '<tr><td>{series.name} :</td>' + '<td style="text-align: right"><b>{point.y} (㎥)</b></td></tr>',
			footerFormat: '</table>',
			valueDecimals: 2,
		},
	};

	return (
		<>
			{empty.status ? (
				<HighchartsReact
					containerProps={{ className: 'charts', id: id }}
					highcharts={Highcharts}
					options={ProdOptions}
				/>
			) : (
				<Empty
					imageStyle={{
						height: 100,
					}}
					description='silahkan atur filter terlebih dahulu'
					buttons={{
						text: 'Data Terbaru',
						onClick: empty.onClick,
					}}
				/>
			)}
		</>
	);
};

export default ProduksiGrafik;
