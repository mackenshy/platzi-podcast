import Router from 'next/router'

const Modal = ({ children }) => (
	<div className="modal">
		<nav>
			<a href="#back" className="close" onClick={() => Router.back()}>
				&lt; Volver
			</a>
		</nav>

		{children}

		<style jsx>{`
			.modal {
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				z-index: 9999;
			}

			nav {
				background: none;
				position: absolute;
				top: 0;
				left: 0;
			}

			nav a {
				display: inline-block;
				padding: 15px;
				color: #fff;
				cursor: pointer;
				text-decoration: none;
			}
		`}</style>
	</div>
)

export default Modal