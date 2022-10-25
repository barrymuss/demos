import { Card, TableAction, TableCol } from 'components';
import MasterPelanggan from 'modules/master/masterPelanggan';
import React from 'react';

interface DataType {
	id: number;
	nama: string;
	nomor_pelanggan: number;
}

const Pelanggan = () => {
	const mockData: DataType[] = [];
	for (let i = 1; i < 5; i++) {
		mockData.push({
			id: i,
			nama: `pelanggan ${i}`,
			nomor_pelanggan: Math.floor(Math.random() * 1000000000),
		});
	}
	return (
		<Card title='Data Pelanggan' subtitle='daftar data Pelanggan'>
			<MasterPelanggan
				tableProps={{
					data: mockData,
					rowKey: (record: any) => record.id,
					columns: [
						{
							title: 'Aksi',
							align: 'center',
							width: 90,
							responsive: ['md'],
							render: (record: any) => {
								return (
									<TableAction editChange={() => console.log(record.id)} deleteChange={() => console.log(record.id)} />
								);
							},
						},
						{
							title: 'Data Material',
							responsive: ['xs'],
							render: (record: any) => (
								<>
									<TableCol title='no.Pelanggan' ellipsis content={record.nomor_pelanggan} />
									<TableCol title='nama' content={record.nama} />

									<TableCol title='aksi'>
										<TableAction
											editChange={() => console.log(record.id)}
											deleteChange={() => console.log(record.id)}
										/>
									</TableCol>
								</>
							),
						},
					],
				}}
			/>
		</Card>
	);
};

export default Pelanggan;
