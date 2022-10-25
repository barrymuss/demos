import { useState, useEffect, FC } from 'react';
import { Tabs } from 'antd';
import { Icon } from 'components';
import { breakPointOberver, capitalize } from 'function';

const TabPane = Tabs.TabPane;

const breakPoints = {
	tablet: ' (max-width: 1023px)',
	desktop: '(min-width: 1024px)',
};

type tabsprops = {
	tabPosition?: any;
	type?: 'line' | 'card';
	panel?: any;
	style?: any;
};

const Tabset: FC<tabsprops> = ({ tabPosition, panel, type, style }) => {
	const [breakPoint, isBreakPoint] = useState();

	useEffect(() => {
		breakPointOberver(breakPoints, isBreakPoint);
	}, [breakPoint]);

	return (
		<Tabs
			style={{ height: '100%', width: '100%', ...style }}
			defaultActiveKey={'1'}
			type={type}
			size='small'
			tabPosition='top'
			// tabPosition={
			// 	(tabPosition != null && tabPosition) || (tabPosition == null && breakPoint === 'tablet') ? 'left' : 'top'
			// }
			items={[
				...panel.map((item: any, index: number) => {
					index + 1;
					return {
						key: index + item.title,
						disabled: item.disabled,
						label: (
							<>
								{item.icon != null && <Icon style={{ marginRight: 5 }} type={item.icon} />}
								{capitalize(item.title)}
							</>
						),
						children: item.content,
					};
				}),
			]}
		/>
	);
};

export default Tabset;
