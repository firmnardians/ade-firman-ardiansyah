import styled from 'styled-components';

export default function Overflow({ active, setActive }) {
	const WrapOverflow = styled.div`
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #000000;
		opacity: 0.5;
		display: ${active ? 'block' : 'none'};
	`;

	return <WrapOverflow onMouseOver={() => setActive(!active)} />;
}
