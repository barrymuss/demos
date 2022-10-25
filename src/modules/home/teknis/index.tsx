import React, { Suspense } from 'react';
import { Tabset } from 'components';
import ChartProd from './chartProd';
import ChartDis from './chartDis';
import ChartNRW from './chartNrw';
import ChartCakpel from './chartCakpel';
import ChartTekanan from './chartTekanan';

const HomeTeknis = () => {
	return (
		<Tabset
			panel={[
				{
					title: 'Produksi',
					icon: 'productionIcon',
					content: (
						<Suspense fallback={<>....Loading!</>}>
							<ChartProd />
						</Suspense>
					),
				},
				{
					title: 'Distibusi',
					icon: 'distributionIcon',
					content: (
						<Suspense fallback={<>....Loading!</>}>
							<ChartDis />
						</Suspense>
					),
				},
				{
					title: 'NRW',
					icon: 'experiment',
					content: (
						<Suspense fallback={<>....Loading!</>}>
							<ChartNRW />
						</Suspense>
					),
				},
				{
					title: 'Cakpel',
					icon: 'riseoutline',
					content: (
						<Suspense fallback={<>....Loading!</>}>
							<ChartCakpel />
						</Suspense>
					),
				},
				{
					title: 'Tekanan',
					icon: 'presure',
					content: (
						<Suspense fallback={<>....Loading!</>}>
							<ChartTekanan />
						</Suspense>
					),
				},
			]}
		/>
	);
};

export default HomeTeknis;
