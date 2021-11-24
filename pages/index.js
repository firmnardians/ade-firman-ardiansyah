import React, { useContext } from 'react';
import Card from '../components/card';
import Container from '../components/container';
import Pagination from '../components/pagination';
import { ProductContext } from '../context/data';
import { useRouter } from 'next/router';

export default function Home() {
	const { products, isLoading, dispatch } = useContext(ProductContext);
	const router = useRouter();

	function handlePagination(type) {
		const { page, category } = router.query;

		const numPage = type === 'prev' ? Number(page) - 1 : Number(page) + 1;

		if (page !== undefined) {
			if (numPage > 0) {
				if (type === 'prev') {
					category !== undefined ? dispatch.getProducts(String(numPage), category) : dispatch.getProducts(String(numPage));
				} else {
					category !== undefined ? dispatch.getProducts(String(numPage), category) : dispatch.getProducts(String(numPage));
				}

				category !== undefined ? router.push(`/?category=${category}&page=${numPage}`) : router.push(`/?page=${numPage}`);
			}
		} else {
			if (type === 'next') {
				category !== undefined ? dispatch.getProducts('2', category) : dispatch.getProducts('2');

				router.push('/?page=2');
			}
		}
	}

	const isDisabledPrev = router.query.page === undefined || router.query.page === '1';
	const isDisabledNext = products.length !== 12;

	return (
		<Container>
			<div className='pt40 pb40'>
				{isLoading ? (
					<div className='p20'>
						<p className='text-center'>Loading...</p>
					</div>
				) : products.length > 0 ? (
					<div className='row'>
						{products.map((item, i) => {
							return (
								<div key={i} className='col-3'>
									<Card data={item} />
								</div>
							);
						})}
					</div>
				) : (
					<div className='pt40'>
						<p className='text-center'>Tidak ada products.</p>
					</div>
				)}

				{!isLoading && products.length > 0 && (
					<Pagination disabledPrev={isDisabledPrev} disabledNext={isDisabledNext} handleClick={handlePagination} />
				)}
			</div>
		</Container>
	);
}
