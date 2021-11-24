import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CategoryContext = createContext();

const CategoryContextContainer = (props) => {
	const [categories, setCategories] = useState([]);

	function getCategories(url) {
		axios
			.get(url)
			.then((res) => {
				if (res.status === 200) {
					setCategories(res.data.data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	useEffect(() => {
		const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}category-product/list`;

		getCategories(url);
	}, []);

	return <CategoryContext.Provider value={{ categories }}>{props.children}</CategoryContext.Provider>;
};

export default CategoryContextContainer;
