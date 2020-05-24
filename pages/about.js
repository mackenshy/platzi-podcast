import Layout from '../components/Layout'
import AboutMe from '../components/AboutMe'

const About = () => (

	<Layout title="About me">
		<div className="about">
			<AboutMe />

			<style jsx>{`
				.about {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100vh;
				}
			`}</style>
		</div>
	</Layout>
)

export default About