import React from 'react';
import styled from 'styled-components';

export default function Pagination({ handleClick, disabledPrev, disabledNext }) {
	return (
		<WrapPagination>
			<BtnPagination disabled={disabledPrev} onClick={() => handleClick('prev')}>
				Previous
			</BtnPagination>
			<BtnPagination disabled={disabledNext} onClick={() => handleClick('next')}>
				Next
			</BtnPagination>
		</WrapPagination>
	);
}

const WrapPagination = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const BtnPagination = styled.button`
	padding: 10px 20px;
	width: 150px;
	margin-left: 10px;
	cursor: pointer;
	font-size: 16px;
	background: red;
	outline: none;
	border: none;
	color: #ffffff;
	border-radius: 4px;
	font-weight: 500;
`;
