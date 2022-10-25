export const pieData1 = [
	{
		name: 'kinerja penagihan',
		y: 74.77,
		sliced: true,
		selected: true,
	},
	{
		name: 'rasio lancar',
		y: 12.82,
	},
	{
		name: 'solvabilitas',
		y: 4.63,
	},
];

export const pieData2 = [
	{
		name: 'Tekanan Aetra',
		y: 74.77,
		sliced: true,
		selected: true,
	},
	{
		name: 'Tekanan Palyja',
		y: 12.82,
	},
	{
		name: 'Tekanan Pamjaya',
		y: 4.63,
	},
];

export const pendapatanData = [
	{
		type: 'column',
		name: 'Pendapatan Usaha (R)',
		data: [3, 2, 1, 3, 4],
	},
	{
		type: 'column',
		name: 'Pendapatan Usaha (T)',
		data: [2, 3, 5, 7, 6],
	},
	{
		type: 'line',
		name: 'Pendapatan Usaha YTD (R)',
		data: [4, 3, 3, 9, 0],
	},
	{
		type: 'line',
		name: 'Pendapatan Usaha YTD (T)',
		data: [3, 2.67, 3, 6.33, 3.33],
	},
];

export const labaData = [
	{
		type: 'column',
		name: 'Laba Usaha (R)',
		data: [13, -2, 1, 3, 14],
	},
	{
		type: 'column',
		name: 'Laba Usaha (T)',
		data: [12, 3, 15, -7, 16],
	},
	{
		type: 'line',
		name: 'Laba Usaha YTD (R)',
		data: [14, 13, 13, -9, 0],
	},
	{
		type: 'line',
		name: 'Laba Usaha YTD (T)',
		data: [3, 2.67, 3, -6.33, 3.33],
	},
];

export const bopoData = [
	{
		type: 'column',
		name: 'Bopo Usaha (R)',
		data: [13, 2, 1, 3, 14],
	},
	{
		type: 'column',
		name: 'Bopo Usaha (T)',
		data: [12, 3, 15, 7, 16],
	},
	{
		type: 'line',
		name: 'Bopo Usaha YTD (R)',
		data: [14, 13, 13, 9, 0],
	},
	{
		type: 'line',
		name: 'Bopo Usaha YTD (T)',
		data: [3, 2.67, 3, 6.33, 3.33],
	},
];

export const capexData = [
	{
		type: 'column',
		name: 'Capex (R)',
		data: [3, 2, 1, 3, 4],
	},
	{
		type: 'line',
		name: 'Capex YTD (T)',
		data: [3, 2.67, 3, 6.33, 3.33],
	},
];

export const widgetKeuangan = [
	{
		label: 'pendapatan usaha',
		status: 'down',
		count: 100,
		target: 300,
		unit: 'M',
	},
	{
		label: 'Laba usaha',
		status: 'down',
		count: 100,
		target: 300,
		unit: 'M',
	},
	{
		label: 'BOPO',
		status: 'up',
		count: 100,
		target: 300,
		unit: '%',
	},
	{
		label: 'CAPEX',
		status: 'up',
		count: 100,
		target: 300,
		unit: 'M',
	},
	{
		label: 'EBITDA',
		status: 'down',
		count: '146,50',
		target: '5,75',
		unit: 'M',
	},
	{
		label: 'tarif rata-rata',
		status: 'up',
		count: '7987,18',
	},
	{
		label: 'ROE',
		status: 'up',
		count: '8,52',
		unit: '%',
	},
	{
		label: 'Rasio kas',
		status: 'up',
		count: '142,19',
		unit: '%',
	},
];

export const widgetIndikator = [
	{
		label: 'Jumlah Pelanggan',
		status: 'up',
		count: '921,034',
	},
	{
		label: 'Pelanggan baru',
		status: 'down',
		count: '926',
	},
	{
		label: 'cakupan layanan',
		status: 'down',
		count: '65,5',
		unit: '%',
	},
	{
		label: 'tekanan',
		status: 'down',
		count: '46,75',
		unit: '%',
	},
	{
		label: 'volume terjual',
		status: 'down',
		count: '29,706,623',
	},
	{
		label: 'distribusi',
		status: 'up',
		count: '54,038,112',
	},
	{
		label: 'produksi',
		status: 'up',
		count: '46,120,239',
	},
	{
		label: 'NRW',
		status: 'down',
		count: '45,03',
		unit: '%',
	},
];
