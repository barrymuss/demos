import React, { useState } from 'react';
import { Grid, Card, Button, message } from 'components';
import Filters from 'modules/filters';

const LaporanKeuangan = () => {
	const [filter, setFilter] = useState<any>({});
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
						<Grid.Col sm={24} md={24} lg={8} xl={4}>
							<Grid>
								<Grid.Col span={12}>
									<Button block icons='plus'>
										Target
									</Button>
								</Grid.Col>
								<Grid.Col span={12}>
									<Button block icons='upload'>
										Laporan
									</Button>
								</Grid.Col>
							</Grid>
						</Grid.Col>
					</Grid>
				</Grid.Col>

				<Grid.Col>
					<Card
						title='Laporan Keuangan PAMJAYA'
						subtitle={empty ? `terlampir data pada tahun ${filter.tahun}` : 'silahkan atur filter terlebih dahulu'}
						notpadding
						notshadow
					></Card>
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default LaporanKeuangan;
