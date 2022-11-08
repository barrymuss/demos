import { FC, ReactNode } from 'react';
import { Button as Buttons } from 'antd';
import Icon from '../icon';

type BtnProps = {
	children?: ReactNode;
	block?: any;
	style?: any;
	danger?: any;
	type?: any;
	loading?: any;
	className?: any;
	icons?: any;
	onClick?: any;
	htmlType?: any;
	size?: any;
	shape?: any;
	disabled?: true | false;
};

const Button: FC<BtnProps> = ({
	children,
	block,
	style,
	danger,
	type,
	loading,
	className,
	icons,
	onClick,
	htmlType,
	size,
	shape,
	disabled = false,
}) => {
	return (
		<Buttons
			style={style}
			className={`button-component ${className}`}
			block={block}
			danger={danger}
			type={type}
			loading={loading}
			icon={icons && <Icon type={icons} />}
			onClick={onClick}
			htmlType={htmlType}
			size={size == null ? 'default' : size}
			shape={shape}
			disabled={disabled}
		>
			{children}
		</Buttons>
	);
};
export default Button;
