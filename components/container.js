import React, { Fragment, useContext, useEffect, useState } from 'react';
import Header from './header';
import styled from 'styled-components';
import { CategoryContext } from '../context/categories';
import Overflow from './overflow';

export default function Container({ children }) {
	const { categories } = useContext(CategoryContext);
	const [isActive, setActive] = useState(false);

	useEffect(() => {
		if (isActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isActive]);

	return (
		<Fragment>
			<Header data={categories} setActive={setActive} isActive={isActive} />
			<MainPage>{children}</MainPage>
			<Overflow active={isActive} setActive={setActive} />
		</Fragment>
	);
}

const MainPage = styled.main`
	max-width: 1200px;
	margin-top: 60px;
	margin-left: auto;
	margin-right: auto;
`;
