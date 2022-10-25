import React, { useState } from 'react';
import { Card, Tabset, Grid, message } from 'components';
import DistribusiCard from 'modules/distribusi/distribusiCard';
import DistribusiGrafik from 'modules/distribusi/distribusiGrafik';
import DistribusiTable from 'modules/distribusi/distribusiTable';
import { mockDistribusi } from 'modules/distribusi/mockTable';

const GrafikDistribusi = () => {
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
		<DistribusiCard
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
						title: 'Grafik Distribusi',
						disabled: !empty,
						content: (
							<Grid>
								<Grid.Col>
									<Card
										title={'Grafik Distribusi'}
										subtitle={
											empty
												? `terlampir data distribusi pada tahun ${filter.tahun}`
												: 'silahkan atur filter terlebih dahulu'
										}
										notshadow
										notpadding
									>
										<DistribusiGrafik
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
										title='Data Volume Distribusi'
										subtitle={
											empty
												? `terlampir data volume Distribusi pada tahun ${filter.tahun}`
												: 'silahkan atur filter terlebih dahulu'
										}
										notshadow
										notpadding
									>
										<DistribusiTable data={empty && mockDistribusi} />
									</Card>
								</Grid.Col>
							</Grid>
						),
					},
					{
						title: 'Grafik Distribusi YTD',
						disabled: !empty,
						content: (
							<Grid>
								<Grid.Col>
									<Card
										title={empty && 'Grafik Distribusi YTD'}
										subtitle={empty && `terlampir data distribusi YTD pada tahun ${filter.tahun}`}
										notshadow
										notpadding
									>
										<DistribusiGrafik
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
										title='Data Volume Terjual'
										subtitle={
											empty
												? `terlampir data volume terjual pada tahun ${filter.tahun}`
												: 'silahkan atur filter terlebih dahulu'
										}
										notshadow
										notpadding
									>
										<DistribusiTable data={empty && mockDistribusi} />
									</Card>
								</Grid.Col>
							</Grid>
						),
					},
				]}
			/>
		</DistribusiCard>
	);
};

export default GrafikDistribusi;
