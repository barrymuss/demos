import React from 'react';
import { Grid, Table, Button, Tooltip } from 'components';
import { jenisDataCol } from './jenisDataCol';

const MasterDistribusi = () => {
	const mockData: any[] = [];
	for (let i = 1; i < 30; i++) {
		mockData.push({
			id: i,
			nama: `distribusi ${i}`,
			keterangan: 'Lorem ipsum dolor sit amet.',
			satuan: 'M',
			perhitungan: 'produksi',
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
							title: 'Data Distibusi',
							responsive: ['xs'],
							render: (record: any) => (
								<>
									<Table.Col title='nama' content={record.nama} />
									<Table.Col title='satuan' content={record.satuan} />
									<Table.Col title='kelompok' content={record.kelompok} />
									<Table.Col title='perhitungan' content={record.perhitungan} />
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
							title: 'Perhitungan',
							dataIndex: 'perhitungan',
							key: 'perhitungan',
							width: 150,
							responsive: ['md'],
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

export default MasterDistribusi;
