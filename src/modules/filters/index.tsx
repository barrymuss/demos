import { FC } from 'react';
import { Form, Grid, Button, Select } from 'components';

export type FilterProps = {
	onSubmit?: any;
	name?: any;
	label?: any;
	selection?: any;
	defaultValue?: any;
	value?: any;
	onChange?: any;
};

const Filters: FC<FilterProps> = ({ label, name, onSubmit, selection, defaultValue, value, onChange }) => {
	return (
		<Grid>
			<Grid.Col sm={20} md={20} lg={12} span={16}>
				<Form>
					<Form.Item name={name} label={label}>
						<Select
							placeholder={label}
							options={selection}
							defaultValue={defaultValue}
							value={value}
							onChange={onChange}
						/>
					</Form.Item>
				</Form>
			</Grid.Col>

			<Grid.Col span={4}>
				<Form.Item>
					<Button type='primary' icons='filter' onClick={onSubmit} />
				</Form.Item>
			</Grid.Col>
		</Grid>
	);
};

export default Filters;
