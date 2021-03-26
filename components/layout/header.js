import Link from 'next/link';

const header = () => {
	return (
		<>
			<div className="navbar notification is-primary">
				<h2 className="logo">
					<Link href="/">BLOGS</Link>
				</h2>
			</div>
		</>
	);
};

export default header;
