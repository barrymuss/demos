import { Card, TableAction, TableCol } from 'components';
import MasterCreate from 'modules/master/masterCreate';
import MasterTitik from 'modules/master/masterTitik';
import React, { useState } from 'react';

interface DataType {
	id: number;
	nama: string;
	wilayah: string;
	status: string;
	keterangan: string;
}

const TitikProd = () => {
	const statusRand = ['aktif', 'tidak'];
	const wilayahRand = ['jakarta pusat', 'jakarta selatan', 'jakarta barat', 'jakarta timur', 'Kep. seribu'];
	const mockData: DataType[] = [];
	for (let i = 1; i < 5; i++) {
		mockData.push({
			id: i,
			nama: `titik produksi ${i}`,
			keterangan: 'lorem ipsum',
			wilayah: wilayahRand[Math.floor(Math.random() * statusRand.length)],
			status: statusRand[Math.floor(Math.random() * statusRand.length)],
		});
	}

	const [createModal, setCreateModal] = useState(false);
	const [createForm, setCreateForm] = useState<any>({});

	return (
		<Card title='Data Titik Produksi' subtitle='daftar data titik produksi'>
			<MasterTitik
				modalCreate={() => setCreateModal(true)}
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
								return <TableAction editChange={() => console.log(record.id)} />;
							},
						},
						{
							title: 'Data Material',
							responsive: ['xs'],
							render: (record: any) => (
								<>
									<TableCol title='no' ellipsis content={record.id} />
									<TableCol title='nama' content={record.nama} />

									<TableCol title='aksi'>
										<TableAction editChange={() => console.log(record.id)} />
									</TableCol>
								</>
							),
						},
					],
				}}
			/>

			{createModal && (
				<MasterCreate
					modalprops={{
						visible: createModal,
						header: {
							title: 'Tambah Data',
							subtitle: `Form tambah data titik produksi`,
						},
						onCancel: () => setCreateModal(false),
						onSubmit: () => setCreateModal(false),
					}}
					formprops={{
						forms: [
							{
								type: 'input',
								name: 'name',
								label: 'Nama',
								value: createForm.nama,
								onChange: (e: any) => {
									setCreateForm({
										...createForm,
										nama: e.target.value,
									});
								},
							},
							{
								type: 'input',
								name: 'wilayah',
								label: 'wilayah',
								value: createForm.wilayah,
								onChange: (e: any) => {
									setCreateForm({
										...createForm,
										wilayah: e.target.value,
									});
								},
							},
							{
								type: 'select',
								name: 'status',
								label: 'status',
								value: createForm.status,
								onChange: (value: any) => {
									setCreateForm({
										...createForm,
										status: value,
									});
								},
								selection: [
									{
										value: 'aktif',
										label: 'aktif',
									},
									{
										value: 'tidak',
										label: 'tidak',
									},
								],
							},
							{
								type: 'area',
								name: 'keterangan',
								label: 'Keterangan',
								value: createForm.keterangan,
								onChange: (e: any) => {
									setCreateForm({
										...createForm,
										keterangan: e.target.value,
									});
								},
							},
						],
					}}
				/>
			)}
		</Card>
	);
};

export default TitikProd;
