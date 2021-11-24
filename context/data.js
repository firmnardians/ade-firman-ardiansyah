import { createContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const ProductContext = createContext();

const ProductContextContainer = (props) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const router = useRouter();
	const { page } = router.query;

	function getProducts(page) {
		const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}product/search?per_page=12&page=${page}`;

		setLoading(true);

		axios
			.get(url)
			.then((res) => {
				if (res.status === 200) {
					setProducts(res.data.data);
					setLoading(false);

					if (res.data.data.length === 0) {
						window.location.href = '/?page=1';
					}
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		if (page !== undefined) {
			getProducts(String(page));
			router.push(`/?page=${page}`);
		} else {
			router.push('/?page=1');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page !== undefined]);

	const dispatch = useMemo(
		() => ({
			getProducts: (payload) => getProducts(payload),
		}),
		[]
	);

	return <ProductContext.Provider value={{ dispatch, products, isLoading }}>{props.children}</ProductContext.Provider>;
};

export default ProductContextContainer;
