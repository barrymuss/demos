import { useState } from 'react';
import { Tabset, message } from 'components';
import KeuanganCard from 'modules/keuangan/keuanganCard';
import KeuanganPanel from 'modules/keuangan/keuanganPanel';
import { tableBopo, tableCapex, tableLaba, tableUsaha } from 'modules/keuangan/mockData';

const DashboardKeuangan = () => {
	const [filter, setFilter] = useState<any>({});
	const [empty, setEmpty] = useState(false);

	const handleFilter = () => {
		if (filter.tahun == null) {
			message.notif({
				key: `notif_chart`,
				type: 'error',
				title: 'Filter',
				description: 'filter grafik belum lengkap!',
			});
		} else {
			console.log(filter);
			setEmpty(true);
		}
	};

	const handleEmptyButton = () => {
		setFilter({
			tahun: 2021,
		});

		setEmpty(true);
	};

	return (
		<KeuanganCard
			filter={{
				label: 'tahun',
				value: filter.tahun,
				onChange: (value: any) => {
					setFilter({
						tahun: value,
					});
				},
				onSubmit: handleFilter,
				selection: [
					{
						value: 2020,
						label: 2020,
					},
					{
						value: 2021,
						label: 2021,
					},
				],
			}}
		>
			<Tabset
				type='line'
				panel={[
					{
						title: 'Pendapatan Usaha',
						disabled: !empty,
						content: (
							<KeuanganPanel
								empty={{
									status: empty,
									onClick: handleEmptyButton,
								}}
								type='milion'
								chart={{
									title: 'Grafik Pendapatan',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',

									data: [
										{
											type: 'column',
											name: 'Pendapatan usaha (R)',
											data: [13, 12, 1, 3, 14, 12, 10, 10, 5, 12, 10, 8],
										},
										{
											type: 'column',
											name: 'Pendatan Usaha (T)',
											data: [12, 13, 15, 7, 16, 16, 3, 13, 13, 5, 5, 5],
										},
										{
											name: 'Pendatan Usaha YTD (R)',
											data: [5, 13, 17, 19, 23, 26, 32, 35, 38, 40, 42, 50],
										},
										{
											name: 'Pendatan Usaha YTD (T)',
											data: [5, 15, 18, 20, 25, 28, 33, 36, 39, 43, 45, 55],
										},
									],
								}}
								table={{
									title: 'Data Keuangan (Miliar)',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',
									data: empty && tableUsaha,
								}}
							/>
						),
					},
					{
						title: 'Laba Usaha',
						disabled: !empty,
						content: (
							<KeuanganPanel
								empty={{
									status: empty,
									onClick: handleEmptyButton,
								}}
								type='milion'
								chart={{
									title: 'Grafik Laba',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',

									data: [
										{
											type: 'column',
											name: 'Laba usaha (R)',
											data: [13, 12, 1, 3, -14, -12, -13, -10, -5, -12, -10, -8],
										},
										{
											type: 'column',
											name: 'Laba Usaha (T)',
											data: [12, 13, 15, 7, -16, -16, -3, -13, -13, -5, -15, -5],
										},
										{
											name: 'Laba Usaha YTD (R)',
											data: [5, 13, 17, 19, -23, -26, -32, -35, -38, -40, -42, -50],
										},
										{
											name: 'Laba Usaha YTD (T)',
											data: [5, 15, 18, 20, -25, -28, -33, -36, -39, -43, -45, -55],
										},
									],
								}}
								table={{
									title: 'Data Keuangan (Miliar)',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',
									data: empty && tableLaba,
								}}
							/>
						),
					},
					{
						title: 'BOPO',
						disabled: !empty,
						content: (
							<KeuanganPanel
								empty={{
									status: empty,
									onClick: handleEmptyButton,
								}}
								type='percent'
								chart={{
									title: 'Grafik Laba',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',

									data: [
										{
											type: 'column',
											name: 'BOPO (R)',
											data: [90, 95, 97, 99, 98, 92, 93, 100, 89, 93, 95, 94],
										},
										{
											type: 'column',
											name: 'BOPO (T)',
											data: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
										},
										{
											name: 'BOPO YTD (R)',
											data: [90, 95, 97, 99, 98, 92, 93, 100, 89, 93, 95, 94],
										},
										{
											name: 'BOPO YTD (T)',
											data: [90, 95, 95, 95, 91, 92, 90, 93, 98, 93, 90, 90],
										},
									],
								}}
								table={{
									title: 'Data Keuangan (Persentase)',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',
									data: empty && tableBopo,
								}}
							/>
						),
					},
					{
						title: 'Capex',
						disabled: !empty,
						content: (
							<KeuanganPanel
								empty={{
									status: empty,
									onClick: handleEmptyButton,
								}}
								type='milion'
								chart={{
									title: 'Grafik Laba',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',

									data: [
										{
											type: 'column',
											name: 'Capex',
											data: [10, 15, 17, 10, 18, 12, 13, 15, 18, 13, 15, 14],
										},
										{
											type: 'line',
											name: 'Capex YTD',
											data: [10, 15, 17, 10, 18, 12, 13, 15, 18, 13, 15, 14],
										},
									],
								}}
								table={{
									title: 'Data Keuangan (Miliar)',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',
									data: empty && tableCapex,
								}}
							/>
						),
					},
				]}
			/>
		</KeuanganCard>
	);
};

export default DashboardKeuangan;
