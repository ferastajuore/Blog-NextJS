import Link from 'next/link';
import BlogIMG from '../../assets/img/blogIMG.jpg';

const item = ({ article }) => {
	return (
		<div className="card">
			<div className="card-image is-3by2">
				<img src={BlogIMG} alt="Placeholder image" />
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4">{article.title}</p>
						<p className="subtitle is-6">{article.writer}</p>
					</div>
				</div>

				<div className="content">
					{article.description.split('.', 2)[0]}
					<br />
					<br />
					<time className="subtitle is-6" dateTime="2016-1-1">
						12:00 AM - 1 Jan 2021
					</time>
				</div>
				<div className="buttons">
					<Link href={`/article/${article.slug}`} as={`/article/${article.slug}`}>
						<button className="button is-info">Read more -{'>'}</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default item;
