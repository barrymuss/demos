export const menuRoute = [
	{ label: 'home', id: 'home', icon: 'homeIcon', link: '/dashboard/home', children: [] },
	{
		label: 'master',
		id: 'master',
		icon: 'folderOutline',
		children: [
			{ label: 'jenis data', id: 'submenu-item-1', link: '/dashboard/master/jenis_data' },
			{ label: 'material', id: 'submenu-item-2', link: '/dashboard/master/material' },
			{ label: 'mitra', id: 'submenu-item-2', link: '/dashboard/master/mitra' },
			{ label: 'pelanggan', id: 'submenu-item-2', link: '/dashboard/master/pelanggan' },
			{ label: 'titik produksi', id: 'submenu-item-2', link: '/dashboard/master/titik_produksi' },
		],
	},
	{
		label: 'produksi',
		id: 'produksi',
		icon: 'productionIcon',
		children: [
			{ label: 'dashboard produksi', id: 'submenu-item-2', link: '/dashboard/produksi/dashboard_produksi' },
			{ label: 'input produksi', id: 'submenu-item-2', link: '/dashboard/produksi/form_produksi' },
		],
	},
	{
		label: 'distribusi',
		id: 'distribusi',
		icon: 'distributionIcon',
		children: [
			{ label: 'grafik distribusi', id: 'submenu-item-1', link: '/dashboard/distribusi/grafik_distribusi' },
			{ label: 'grafik air beli', id: 'submenu-item-2', link: '/dashboard/distribusi/grafik_air' },
			{ label: 'grafik volume', id: 'submenu-item-2', link: '/dashboard/distribusi/grafik_volume' },
			{ label: 'grafik NRW', id: 'submenu-item-2', link: '/dashboard/distribusi/grafik_NRW' },
		],
	},
	{
		label: 'tekanan',
		id: 'tekanan',
		icon: 'controlIcon',
		children: [
			{ label: 'dashboard tekanan', id: 'submenu-item-2', link: '/' },
			{ label: 'input tekanan', id: 'submenu-item-2', link: '/' },
		],
	},
	{
		label: 'keuangan',
		id: 'keuangan',
		icon: 'bankIcon',
		children: [
			{ label: 'Dashboard Keuangan', id: 'submenu-item-1' },
			{ label: 'input keuangan', id: 'submenu-item-2' },
			{ label: 'laporan keuangan', id: 'submenu-item-2' },
			{ label: 'target keuangan', id: 'submenu-item-2' },
		],
	},
	{
		label: 'pelanggan',
		id: 'pelanggan',
		icon: 'teamIcon',
		children: [
			{ label: 'dashboard pelanggan', id: 'submenu-item-1' },
			{ label: 'data pelanggan', id: 'submenu-item-2' },
		],
	},
	{
		label: 'pelayanan',
		id: 'pelayanan',
		icon: 'starIcon',
		children: [
			{ label: 'dashboard layanan', id: 'submenu-item-1' },
			{ label: 'cakupan layanan', id: 'submenu-item-2' },
		],
	},
	{
		label: 'data teknis',
		id: 'data_teknis',
		icon: 'safetytIcon',
		children: [
			{ label: 'kualitas air', id: 'submenu-item-1' },
			{ label: 'kualitas pipa', id: 'submenu-item-2' },
		],
	},
	{
		label: 'data karyawan',
		id: 'data_karyawan',
		icon: 'useroutlined',
		children: [
			{ label: 'dashboard karyawan', id: 'submenu-item-1' },
			{ label: 'data karyawan', id: 'submenu-item-2' },
			{ label: 'data pelatihan', id: 'submenu-item-2' },
		],
	},
	{
		label: 'keluhan',
		id: 'keluhan',
		icon: 'bookIcon',
		children: [
			{ label: 'data keluhan', id: 'submenu-item-1' },
			{ label: 'data mutasi', id: 'submenu-item-2' },
		],
	},
	{
		label: 'pengaturan',
		id: 'pengaturan',
		icon: 'settingIcon',
		children: [
			{ label: 'profile', id: 'submenu-item-1' },
			{ label: 'navigasi', id: 'submenu-item-2' },
			{ label: 'pengguna', id: 'submenu-item-2' },
		],
	},
];
