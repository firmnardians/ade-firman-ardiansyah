import { createContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const ProductContext = createContext();

const ProductContextContainer = (props) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const router = useRouter();
	const { page, category } = router.query;

	function getProducts(pageNum, category) {
		const url =
			category !== undefined
				? `${process.env.NEXT_PUBLIC_API_ENDPOINT}product/search?category_name=${category}&per_page=12&page=${pageNum}`
				: `${process.env.NEXT_PUBLIC_API_ENDPOINT}product/search?per_page=12&page=${pageNum}`;

		setLoading(true);

		axios
			.get(url)
			.then((res) => {
				if (res.status === 200) {
					setProducts(res.data.data);
					setLoading(false);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		if (page !== undefined) {
			getProducts(String(page), category);
			category !== undefined ? router.push(`/?category=${category}&page=${page}`) : router.push(`/?page=${page}`);
		} else {
			router.push('/?page=1');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page !== undefined]);

	const dispatch = useMemo(
		() => ({
			getProducts: (pageNum, category) => getProducts(pageNum, category),
		}),
		[]
	);

	return <ProductContext.Provider value={{ dispatch, products, isLoading }}>{props.children}</ProductContext.Provider>;
};

export default ProductContextContainer;
