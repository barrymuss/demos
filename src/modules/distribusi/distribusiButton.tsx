import { FC } from 'react';

import { Button, Grid } from 'components';

export type ButtonGroupProps = {
	target?: any;
	water?: any;
	volume?: any;
};

const DistribusiButton: FC<ButtonGroupProps> = ({ target, water, volume }) => {
	return (
		<Grid>
			<Grid.Col sm={12} md={8} lg={8} xl={8}>
				<Button type='dashed' block onClick={target}>
					Target NRW
				</Button>
			</Grid.Col>
			<Grid.Col sm={12} md={8} lg={8} xl={8}>
				<Button type='dashed' block onClick={water}>
					Air Bersih
				</Button>
			</Grid.Col>
			<Grid.Col sm={12} md={8} lg={8} xl={8}>
				<Button type='dashed' block onClick={volume}>
					Volume
				</Button>
			</Grid.Col>
		</Grid>
	);
};

export default DistribusiButton;
