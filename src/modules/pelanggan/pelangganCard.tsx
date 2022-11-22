import React, { FC } from 'react';
import Filters, { FilterProps } from 'modules/filters';
import { Card, Grid } from 'components';

export type PelangganCardProps = {
	children?: any;
	filter?: FilterProps;
};

const PelangganCard: FC<PelangganCardProps> = ({ children, filter }) => {
	return (
		<Card title='Dashboard Pelanggan' subtitle='menampilkan data Pelanggan (grafik & tabel)'>
			<Grid>
				<Grid.Col sm={24} md={24} lg={12} span={16}>
					<Filters
						onSubmit={filter?.onSubmit}
						label='tahun'
						value={filter?.value}
						defaultValue={filter?.defaultValue}
						onChange={filter?.onChange}
						selection={filter?.selection}
					/>
				</Grid.Col>
				<Grid.Col>{children}</Grid.Col>
			</Grid>
		</Card>
	);
};

export default PelangganCard;
