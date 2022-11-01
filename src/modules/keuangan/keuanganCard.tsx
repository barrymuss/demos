import React, { FC } from 'react';
import Filters, { FilterProps } from 'modules/filters';
import { Card, Grid } from 'components';

export type KeuanganCardProps = {
	children?: any;
	filter?: FilterProps;
};

const KeuanganCard: FC<KeuanganCardProps> = ({ children, filter }) => {
	return (
		<Card title='Dashboard Keuangan' subtitle='menampilkan data Keuangan (grafik & tabel)'>
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

export default KeuanganCard;
