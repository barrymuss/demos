import { Empty as Emptys } from 'antd';
import { FC } from 'react';
import Button from '../button';

type EmptyProps = {
	children?: any;
	image?: any;
	imageStyle?: any;
	description?: any;
	buttons?: any;
};

const Empty: FC<EmptyProps> = ({ children, image, imageStyle, description, buttons }) => {
	return (
		<Emptys
			image={image}
			imageStyle={imageStyle}
			description={<span style={{ textTransform: 'capitalize' }}>{description}</span>}
		>
			{buttons && (
				<Button type='primary' onClick={buttons.onClick}>
					{buttons.text}
				</Button>
			)}

			{children}
		</Emptys>
	);
};

export default Empty;
