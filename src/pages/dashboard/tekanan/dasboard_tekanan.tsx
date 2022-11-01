import React, { useState } from 'react';
import Filters from 'modules/filters';
import { Card, Grid, message } from 'components';
import TekananCard from 'modules/tekanan/tekananCard';
import TekananGrafik from 'modules/tekanan/tekananGrafik';
import TekananTable from 'modules/tekanan/tekananTable';
import { mockTekanan } from 'modules/tekanan/mockTable';

const DashboardTekanan = () => {
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
		<TekananCard
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
			<Grid.Col>
				<Card
					title={'Grafik Tekanan'}
					subtitle={
						empty ? `terlampir data tekanan pada tahun ${filter.tahun}` : 'silahkan atur filter terlebih dahulu'
					}
					notpadding
					notshadow
				>
					<TekananGrafik
						empty={{
							status: empty,
							onClick: handleEmptyButton,
						}}
						series={[
							{
								name: 'Aetra',
								data: [13, 2, 1, 3, 14],
							},
							{
								name: 'Palyja',
								data: [12, 3, 15, 7, 16],
							},
							{
								name: 'Pamjaya',
								data: [14, 13, 13, 9, 0],
							},
							{
								name: 'Distibusi YTD (T)',
								data: [3, 2.67, 3, 6.33, 3.33],
							},
						]}
					/>
				</Card>
			</Grid.Col>
			<Grid.Col>
				<Card
					title={'Data Tekanan'}
					subtitle={
						empty ? `terlampir data tekanan pada tahun ${filter.tahun}` : 'silahkan atur filter terlebih dahulu'
					}
					notpadding
					notshadow
				>
					<TekananTable data={empty && mockTekanan} />
				</Card>
			</Grid.Col>
		</TekananCard>
	);
};

export default DashboardTekanan;
