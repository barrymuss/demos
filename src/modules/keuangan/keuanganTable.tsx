import { FC } from 'react';
import { Empty, Table } from 'components';
import { TableProps } from 'src/components/table';
import { capitalize } from 'function';

type ProdTableProps = {
	empty?: any;
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
	type = 'milion',
}) => {
	return (
		<Table
			data={data}
			rowKey={(record: any) => record.name}
			pagination={pagination}
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
						return <>{capitalize(text)}</>;
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
				// {
				// 	title: 'Total',
				// 	dataIndex: 'data',
				// 	align: 'center',
				// 	render: (record: any) => {
				// 		const total = record.reduce((a: any, v: any) => (a = a + v), 0);
				// 		return <>{total}</>;
				// 	},
				// 	responsive: ['md'],
				// },
			]}
		/>
	);
};

export default KeuanganTable;
