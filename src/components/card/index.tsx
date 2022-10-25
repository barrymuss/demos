import { FC, ReactNode } from 'react';
import { Card as Cards } from 'antd';
import { capitalize } from 'function';
import styles from 'style/elements/card.module.scss';

const { Meta } = Cards;

type CardtitleProps = {
	title?: any;
	subtitle?: any;
	extra?: any;
	style?: any;
};

const Cardtitle: FC<CardtitleProps> = (props) => {
	return (
		<div className={styles['card-title']}>
			<div className={styles['title-label']} style={{ marginBottom: props.subtitle == null ? 0 : 'inherit' }}>
				{props.title}
			</div>
			{props.subtitle != null && (
				<div className={styles['subtitle']}>
					{props.subtitle}
					<span style={{ marginLeft: 2.5 }}>{props.extra}</span>
				</div>
			)}
		</div>
	);
};

type cardProps = {
	className?: any;
	children?: ReactNode;
	border?: any;
	size?: any;
	notshadow?: any;
	notpadding?: any;
	meta?: any;
	style?: any;
	title?: any;
	subtitle?: any;
	extra?: any;
	bodyStyle?: any;
	justify?: any;
	align?: any;
};

const Card = (props: cardProps) => {
	return (
		<Cards
			className={`${styles['cards']} ${props.className}`}
			style={{
				borderRadius: 5,
				boxShadow: props.notshadow == true ? 'none' : 'inherit',
			}}
			headStyle={{ border: 'none', padding: props.notpadding && 0 }}
			bordered={props.border == null ? false : props.border}
			size={props.size == null ? 'small' : props.size}
			bodyStyle={{ padding: props.notpadding == true ? 0 : '12px 12px' }}
			title={props.title != null && <Cardtitle title={props.title} subtitle={props.subtitle} extra={props.extra} />}
			align={props.align}
			justify={props.justify}
		>
			{props.children}
			{props.meta ? <Meta title={props.meta.title} description={props.meta.description} /> : null}
		</Cards>
	);
};

Card.Title = Cardtitle;

export default Card;
