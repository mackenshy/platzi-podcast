const AboutMe = () => (
	<div className="about-me">
		<h1>Jaime González</h1>
		<img src="/foto.jpg" alt="About me" />
		<h3>Fullstack Developer</h3>
		<p>
			Follow me{' '}
			<a href="https://twitter.com/mackenshy" target="_blank">
				@mackenshy
			</a>
		</p>

		<style jsx>{`
			.about-me {
				max-width: 300px;
				background: black;
				border-radius: 25px;
				color: white;
				text-align: center;
				box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.4);
			}

			img {
				width: 90%;
				padding: 0 5%;
				border-radius: 25px;
			}

			a {
				color: #0791e6;
			}
		`}</style>
	</div>
)

export default AboutMe