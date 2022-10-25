export const baseOptions = {
	title: null,
	colors: ['#06d6a0', '#ff6b6b', '#ffe66d', '#4b79be', '#36414c'],
	exporting: { enabled: false },
	credits: {
		enabled: false,
	},
	plotOptions: {
		series: {
			animation: false,
			pointPadding: 0.05,
			borderWidth: 0,
		},
	},

	yAxis: {
		title: {
			text: null,
		},
	},

	legend: {
		align: 'center',
		layout: 'horizontal',
		verticalAlign: 'bottom',
		floating: false,
		// backgroundColor: 'white',
		// x: 100,
		// y: 0,
		// draggable: true,
		// zIndex: 20,
		// borderWidth: 1,
		// borderRadius: 0,
		// title: {
		// 	text: ':: Drag me',
		// },
	},
};
