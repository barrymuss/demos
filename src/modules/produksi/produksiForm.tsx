import { FC } from 'react';
import { Form, Grid, Select, Input } from 'components';

type FormitemProps = {
	type?: 'selection' | 'input';
	name?: any;
	label?: any;
	defaultValue?: any;
	value?: any;
	selection?: any;
	onChange?: any;
};

const FormItem: FC<FormitemProps> = ({ name, label, type, value, defaultValue, selection, onChange }) => {
	return (
		<Form.Item name={name} label={label}>
			{type == 'input' ? (
				<Input placeholder={label} defaultValue={defaultValue} value={value} onChange={onChange} />
			) : (
				<Select placeholder={label} value={value} options={selection} onChange={onChange} />
			)}
		</Form.Item>
	);
};

type ProdFormProps = {
	forms?: any;
};

const ProduksiForm: FC<ProdFormProps> = ({ forms }) => {
	return (
		<Form>
			<Grid>
				<Grid.Col sm={24} md={24} lg={6} xl={4}>
					<Grid>
						{forms.selection.map((sel: any) => (
							<Grid.Col sm={12} md={12} lg={24} xl={24} key={sel.name}>
								<FormItem
									type='selection'
									name={sel.name}
									label={sel.label}
									value={sel.value}
									selection={sel.selection}
									onChange={sel.onChange}
								/>
							</Grid.Col>
						))}
					</Grid>
				</Grid.Col>

				<Grid.Col sm={24} md={24} lg={18} xl={20}>
					<Grid>
						{forms.input.map((sel: any, idx: any) => (
							<Grid.Col span={idx == 0 ? 24 : 4} key={sel.name}>
								<FormItem type='input' name={sel.name} label={sel.label} value={sel.value} onChange={sel.onChange} />
							</Grid.Col>
						))}
					</Grid>
				</Grid.Col>
			</Grid>
		</Form>
	);
};

export default ProduksiForm;
