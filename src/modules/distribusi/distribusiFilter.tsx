import { FC } from 'react';
import { Button, Form, Grid, Select } from 'components';

import DistribusiButton from './distribusiButton';
import { useRouter } from 'next/router';

export type FilterProps = {
	onSubmit?: any;
	name?: any;
	label?: any;
	selection?: any;
	defaultValue?: any;
	value?: any;
	onChange?: any;
};

const DistribusiFilter: FC<FilterProps> = ({ name, label, value, defaultValue, selection, onChange, onSubmit }) => {
	const buttonRouter = useRouter();

	const handleRouter = (route: any) => {
		buttonRouter.push(`/dashboard/distribusi/input/${route}`);
	};

	return (
		<Grid align='bottom' justify='space-between'>
			<Grid.Col sm={24} md={24} lg={12} span={16}>
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
			</Grid.Col>
			<Grid.Col sm={24} md={24} lg={12} xl={8}>
				<DistribusiButton
					target={() => console.log('input_NRW')}
					water={() => console.log('input_air')}
					volume={() => console.log('input_volume')}
				/>
			</Grid.Col>
		</Grid>
	);
};

export default DistribusiFilter;
