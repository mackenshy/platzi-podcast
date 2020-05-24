const Clip = ({ clip }) => {
	const clipImage = clip.urls.image || clip.channel.urls.logo_image.original

	return (
		<div className="clip">
			<picture>
				<div style={{ backgroundImage: `url(${clipImage})` }} />
			</picture>

			<div className="player">
				<h3>{clip.title}</h3>
				<h6>{clip.channel.title}</h6>
				<p>{clip.description}</p>
				<audio controls autoPlay={true}>
					<source src={clip.urls.high_mp3} type="audio/mpeg" />
				</audio>
			</div>

			<style jsx>{`
				.clip {
					display: flex;
					height: 100%;
					flex-direction: column;
					background: #8756ca;
					color: #fff;
				}

				picture {
					display: flex;
					align-items: center;
					justify-content: center;
					flex: 1 1;
					flex-direction: column;
					width: auto;
					padding: 10%;
				}

				picture div {
					width: 100%;
					height: 100%;
					background-position: 50% 50%;
					background-size: contain;
					background-repeat: no-repeat;
				}

				.player {
					padding: 30px;
					background: rgba(0, 0, 0, 0.3);
					text-align: center;
				}

				h3 {
					margin: 0;
				}

				h6 {
					margin: 0;
					margin-top: 1em;
				}

				p {
					text-align: justify;
					font-size: 0.8em;
				}

				audio {
					margin-top: 2em;
					width: 100%;
				}
			`}</style>
		</div>
	)
}

export default Clip