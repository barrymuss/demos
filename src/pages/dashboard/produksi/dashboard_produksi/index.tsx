import { useState } from 'react';
import { Card, Grid, Tabset, message } from 'components';
import ProduksiFilter from 'modules/produksi/produksiFilter';
import ProduksiGrafik from 'modules/produksi/produksiGrafik';
import ProduksiTable from 'modules/produksi/produksiTable';
import { mockProduksi } from 'modules/produksi/mockTable';

interface Filtered {
	tahun: number;
	material: string;
}

const DashboardProduksi = () => {
	const [filter, setFilter] = useState<any>({});
	const [empty, setEmpty] = useState(false);

	const handleFilter = () => {
		if (filter.tahun == null || filter.material == null) {
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
			material: 'Air Bersih (Clean Water)',
		});

		setEmpty(true);
	};

	return (
		<Card>
			<Grid>
				<Grid.Col sm={24} md={12} lg={16} xl={12}>
					<ProduksiFilter
						onSubmit={handleFilter}
						tahun={{
							label: 'tahun',
							value: filter.tahun,
							onChange: (value: any) => {
								setFilter({
									tahun: value,
								});
							},
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
						material={{
							label: 'material',
							value: filter.material,
							onChange: (value: any) => {
								setFilter({
									...filter,
									material: value,
								});
							},
							selection: [
								{
									value: 'Air Bersih (Clean Water)',
									label: 'Air Bersih (Clean Water)',
								},
								{
									value: 'Air Baku (Raw Water)',
									label: 'Air Baku (Raw Water)',
								},
							],
						}}
					/>
				</Grid.Col>
				<Grid.Col>
					<Tabset
						type='line'
						panel={[
							{
								title: 'Grafik Produksi',
								disabled: !empty,
								content: (
									<Grid>
										<Grid.Col>
											<Card
												title={'Grafik Produksi'}
												subtitle={
													empty
														? `terlampir data ${filter.material} pada tahun ${filter.tahun}`
														: 'silahkan atur filter terlebih dahulu'
												}
												notshadow
												notpadding
											>
												<ProduksiGrafik
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
												title='Data Mitra Produksi'
												subtitle={
													empty
														? `terlampir data mitra produksi ${filter.material} pada tahun ${filter.tahun}`
														: 'silahkan atur filter terlebih dahulu'
												}
												notshadow
												notpadding
											>
												<ProduksiTable data={empty && mockProduksi} />
											</Card>
										</Grid.Col>
									</Grid>
								),
							},
							{
								title: 'Grafik Produksi YTD',
								disabled: !empty,
								content: (
									<Grid>
										<Grid.Col>
											<Card
												title={empty && 'Grafik Produksi YTD'}
												subtitle={empty && `terlampir data ${filter.material} pada tahun ${filter.tahun}`}
												notshadow
												notpadding
											>
												<ProduksiGrafik
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
												title='Data Mitra Produksi YTD'
												subtitle={
													empty
														? `terlampir data mitra produksi ${filter.material} pada tahun ${filter.tahun}`
														: 'silahkan atur filter terlebih dahulu'
												}
												notshadow
												notpadding
											>
												<ProduksiTable data={empty && mockProduksi} />
											</Card>
										</Grid.Col>
									</Grid>
								),
							},
						]}
					/>
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default DashboardProduksi;
