import React, { Fragment, useContext } from 'react';
import Header from './header';
import styled from 'styled-components';
import { CategoryContext } from '../context/categories';

export default function Container({ children }) {
	const { categories } = useContext(CategoryContext);

	const parentCategories = categories.filter((item) => item.parent_id === 0 && item.status !== 0).slice(0, 6);

	return (
		<Fragment>
			<Header data={parentCategories} />
			<MainPage>{children}</MainPage>
		</Fragment>
	);
}

const MainPage = styled.main`
	max-width: 1200px;
	margin-top: 60px;
	margin-left: auto;
	margin-right: auto;
`;
