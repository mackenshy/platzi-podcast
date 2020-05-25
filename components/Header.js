import Link from 'next/link'

const Header = () => (
	<header>
		<Link href="/">
			<a>
				<img src="/static/platzi-logo.png" alt="Logo" />
				<span>Podcast</span>
			</a>
		</Link>

		<style jsx>{`
			header {
				color: #fff;
				background: #8756ca;
				padding: 15px;
			}

			header a {
				color: white;
				text-decoration: none;
				font-size: 2em;
				display: flex;
				height: 50px;
				justify-content: center;
				align-items: center;
			}

			header img {
				height: 80%;
				margin-right: 15px;
			}
		`}</style>
	</header>
)

export default Header