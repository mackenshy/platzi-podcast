import { Link } from '../routes'
import slug from '../helpers/slug'

const PodcastList = ({ audio_clips, onClickPodcast }) => {
	return (
		<div className="podcasts">
			{audio_clips.map((clip) => (
				<Link
					key={clip.id}
					route="podcast"
					params={{
						slugChannel: slug(clip.channel.title),
						idChannel: clip.channel.id,
						slug: slug(clip.title),
						id: clip.id,
					}}
					passHref
				>
					<a className="podcast" onClick={(e) => onClickPodcast(e, clip)}>
						<h3>{clip.title}</h3>
						<div className="meta">{Math.ceil(clip.duration / 60)} minutes</div>
					</a>
				</Link>
			))}

			<style jsx>{`
				.podcast {
					display: block;
					text-decoration: none;
					color: #333;
					padding: 15px;
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
					cursor: pointer;
				}

				.podcast:hover {
					color: #000;
				}

				.podcast h3 {
					margin: 0;
				}

				.podcast .meta {
					color: #666;
					margin-top: 0.5em;
					font-size: 0.8em;
				}
			`}</style>
		</div>
	)
}

export default PodcastList