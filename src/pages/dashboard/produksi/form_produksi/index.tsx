import { Card } from 'components';
import ProduksiForm from 'modules/produksi/produksiForm';

const FormProduksi = () => {
	return (
		<Card title='Form Data Produksi' subtitle='form isian baru data produksi'>
			<ProduksiForm
				forms={{
					selection: [
						{
							name: 'tahun',
							label: 'tahun',
							selection: [
								{
									value: 2020,
									label: 2020,
								},
								{
									value: 2021,
									label: 2021,
								},
							],
						},
						{
							name: 'material',
							label: 'material',
							selection: [
								{
									value: 2020,
									label: 2020,
								},
								{
									value: 2021,
									label: 2021,
								},
							],
						},
						{
							name: 'mitra',
							label: 'mitra',
							selection: [
								{
									value: 2020,
									label: 2020,
								},
								{
									value: 2021,
									label: 2021,
								},
							],
						},
						{
							name: 'jenis',
							label: 'jenis',
							selection: [
								{
									value: 2020,
									label: 2020,
								},
								{
									value: 2021,
									label: 2021,
								},
							],
						},
					],
					input: [
						{
							name: 'titikProd',
							label: 'titik produksi',
						},
						{
							name: 'januari',
							label: 'januari',
						},
						{
							name: 'februari',
							label: 'februari',
						},
						{
							name: 'maret',
							label: 'maret',
						},
						{
							name: 'april',
							label: 'april',
						},
						{
							name: 'mei',
							label: 'mei',
						},
						{
							name: 'juni',
							label: 'juni',
						},
						{
							name: 'juli',
							label: 'juli',
						},
						{
							name: 'agustus',
							label: 'agustus',
						},
						{
							name: 'september',
							label: 'september',
						},
						{
							name: 'oktober',
							label: 'oktober',
						},
						{
							name: 'november',
							label: 'november',
						},
						{
							name: 'desember',
							label: 'desember',
						},
					],
				}}
			/>
		</Card>
	);
};

export default FormProduksi;
