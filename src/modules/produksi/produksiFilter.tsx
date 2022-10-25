import { FC } from 'react';
import { Button, Form, Grid, Select } from 'components';

type FilterProps = {
	tahun?: any;
	material?: any;
	onSubmit?: any;
};

const ProduksiFilter: FC<FilterProps> = ({ tahun, material, onSubmit }) => {
	return (
		<Form>
			<Grid>
				<Grid.Col span={10}>
					<Form.Item name={tahun.name} label={tahun.label}>
						<Select
							placeholder={tahun.label}
							options={tahun.selection}
							defaultValue={tahun.defaultValue}
							value={tahun.value}
							onChange={tahun.onChange}
						/>
					</Form.Item>
				</Grid.Col>
				<Grid.Col span={10}>
					<Form.Item name={material.name} label={material.label}>
						<Select
							placeholder={material.label}
							options={material.selection}
							defaultValue={material.defaultValue}
							value={material.value}
							onChange={material.onChange}
						/>
					</Form.Item>
				</Grid.Col>
				<Grid.Col span={4}>
					<Form.Item>
						<Button type='primary' icons='filter' onClick={onSubmit} />
					</Form.Item>
				</Grid.Col>
			</Grid>
		</Form>
	);
};

export default ProduksiFilter;
