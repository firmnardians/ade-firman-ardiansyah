/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';

export default function Card({ data }) {
	const discount = data.discount / 100;
	const discount_price = data.price - data.price * discount;

	return (
		<CardProduct>
			<WrapImg>
				<img src={data.images[0]} alt='Image Product' />
			</WrapImg>

			<DetailProduct>
				<TitleProduct>{data.product_name}</TitleProduct>
				<WrapPrice>
					<TitlePrice>Price</TitlePrice>

					<Price>Rp {discount_price}</Price>
				</WrapPrice>

				<TitleCity>{data.city_name}</TitleCity>
			</DetailProduct>
		</CardProduct>
	);
}

const CardProduct = styled.div`
	margin: 10px;
	background: #ffffff;
	border-radius: 4px;
	cursor: pointer;
`;

const WrapImg = styled.div`
	padding: 0px;
	border-radius: 4px;

	img {
		width: 100%;
		height: 280px;
		border-radius: 4px 4px 0px 0px;
		object-fit: cover;
	}
`;

const DetailProduct = styled.div`
	padding: 10px;
`;

const TitleProduct = styled.p`
	font-size: 16px;
	font-weight: 600;
	height: 50px;
`;

const WrapPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 10px;
`;

const TitlePrice = styled.p`
	margin: 0px;
	font-size: 14px;
	font-weight: 500;
`;

const Price = styled.p`
	margin: 0px;
	font-size: 14px;
	font-weight: 500;
	color: green;
`;

const TitleCity = styled.p`
	margin: 0px;
	font-size: 12px;
	color: grey;
`;
