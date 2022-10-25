import { FC } from 'react';
import { Grid, Table, Button, Label } from 'components';
import { TableProps } from 'src/components/table';
import { capitalize } from 'function';

export type TitikProps = {
	tableProps?: TableProps;
	modalCreate?: any;
};

const MasterTitik: FC<TitikProps> = ({ modalCreate, tableProps }) => {
	return (
		<Grid>
			<Grid.Col>
				<Button icons='plus' type='primary' onClick={modalCreate}>
					Data Titik Produksi
				</Button>
			</Grid.Col>
			<Grid.Col>
				<Table
					data={tableProps?.data}
					pagination={tableProps?.pagination}
					rowKey={tableProps?.rowKey}
					columns={[
						{
							title: 'No.',
							dataIndex: 'id',
							width: 40,
							responsive: ['md'],
						},
						{
							title: 'Nama',
							dataIndex: 'nama',
							width: 150,
							responsive: ['md'],
						},
						{
							title: 'wilayah',
							dataIndex: 'wilayah',
							width: 150,
							responsive: ['md'],
						},
						{
							title: 'Keterangan',
							dataIndex: 'keterangan',
							responsive: ['md'],
						},
						{
							title: 'Status',
							dataIndex: 'status',
							key: 'status',
							width: 90,
							responsive: ['md'],
							render: (text: any, record: any) => {
								return (
									<Label type='table' color={record.status == 'aktif' ? '#06cd98' : '#fa5e5e'}>
										{capitalize(text)}
									</Label>
								);
							},
						},
						...tableProps?.columns,
					]}
				/>
			</Grid.Col>
		</Grid>
	);
};

export default MasterTitik;
