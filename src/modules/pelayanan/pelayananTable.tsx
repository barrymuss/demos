import { FC } from 'react';
import { Empty, Table } from 'components';
import { TableProps } from 'src/components/table';
import { capitalize } from 'function';

type ProdTableProps = {
	empty?: any;
	datetime?: any;
};

const PelayananTable: FC<TableProps & ProdTableProps> = ({
	data,
	columns,
	pagination,
	expandable,
	rowKey,
	rowSelection,
	empty,
	datetime,
}) => {
	return (
		<Table
			data={data}
			pagination={pagination}
			rowKey={(record: any) => record.mitra_id}
			columns={[
				{
					title: 'Data Pelanggan',
					responsive: ['xs'],
					render: (record: any) => (
						<>
							<Table.Col title='nama' content={record.mitra} />
						</>
					),
				},
				{
					title: 'Data Pelanggan',
					align: 'center',
					dataIndex: 'mitra',
					render: (text: any) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
					responsive: ['md'],
				},
			]}
			expandable={{
				rowExpandable: (record: any) => record.mitra !== 'Not Expandable',
				expandedRowRender: (record: any) => (
					<Table
						data={record.result}
						rowKey={(record: any) => record.name}
						pagination={false}
						columns={[
							{
								title: 'Data Mitra',
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
									return <>{record[0]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Feb',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[1]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Mar',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[2]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Apr',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[3]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Mei',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[4]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Jun',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[5]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Jul',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[6]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Agu',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[7]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Sep',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[8]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Okt',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[9]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Nov',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[10]}</>;
								},
								responsive: ['md'],
							},
							{
								title: 'Des',
								dataIndex: 'data',
								align: 'center',
								render: (record: any) => {
									return <>{record[11]}</>;
								},
								responsive: ['md'],
							},
						]}
					/>
				),
			}}
			rowSelection={rowSelection}
		/>
	);
};

export default PelayananTable;
