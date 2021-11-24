/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';
import styled from 'styled-components';

export default function Header({ data, setActive, isActive }) {
	const [selected, setSelected] = useState([]);

	function handleActive(type, data) {
		if (type === 'active') {
			setActive(true);
			if (data !== undefined) {
				setSelected(data);
			}
		} else {
			setActive(false);
		}
	}

	const __parentCategories = data.filter((item) => item.parent_id === 0 && item.status !== 0);
	const __subCategories = data.filter((item) => item.parent_id === selected.id);

	return (
		<HeaderApp>
			<a href='/?page=1'>
				<Title>Dagang</Title>
			</a>

			<WrapCategories>
				<Categories>
					{__parentCategories.map((item, index) => {
						return (
							<a key={index} href={`/?category=${item.slug}&page=1`}>
								<DataCategories onMouseOver={() => handleActive('active', item)}>{item.category_name}</DataCategories>
							</a>
						);
					})}
				</Categories>
			</WrapCategories>

			<WrapSubCategories onMouseOver={() => handleActive('active')} active={isActive}>
				{__subCategories.length > 0 ? (
					<SubCategories>
						{__subCategories.map((item, index) => {
							return (
								<a key={index} href={`/?category=${item.slug}&page=1`}>
									<DataSubCategories>{item.category_name}</DataSubCategories>
								</a>
							);
						})}
					</SubCategories>
				) : (
					<p className='text-center'>Tidak ada sub category.</p>
				)}
			</WrapSubCategories>
		</HeaderApp>
	);
}

const Title = styled.h1`
	color: red;
`;

const HeaderApp = styled.header`
	height: 55px;
	position: fixed;
	z-index: 99;
	top: 0px;
	right: 0px;
	left: 0px;
	background: #ffffff;
	box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%), 0px 2px 4px -1px rgb(0 0 0 / 20%);
	display: flex;
	align-items: center;
	padding: 30px 42px;
	justify-content: space-between;
`;

const WrapCategories = styled.div`
	padding: 0px;
`;

const Categories = styled.ul`
	display: flex;
	align-items: center;
	margin: 0;
`;

const DataCategories = styled.li`
	list-style: none;
	padding-left: 4px;
	padding-right: 4px;
	margin: 0px 10px;
	cursor: pointer;
	font-size: 12px;
	text-align: center;
	padding-bottom: 10px;
	padding-top: 10px;

	:hover {
		color: red;
	}
`;

const WrapSubCategories = styled.div`
	padding: 20px 30px;
	background: #ffffff;
	display: none;
	position: absolute;
	right: 0;
	top: 50px;
	left: 0;

	${({ active }) => active && `display: block;`}
`;

const SubCategories = styled.ul`
	display: flex;
	align-items: center;
`;

const DataSubCategories = styled.li`
	list-style: none;
	padding-left: 4px;
	padding-right: 4px;
	margin: 0px 10px;
	cursor: pointer;
	font-size: 14px;
	text-align: center;

	:hover {
		color: red;
	}
`;
