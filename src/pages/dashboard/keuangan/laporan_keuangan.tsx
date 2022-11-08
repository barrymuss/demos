import React, { useState } from 'react';
import { Grid, Card, Button, message, UploadDocument, Form } from 'components';
import { convertBase64 } from 'function';
import Filters from 'modules/filters';
import KeuanganTable from 'modules/keuangan/keuanganTable';
import { tableLaporan } from 'modules/keuangan/mockData';

const LaporanKeuangan = () => {
	const [filter, setFilter] = useState<any>({});
	const [formUpload, setFormUpload] = useState<any>({});
	const [overtimeDoc, setOvertimeDoc] = useState<any>({});

	const [openUpload, setOpenUpload] = useState(false);
	const [empty, setEmpty] = useState(false);

	const handleFilter = () => {
		if (filter.tahun == null) {
			message.notif({
				key: `notif_chart`,
				type: 'error',
				title: 'Filter',
				description: 'filter grafik belum lengkap!',
			});
		} else {
			console.log(filter);
			setEmpty(true);
		}
	};

	const handleEmptyButton = () => {
		setFilter({
			tahun: 2021,
		});

		setEmpty(true);
	};

	const uploadDoc = async (event: any) => {
		if (event.target.files[0] && event.target.files[0]) {
			const file = event.target.files[0];
			const base64 = await convertBase64(file);
			setOvertimeDoc(base64);
		}

		console.log(event);
	};

	const cancelUploadDoc = () => {
		setOvertimeDoc({});
	};

	return (
		<Card>
			<Grid>
				<Grid.Col>
					<Grid align='bottom' justify='space-between'>
						<Grid.Col sm={24} md={24} lg={12} xl={12}>
							<Filters
								label='tahun'
								value={filter.tahun}
								onChange={(value: any) => {
									setFilter({
										tahun: value,
									});
								}}
								onSubmit={handleFilter}
								selection={[
									{
										value: 2020,
										label: 2020,
									},
									{
										value: 2021,
										label: 2021,
									},
								]}
							/>
						</Grid.Col>
						<Grid.Col sm={24} md={24} lg={8} xl={6}>
							<Grid>
								<Grid.Col span={12}>
									<Button block icons='plus'>
										Target
									</Button>
								</Grid.Col>
								<Grid.Col span={12}>
									<Button
										block
										icons={!openUpload ? 'upload' : 'back'}
										danger={!openUpload ? false : true}
										onClick={() => setOpenUpload(!openUpload)}
									>
										{!openUpload ? 'Laporan' : 'Kembali'}
									</Button>
								</Grid.Col>
							</Grid>
						</Grid.Col>
					</Grid>
				</Grid.Col>

				<Grid.Col>
					{openUpload == false ? (
						<Card
							title='Laporan Keuangan PAMJAYA'
							subtitle={empty ? `terlampir data pada tahun ${filter.tahun}` : 'silahkan atur filter terlebih dahulu'}
							notpadding
							notshadow
						>
							<KeuanganTable data={empty && tableLaporan} datetime={filter.tahun} />
						</Card>
					) : (
						<Card title='Unggah Laporan' subtitle='silahkan pilih file laporan untuk di unggah' notpadding notshadow>
							{/* <Form>
								<Form.Item name='doc' label='unggah laporan'>
									<UploadDocument
										disabled
										height='100%'
										width='100%'
										center
										empty={{
											description: 'no file',
											imageStyle: {
												height: 60,
											},
										}}
										value={formUpload.filename}
										onCancel={cancelUploadDoc}
										onChange={(e: any) => uploadDoc(e)}
									/>
									<small>**belum siap</small>
								</Form.Item>
							</Form> */}
						</Card>
					)}
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default LaporanKeuangan;
