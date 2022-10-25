import { Tag, TagProps } from 'antd';
import { FC } from 'react';
import Icon from '../icon';

export type Tagprops = {
	color?: 'success' | 'processing' | 'error' | 'warning' | 'default' | string;
	children?: any;
	icon?: any;
	tags?: TagProps;
	style?: any;
	type?: 'default' | 'table';
};

export const Label: FC<Tagprops> = ({ icon, children, color, style, tags, type = 'default' }) => {
	if (type == 'table') {
		return (
			<Tag
				style={{
					width: '100%',
					textAlign: 'center',
					padding: '3px 7px',
					textTransform: 'capitalize',
					fontWeight: 500,
				}}
				color={color}
				icon={icon != null && <Icon type={icon} />}
				{...tags}
			>
				{children}
			</Tag>
		);
	}
	return (
		<Tag style={style} color={color} icon={icon != null && <Icon type={icon} />} {...tags}>
			{children}
		</Tag>
	);
};

export default Label;
