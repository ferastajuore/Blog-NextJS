import Link from 'next/link';

const navbar = () => {
	return (
		<>
			<ul>
				<li>
					<Link>
						<a href="/">Todos</a>
					</Link>
				</li>
			</ul>
		</>
	);
};

export default navbar;
