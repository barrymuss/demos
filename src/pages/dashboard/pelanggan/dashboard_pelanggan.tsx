import React, { useState } from 'react';
import { message, Tabset } from 'components';
import PelangganCard from 'modules/pelanggan/pelangganCard';
import PelangganPanel from 'modules/pelanggan/pelangganPanel';

import { chartMock, tableMock } from 'modules/pelanggan/mockData';

const DashboardPelanggan = () => {
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
		<PelangganCard
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
						title: 'Jumlah Pelanggan',
						disabled: !empty,
						content: (
							<PelangganPanel
								empty={{
									status: empty,
									onClick: handleEmptyButton,
								}}
								chart={{
									title: 'Grafik Pelanggan',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',

									data: chartMock,
								}}
								table={{
									title: 'Data Pelanggan',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',
									data: empty && tableMock,
								}}
							/>
						),
					},
					{
						title: 'Pelanggan Baru',
						disabled: !empty,
						content: (
							<PelangganPanel
								empty={{
									status: empty,
									onClick: handleEmptyButton,
								}}
								chart={{
									title: 'Grafik Pelanggan Baru',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',

									data: chartMock,
								}}
								table={{
									title: 'Data Pelanggan Baru',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',
									data: empty && tableMock,
								}}
							/>
						),
					},
					{
						title: 'Pelanggan Baru YTD',
						disabled: !empty,
						content: (
							<PelangganPanel
								empty={{
									status: empty,
									onClick: handleEmptyButton,
								}}
								chart={{
									title: 'Grafik Pelanggan Baru YTD',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',

									data: chartMock,
								}}
								table={{
									title: 'Data Pelanggan Baru YTD',
									subtitle: empty
										? `terlampir data pada tahun ${filter.tahun}`
										: 'silahkan atur filter terlebih dahulu',
									data: empty && tableMock,
								}}
							/>
						),
					},
				]}
			/>
		</PelangganCard>
	);
};

export default DashboardPelanggan;
