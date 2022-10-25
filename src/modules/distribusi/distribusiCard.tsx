import { useState, FC } from 'react';
import { Card, Grid, Tabset, message } from 'components';
import DistribusiFilter, { FilterProps } from './distribusiFilter';

export type distribusiProps = {
	children?: any;
	filter?: FilterProps;
};

const DistribusiCard: FC<distribusiProps> = ({ children, filter }) => {
	return (
		<Card>
			<Grid>
				<Grid.Col sm={24} md={24} lg={24} xl={24}>
					<DistribusiFilter
						onSubmit={filter?.onSubmit}
						label='tahun'
						value={filter?.value}
						defaultValue={filter?.defaultValue}
						onChange={filter?.onChange}
						selection={filter?.selection}
					/>
				</Grid.Col>
				<Grid.Col>
					{children}
					{/* <Tabset
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
										</Grid.Col>
									</Grid>
								),
							},
						]}
					/> */}
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default DistribusiCard;
