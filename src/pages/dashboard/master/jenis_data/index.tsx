import React from 'react';
import { Card, Tabset } from 'components';
import dynamic from 'next/dynamic';

const MasterDistribusi = dynamic(() => import('modules/master/jenisdata/masterDistribusi'));
const MasterProduksi = dynamic(() => import('modules/master/jenisdata/masterProduksi'));
const MasterKeuangan = dynamic(() => import('modules/master/jenisdata/masterKeuangan'));

const JenisData = () => {
	return (
		<Card title='Daftar Jenis Data' subtitle='daftar jenis data sesuai kategori produksi, distribusi & keuangan'>
			<Tabset
				type='line'
				panel={[
					{
						title: 'Data Produksi',
						content: <MasterProduksi />,
					},
					{
						title: 'Data Distribusi',
						content: <MasterDistribusi />,
					},
					{
						title: 'Data Keuangan',
						content: <MasterKeuangan />,
					},
				]}
			/>
		</Card>
	);
};

export default JenisData;
