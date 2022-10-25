import { FC } from 'react';
import { Grid, Table, Button, Label } from 'components';
import { TableProps } from 'src/components/table';

export type PelangganProps = {
	tableProps?: TableProps;
	modalCreate?: any;
};

const MasterPelanggan: FC<PelangganProps> = ({ tableProps }) => {
	return (
		<Grid>
			<Grid.Col>
				<Table
					data={tableProps?.data}
					pagination={tableProps?.pagination}
					rowKey={tableProps?.rowKey}
					columns={[
						{
							title: 'No. Pelanggan',
							dataIndex: 'nomor_pelanggan',
							key: 'nomor_pelanggan',
							width: 150,
							responsive: ['md'],
						},
						{
							title: 'Nama',
							dataIndex: 'nama',
							key: 'nama',

							responsive: ['md'],
						},
						...tableProps?.columns,
					]}
				/>
			</Grid.Col>
		</Grid>
	);
};

export default MasterPelanggan;
