import React from 'react';
import styled from 'styled-components';

export default function Modal({ children }) {
	return <WrapModal>{children}</WrapModal>;
}

const WrapModal = styled.div`
	padding: 20px;
	background: #ffffff;
	border-radius: 4px;
`;
