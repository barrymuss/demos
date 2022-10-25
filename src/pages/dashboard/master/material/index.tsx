import React, { useState } from 'react';
import MasterMaterial from 'modules/master/masterMaterial';
import MasterCreate from 'modules/master/masterCreate';
import { Card, message, TableAction, TableCol } from 'components';

import { trpc } from 'utils/trpc';

interface DataType {
	id: number;
	nama: string;
	keterangan: string;
}

const Material = () => {
	const [tableData, settableData] = useState<DataType[]>([
		{
			id: 1,
			nama: `CW`,
			keterangan: 'Air Bersih (Clean Water)',
		},
		{
			id: 2,
			nama: `RW`,
			keterangan: 'Air Baku (Raw Water)',
		},
	]);

	const [createModal, setCreateModal] = useState(false);
	const [createForm, setCreateForm] = useState<any>({
		nama: '',
		keterangan: '',
	});

	const clearForm = () => {
		setCreateForm({ ...createForm });
	};

	const dataMaterial = trpc.dataMaterial.useQuery({ data: tableData });

	const createMaterial = trpc.createMaterial.useMutation({
		onSuccess: (data) => {
			console.log(data);
		},
	});

	const handleCreateMaterial = () => {
		if (createForm.nama == null || createForm.keterangan == null) {
			message.notif({
				type: 'error',
				title: 'ooops!',
				description: 'form tidak boleh kosong!',
			});
		} else {
			createMaterial.mutate({
				nama: createForm.nama,
				keterangan: createForm.keterangan,
			});

			let len = tableData.length + 1;

			const newdata = {
				id: len,
				nama: createForm.nama,
				keterangan: createForm.keterangan,
			};

			settableData([...tableData, newdata]);
			clearForm();
			setCreateModal(false);
		}
	};

	return (
		<Card title='Data Material' subtitle='halaman untuk aktivasi tambah, hapus & pembaruan data material'>
			<MasterMaterial
				modalCreate={() => setCreateModal(true)}
				tableProps={{
					data: dataMaterial.data?.result,
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
									<TableCol title='nama' content={record.nama} />
									<TableCol title='satuan' content={record.satuan} />
									<TableCol title='kelompok' content={record.kelompok} />
									<TableCol title='perhitungan' content={record.perhitungan} />
									<TableCol title='keterangan' ellipsis content={record.keterangan} />
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

			{createModal && (
				<MasterCreate
					modalprops={{
						visible: createModal,
						header: {
							title: 'Tambah Data',
							subtitle: `Form tambah data material`,
						},
						onCancel: () => setCreateModal(false),
						onSubmit: handleCreateMaterial,
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

export default Material;
