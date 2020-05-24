import Head from 'next/head'

import Header from './Header'

const Layout = ({ children, title }) => {

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

			{children}

			<style jsx global>{`
				body {
					margin: 0;
          padding: 0;
					font-family: system-ui;
					background: white;
				}
			`}</style>
		</div>
	)
}

export default Layout