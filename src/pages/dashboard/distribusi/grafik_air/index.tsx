import React, { useState } from 'react';
import { Card, Tabset, Grid, message } from 'components';
import DistribusiCard from 'modules/distribusi/distribusiCard';
import DistribusiGrafik from 'modules/distribusi/distribusiGrafik';
import DistribusiTable from 'modules/distribusi/distribusiTable';
import { mockDistribusi } from 'modules/distribusi/mockTable';

const GrafikAir = () => {
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
						title: 'Grafik Air Beli',
						disabled: !empty,
						content: (
							<Grid>
								<Grid.Col>
									<Card
										title={'Grafik Air beli'}
										subtitle={
											empty
												? `terlampir data Air beli pada tahun ${filter.tahun}`
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
													name: 'Palyja Realisasi',
													data: [12, 3, 15, 7, 16],
												},
												{
													name: 'Palyja Target Perjanjian',
													data: [14, 13, 13, 9, 0],
												},
											]}
										/>
									</Card>
								</Grid.Col>
								<Grid.Col>
									<Card
										title='Data Air Beli'
										subtitle={
											empty
												? `terlampir data Air Beli  pada tahun ${filter.tahun}`
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
						title: 'Grafik Air Beli YTD',
						disabled: !empty,
						content: (
							<Grid>
								<Grid.Col>
									<Card
										title={empty && 'Grafik Air Beli YTD'}
										subtitle={empty && `terlampir data Air Beli YTD pada tahun ${filter.tahun}`}
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
													name: 'Palyja Realisasi',
													data: [12, 3, 15, 7, 16],
												},
												{
													name: 'Palyja Target Perjanjian',
													data: [14, 13, 13, 9, 0],
												},
											]}
										/>
									</Card>
								</Grid.Col>
								<Grid.Col>
									<Card
										title='Data Air Beli YTD'
										subtitle={
											empty
												? `terlampir data Air Beli YTD pada tahun ${filter.tahun}`
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

export default GrafikAir;
