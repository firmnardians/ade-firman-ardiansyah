export const handleNumber = (number) => {
	const isNumber = number === undefined ? 0 : number;
	const fixed = Math.trunc(Number(isNumber));
	const rupiah = `Rp ${fixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

	return rupiah;
};
