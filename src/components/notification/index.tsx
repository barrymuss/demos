import { message as messages, notification as notif } from 'antd';
import { capitalize } from 'function';
import Button from '../button';

type notifprops = {
	type: 'success' | 'info' | 'warning' | 'error';
	title?: any;
	description?: any;
	duration?: any;
	key?: any;
	button?: any;
};

const closeNotif = ({ key }: notifprops) => {
	notif.close(key);
};

const notification = (props: notifprops) => {
	notif[props.type]({
		closeIcon: <div />,
		key: props.key,
		message: capitalize(props.title),
		description: capitalize(props.description),
		duration: props.duration == null ? 2.5 : props.duration,
	});
};

type messageprops = {
	content?: any;
	className?: any;
	style?: any;
	duration?: any;
	type: 'success' | 'info' | 'warning' | 'error' | 'warning' | 'loading';
};

const message = (props: messageprops) => {
	messages[props.type]({
		content: props.content,
		className: props.className,
		duration: props.duration == null ? 2 : props.duration,
		style: {
			...props.style,
		},
	});
};

message.notif = notification;
message.close = closeNotif;

export default message;
