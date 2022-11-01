import { Card, Grid } from 'components';
import Filters, { FilterProps } from 'modules/filters';
import { FC } from 'react';

export type TekananProps = {
	children?: any;
	filter?: FilterProps;
};

const TekananCard: FC<TekananProps> = ({ children, filter }) => {
	return (
		<Card title='Dashboard Tekanan' subtitle='menampilkan data tekanan (grafik & tabel)'>
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
				{children}
				{/* <Grid.Col></Grid.Col> */}
			</Grid>
		</Card>
	);
};

export default TekananCard;
