import { useState, FC } from 'react';
import { Card, Grid, Tabset, message } from 'components';
import DistribusiFilter, { FilterProps } from './distribusiFilter';

export type distribusiProps = {
	children?: any;
	filter?: FilterProps;
};

const DistribusiCard: FC<distribusiProps> = ({ children, filter }) => {
	return (
		<Card title='Dashboard Distribusi' subtitle='menampilkan data distribusi (grafik & tabel)'>
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
				<Grid.Col>{children}</Grid.Col>
			</Grid>
		</Card>
	);
};

export default DistribusiCard;
