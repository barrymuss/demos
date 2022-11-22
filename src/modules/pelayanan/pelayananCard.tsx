import React, { FC } from 'react';
import Filters, { FilterProps } from 'modules/filters';
import { Card, Grid } from 'components';

export type PelayananCardProps = {
	children?: any;
	filter?: FilterProps;
};

const PelayananCard: FC<PelayananCardProps> = ({ children, filter }) => {
	return (
		<Card title='Dashboard Pelayanan' subtitle='menampilkan data Pelayanan (grafik & tabel)'>
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

export default PelayananCard;
