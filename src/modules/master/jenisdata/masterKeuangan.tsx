import React from 'react';
import { Grid, Table, Button, Tooltip } from 'components';
import { jenisDataCol } from './jenisDataCol';

const MasterKeuangan = () => {
	const mockData: any[] = [];
	for (let i = 1; i < 30; i++) {
		mockData.push({
			id: i,
			nama: `keuangan ${i}`,
			keterangan: 'Lorem ipsum dolor sit amet.',
			satuan: 'M',
			kelompok: 'rencana',
		});
	}

	return (
		<Grid>
			<Grid.Col>
				<Button icons='plus' type='primary'>
					Jenis Data
				</Button>
			</Grid.Col>
			<Grid.Col>
				<Table
					data={mockData}
					rowKey={(record: any) => record.id}
					columns={[
						...jenisDataCol,
						{
							title: 'Data Keuangan',
							responsive: ['xs'],
							render: (record: any) => (
								<>
									<Table.Col title='nama' content={record.nama} />
									<Table.Col title='satuan' content={record.satuan} />
									<Table.Col title='kelompok' content={record.kelompok} />
									<Table.Col title='keterangan' ellipsis content={record.keterangan} />
									<Table.Col title='aksi'>
										<Table.Action
											editChange={() => console.log(record.id)}
											deleteChange={() => console.log(record.id)}
										/>
									</Table.Col>
								</>
							),
						},
						{
							title: 'Aksi',
							align: 'center',
							width: 90,
							responsive: ['md'],
							render: (record: any) => {
								return (
									<Table.Action editChange={() => console.log(record.id)} deleteChange={() => console.log(record.id)} />
								);
							},
						},
					]}
				/>
			</Grid.Col>
		</Grid>
	);
};

export default MasterKeuangan;
