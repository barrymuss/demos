import React, { FC } from 'react';
import { Form, Grid, Input, Modal, Select } from 'components';

import { Modalprops } from 'src/components/modal';

export type MasterCreateProps = {
	forms?: any;
};

export const FormCreate: FC<MasterCreateProps> = ({ forms }) => {
	return (
		<Form>
			<Grid>
				{forms.map((item: any) => {
					return (
						<Grid.Col span={24} key={item.name}>
							{item.type == 'input' && (
								<Form.Item name={item.name} label={item.label}>
									<Input
										placeholder={item.label}
										defaultValue={item.defaultValue}
										value={item.value}
										onChange={item.onChange}
									/>
								</Form.Item>
							)}

							{item.type == 'area' && (
								<Form.Item name={item.name} label={item.label}>
									<Input
										type='textarea'
										placeholder={item.label}
										defaultValue={item.defaultValue}
										value={item.value}
										onChange={item.onChange}
									/>
								</Form.Item>
							)}

							{item.type == 'select' && (
								<Form.Item name={item.name} label={item.label} key={item.name}>
									<Select
										placeholder={item.label}
										options={item.selection}
										defaultValue={item.defaultValue}
										value={item.value}
										onChange={item.onChange}
									/>
								</Form.Item>
							)}
						</Grid.Col>
					);
				})}
			</Grid>
		</Form>
	);
};

export type CreateProps = {
	modalprops?: Modalprops;
	formprops?: MasterCreateProps;
};

const MasterCreate: FC<CreateProps> = ({ modalprops, formprops }) => {
	return (
		<Modal {...modalprops}>
			<FormCreate {...formprops} />
		</Modal>
	);
};

export default MasterCreate;
