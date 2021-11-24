import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<Html>
				<Head>{this.props.styleTags}</Head>
				<body>
					<Main />
					<NextScript />

					<div className='disabled-mobile'>
						<div className='center-div'>
							<p className='text-center'>Ups. Tidak responsive, ganti menggunakan desktop untuk melihatnya.</p>
						</div>
					</div>
				</body>
			</Html>
		);
	}
}
