import { useState, useEffect, FC } from 'react';
import { Table as Tables } from 'antd';
import Button from '../button';
import Tooltip from '../tooltip';

import styles from './tableCol.module.scss';

import { breakPointOberver } from 'function';

type ExtendFC = FC<TableProps> & { [key: string]: any };

export type TableProps = {
	data?: any;
	pagination?: any;
	columns?: any;
	rowKey?: any;
	rowSelection?: any;
	expandable?: any;
	loading?: any;
	footer?: any;
	style?: any;
};

export type ColProps = {
	bold?: any;
	title?: any;
	children?: any;
	content?: any;
	type?: any;
	ellipsis?: any;
	img?: any;
	className?: any;
};

const breakPoints = {
	tablet: '(min-width: 300px) and (max-width: 1023px)',
	desktop: '(min-width: 1024px)',
};

export const Table: ExtendFC = (props) => {
	const [breakPoint, isBreakPoint] = useState();

	useEffect(() => {
		breakPointOberver(breakPoints, isBreakPoint);
	}, [breakPoint]);

	return (
		<Tables
			size='small'
			style={props.style}
			dataSource={props.data}
			pagination={props.pagination}
			columns={props.columns}
			expandable={props.expandable}
			rowKey={props.rowKey}
			rowSelection={props.rowSelection}
			loading={props.loading}
			footer={props.footer}
			// scroll={{ y: breakPoint == 'tablet' ? '65vh' : '50vh' }}
		/>
	);
};

export const TableCol: FC<ColProps> = (props) => {
	const [breakPoint, isBreakPoint] = useState();

	useEffect(() => {
		breakPointOberver(breakPoints, isBreakPoint);
	}, [breakPoint]);

	return (
		<div className={props.ellipsis ? styles['col-ellipsis'] : styles['col-default']}>
			<div
				style={{
					textTransform: 'capitalize',
					fontWeight: props.bold == true ? '600' : '500',
				}}
			>
				{props.title != null && props.title + ':'}
			</div>
			{props.type == null && (
				<div className={props.ellipsis == true ? `${styles['text-ellipsis']}` : ''}>{props.content}</div>
			)}

			{props.type == 'expand' && (
				<div
					// className={styles[`action-col${breakPoint == 'tablet' ? styles['-break'] : ''}`]}
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						alignItems: 'center',
						minWidth: '100%',
						maxWidth: breakPoint == 'tablet' ? '100%' : '100%',
					}}
				>
					<div style={{ width: '100%' }}>{props.children}</div>
				</div>
			)}

			{props.type == 'action' && (
				<div
					// className={styles[`action-col${breakPoint == 'tablet' ? styles['-break'] : ''}`]}
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						minWidth: '100%',
						maxWidth: breakPoint == 'tablet' ? '100%' : '100%',
					}}
				>
					{props.children}
				</div>
			)}
		</div>
	);
};

type ActionColProps = {
	editChange?: any;
	deleteChange?: any;
	children?: any;
};

export const TableAction: FC<ActionColProps> = ({ editChange, deleteChange, children }) => {
	return (
		<Table.Col type='action'>
			{children}
			<Button size='small' icons='edit' onClick={editChange} />

			{deleteChange != null && (
				<Tooltip.Confirm
					placement='left'
					title='yakin untuk hapus data ini?'
					onConfirm={deleteChange}
					onCancel={() => console.log('cancel')}
					okText='Yes'
					cancelText='No'
				>
					<Button size='small' icons='delete' danger='true' />
				</Tooltip.Confirm>
			)}
		</Table.Col>
	);
};

Table.Col = TableCol;
Table.Action = TableAction;

export default Table;
