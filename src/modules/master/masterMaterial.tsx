import React, { FC, useState } from 'react';
import { Grid, Table, Button } from 'components';
import { TableProps } from 'src/components/table';

export type MaterialProps = {
	tableProps?: TableProps;
	modalCreate?: any;
};

const MasterMaterial: FC<MaterialProps> = ({ tableProps, modalCreate }) => {
	return (
		<Grid>
			<Grid.Col>
				<Button icons='plus' type='primary' onClick={modalCreate}>
					Data Material
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
							title: 'Keterangan',
							dataIndex: 'keterangan',
							responsive: ['md'],
						},
						...tableProps?.columns,
					]}
				/>
			</Grid.Col>
		</Grid>
	);
};

export default MasterMaterial;
