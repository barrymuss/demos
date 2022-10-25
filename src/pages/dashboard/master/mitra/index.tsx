import React, { useState } from 'react';
import { Card, Button, TableCol, TableAction, Label } from 'components';
import MasterMitra from 'modules/master/masterMitra';

import { capitalize } from 'function';
import MasterCreate from 'modules/master/masterCreate';

const Mitra = () => {
	const statusRand = ['aktif', 'tidak'];
	const mockData: any[] = [];
	for (let i = 1; i < 5; i++) {
		mockData.push({
			id: i,
			nama: `Mitra ${i}`,
			status: statusRand[Math.floor(Math.random() * statusRand.length)],
			keterangan: `Lorem ipsum dolor sit amet. Mitra ${i}`,
		});
	}

	const [createModal, setCreateModal] = useState(false);
	const [createForm, setCreateForm] = useState<any>({});

	return (
		<Card title='Data Mitra' subtitle='daftar data mitra'>
			<MasterMitra
				modalCreate={() => setCreateModal(true)}
				tableProps={{
					data: mockData,
					rowKey: (record: any) => record.id,
					columns: [
						{
							title: 'Jenis Data',
							dataIndex: 'jenis',
							key: 'jenis',
							width: 100,
							responsive: ['md'],
							render: () => {
								return (
									<Button size='small' type='link' icons='infocircle'>
										Jenis data
									</Button>
								);
							},
						},
						{
							title: 'Titik Produksi',
							dataIndex: 'titik',
							key: 'titik',
							width: 100,
							responsive: ['md'],
							render: () => (
								<Button size='small' type='link' icons='target'>
									Titik produksi
								</Button>
							),
						},
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
							title: 'Data Mitra',
							responsive: ['xs'],
							render: (record: any) => (
								<>
									<TableCol title='nama' content={record.nama} />
									<TableCol
										title='status'
										content={
											<Label type='table' color={record.status == 'aktif' ? '#06cd98' : '#fa5e5e'}>
												{capitalize(record.status)}
											</Label>
										}
									/>
									<TableCol title='keterangan' ellipsis content={record.keterangan} />
									<TableCol title='opsi' ellipsis type='action'>
										<Button size='small' type='link' icons='infocircle'>
											Jenis data
										</Button>
										<Button size='small' type='link' icons='target'>
											Titik produksi
										</Button>
									</TableCol>
									<TableCol type='action' ellipsis title='aksi'>
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

			{createModal && (
				<MasterCreate
					modalprops={{
						visible: createModal,
						header: {
							title: 'Tambah Data',
							subtitle: `Form tambah data mitra`,
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

export default Mitra;
