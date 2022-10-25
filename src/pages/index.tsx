export default function IndexPage() {
	return <div />;
}

export const getServerSideProps = () => {
	return {
		redirect: {
			destination: '/dashboard/home',
		},
	};
};
