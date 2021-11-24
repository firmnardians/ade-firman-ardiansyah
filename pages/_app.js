import CategoryContextContainer from '../context/categories';
import ProductContextContainer from '../context/data';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<CategoryContextContainer>
			<ProductContextContainer>
				<Component {...pageProps} />
			</ProductContextContainer>
		</CategoryContextContainer>
	);
}

export default MyApp;
