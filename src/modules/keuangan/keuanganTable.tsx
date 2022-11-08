import { FC } from 'react';
import { Empty, Table } from 'components';
import { TableProps } from 'src/components/table';
import { capitalize } from 'function';

type ProdTableProps = {
	empty?: any;
	datetime?: any;
	type?: 'milion' | 'percent';
};

const KeuanganTable: FC<TableProps & ProdTableProps> = ({
	data,
	columns,
	pagination,
	expandable,
	rowKey,
	rowSelection,
	empty,
	datetime,
	type = 'milion',
}) => {
	return (
		<Table
			data={data}
			pagination={false}
			rowKey={(record: any) => record.cat_id}
			columns={[
				{
					title: 'Data Keuangan',
					responsive: ['xs'],
					render: (record: any) => (
						<>
							<Table.Col title='Parameter' content={record.category} />
						</>
					),
				},
				{
					title: 'Parameter',
					dataIndex: 'category',
					render: (text: any) => text,
					onCell: () => ({
						colSpan: 1,
					}),
					responsive: ['md'],
				},
				{
					title: 'Deskripsi',
					dataIndex: 'description',
					render: (text: any, record: any) => `Laporan Keuangan ${record.category} tahun ${datetime}`,
					responsive: ['md'],
				},
			]}
			rowSelection={rowSelection}
			expandable={{
				rowExpandable: (record: any) => record.category !== 'Not Expandable',
				defaultExpandAllRows: true,
				expandedRowRender: (record: any) => (
					<Table
						data={record.result}
						rowKey={(record: any) => record.name}
						pagination={false}
						columns={[
							{
								title: 'Data Keuangan',
								responsive: ['xs'],
								render: (record: any) => (
									<>
										<Table.Col title={record.name} ellipsis type='expand'>
											<Table.Col title='Jan' content={record.data[0]} />
											<Table.Col title='Feb' content={record.data[1]} />
											<Table.Col title='Mar' content={record.data[2]} />
											<Table.Col title='Apr' content={record.data[3]} />
											<Table.Col title='Mei' content={record.data[4]} />
											<Table.Col title='Jun' content={record.data[5]} />
											<Table.Col title='Jul' content={record.data[6]} />
											<Table.Col title='Agu' content={record.data[7]} />
											<Table.Col title='Sep' content={record.data[8]} />
											<Table.Col title='Okt' content={record.data[9]} />
											<Table.Col title='Nov' content={record.data[10]} />
											<Table.Col title='Des' content={record.data[11]} />
										</Table.Col>
									</>
								),
							},
							{
								title: 'Nama',
								dataIndex: 'name',
								width: 100,
								render: (text: any) => {
									return <>{capitalize(text)}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Januari',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[0]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'Februari',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[1]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'Maret',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[2]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'April',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[3]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'Mei',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[4]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'Juni',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[5]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'Juli',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[6]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'Agustus',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[7]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'September',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[8]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'Oktober',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[9]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'Nopember',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[10]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							{
								title: 'Desember',
								dataIndex: 'data',
								width: 100,
								align: 'center',
								render: (record: any) => {
									return (
										<>
											{record[11]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
										</>
									);
								},
								responsive: ['md'],
							},
							// {
							// 	title: 'Total',
							// 	dataIndex: 'data',
							// 	width: 100,
							// 	align: 'center',
							// 	render: (record: any) => {
							// 		const total = record.reduce((a: any, v: any) => (a = a + v), 0);
							// 		return (
							// 			<>
							// 				{total} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							// 			</>
							// 		);
							// 	},
							// 	responsive: ['md'],
							// },
						]}
					/>
				),
			}}
		/>
	);
};

export const PanelTable: FC<TableProps & ProdTableProps> = ({
	data,
	columns,
	pagination,
	expandable,
	rowKey,
	rowSelection,
	empty,
	datetime,
	type = 'milion',
}) => {
	return (
		<Table
			data={data}
			pagination={false}
			rowKey={(record: any) => record.cat_id}
			columns={[
				{
					title: 'Data Keuangan',
					responsive: ['xs'],
					render: (record: any) => (
						<>
							<Table.Col title={record.name} ellipsis type='expand'>
								<Table.Col title='Jan' content={record.data[0]} />
								<Table.Col title='Feb' content={record.data[1]} />
								<Table.Col title='Mar' content={record.data[2]} />
								<Table.Col title='Apr' content={record.data[3]} />
								<Table.Col title='Mei' content={record.data[4]} />
								<Table.Col title='Jun' content={record.data[5]} />
								<Table.Col title='Jul' content={record.data[6]} />
								<Table.Col title='Agu' content={record.data[7]} />
								<Table.Col title='Sep' content={record.data[8]} />
								<Table.Col title='Okt' content={record.data[9]} />
								<Table.Col title='Nov' content={record.data[10]} />
								<Table.Col title='Des' content={record.data[11]} />
							</Table.Col>
						</>
					),
				},

				{
					title: 'Jenis Data',
					dataIndex: 'name',
					render: (text: any) => {
						return <>{text}</>;
					},
					responsive: ['md'],
				},
				{
					title: 'Jan',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[0]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Feb',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[1]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Mar',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[2]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Apr',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[3]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Mei',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[4]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Jun',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[5]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Jul',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[6]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Agu',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[7]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Sep',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[8]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Okt',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[9]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Nov',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[10]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Des',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						return (
							<>
								{record[11]} {type == 'milion' ? 'M' : type == 'percent' ? '%' : ''}
							</>
						);
					},
					responsive: ['md'],
				},
				{
					title: 'Total',
					dataIndex: 'data',
					align: 'center',
					render: (record: any) => {
						const total = record.reduce((a: any, v: any) => (a = a + v), 0);
						return <>{total}</>;
					},
					responsive: ['md'],
				},
			]}
		/>
	);
};

export default KeuanganTable;
