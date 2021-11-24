/* eslint-disable @next/next/no-html-link-for-pages */
import styled from 'styled-components';

export default function Header({ data }) {
	return (
		<HeaderApp>
			<a href='/?page=1'>
				<Title>Dagang</Title>
			</a>

			<WrapCategories>
				<Categories>
					{data.map((item, key) => {
						return <DataCategories key={key}>{item.category_name}</DataCategories>;
					})}
				</Categories>
			</WrapCategories>
		</HeaderApp>
	);
}

const Title = styled.h1`
	color: red;
`;

const HeaderApp = styled.header`
	height: 55px;
	position: fixed;
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
`;

const DataCategories = styled.li`
	list-style: none;
	padding-left: 4px;
	padding-right: 4px;
	margin: 0px 10px;
	cursor: pointer;
	font-size: 14px;
	text-align: center;
`;
