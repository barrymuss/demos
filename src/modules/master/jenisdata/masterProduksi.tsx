import React, { useState } from 'react';
import { Grid, Table, Button, Tooltip } from 'components';

import MasterCreate from '../masterCreate';
import { jenisDataCol } from './jenisDataCol';

const MasterProduksi = () => {
	const mockData: any[] = [];
	for (let i = 1; i < 30; i++) {
		mockData.push({
			id: i,
			nama: `produksi ${i}`,
			keterangan: 'Lorem ipsum dolor sit amet.',
			satuan: 'M',
			kelompok: 'rencana',
		});
	}

	const [createModal, setCreateModal] = useState(false);
	const [createForm, setCreateForm] = useState({
		name: '',
		keterangan: '',
		kelompok: '',
		satuan: '',
		perhitungan: '',
	});

	const handleCreate = () => {
		console.log({ ...createForm });
	};

	return (
		<Grid>
			<Grid.Col>
				<Button icons='plus' type='primary' onClick={() => setCreateModal(true)}>
					Jenis Data
				</Button>
			</Grid.Col>
			<Grid.Col>
				<Table
					data={mockData}
					rowKey={(record: any) => {
						return record.id;
					}}
					columns={[
						...jenisDataCol,
						{
							title: 'daftar produksi',
							responsive: ['xs'],
							render: (record: any) => {
								return (
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
								);
							},
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

			<MasterCreate
				modalprops={{
					visible: createModal,
					header: {
						title: 'Tambah Data',
						subtitle: `Form tambah jenis data`,
					},
					onCancel: () => setCreateModal(false),
					onSubmit: handleCreate,
				}}
				formprops={{
					forms: [
						{
							type: 'input',
							name: 'name',
							label: 'Nama',
							value: createForm.name,
							onChange: (e: { target: { value: any } }) => {
								setCreateForm({
									...createForm,
									name: e.target.value,
								});
							},
						},
						{
							type: 'input',
							name: 'satuan',
							label: 'Satuan',
							value: createForm.satuan,
							onChange: (e: { target: { value: any } }) => {
								setCreateForm({
									...createForm,
									satuan: e.target.value,
								});
							},
						},
						{
							type: 'select',
							name: 'kelompok',
							label: 'kelompok',
							value: createForm.kelompok,
							onChange: (value: any) => {
								setCreateForm({
									...createForm,
									kelompok: value,
								});
							},
							selection: [
								{
									value: 'rencana',
									label: 'rencana',
								},
								{
									value: 'realisasi',
									label: 'realisasi',
								},
							],
						},
						{
							type: 'select',
							name: 'perhitungan',
							label: 'perhitungan',
							value: createForm.perhitungan,
							onChange: (value: any) => {
								setCreateForm({
									...createForm,
									perhitungan: value,
								});
							},
							selection: [
								{
									value: 'not',
									label: 'tidak dihitung',
								},
								{
									value: 'produksi',
									label: 'produksi',
								},
								{
									value: 'penjualan',
									label: 'penjualan',
								},
							],
						},
						{
							type: 'area',
							name: 'keterangan',
							label: 'Keterangan',
							value: createForm.keterangan,
							onChange: (e: { target: { value: any } }) => {
								setCreateForm({
									...createForm,
									keterangan: e.target.value,
								});
							},
						},
					],
				}}
			/>
		</Grid>
	);
};

export default MasterProduksi;
