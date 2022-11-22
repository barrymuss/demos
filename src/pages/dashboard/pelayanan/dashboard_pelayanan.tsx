import PelayananCard from 'modules/pelayanan/pelayananCard';
import React, { useState } from 'react';

import { message } from 'components';
import PelayananPanel from 'modules/pelayanan/pelayananPanel';
import { chartMock, tableMock } from 'modules/pelayanan/mockData';

const DashboardLayanan = () => {
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
		<PelayananCard
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
			<PelayananPanel
				empty={{
					status: empty,
					onClick: handleEmptyButton,
				}}
				chart={{
					title: 'Grafik Cakupan Layanan',
					subtitle: empty ? `terlampir data pada tahun ${filter.tahun}` : 'silahkan atur filter terlebih dahulu',

					data: chartMock,
				}}
				table={{
					title: 'Data Cakupan Layanan',
					subtitle: empty ? `terlampir data pada tahun ${filter.tahun}` : 'silahkan atur filter terlebih dahulu',
					data: empty && tableMock,
				}}
			/>
		</PelayananCard>
	);
};

export default DashboardLayanan;
