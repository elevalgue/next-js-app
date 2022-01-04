import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { CarListComponet } from '../components';

const CarListPage = () => {
  const router = useRouter();

  const onNavigateBack = () => {
    router.push('/'); // router.back();
  };

  return (
    <>
      <Head>
        <title>Rent a car - Car list</title>
      </Head>
      <h2>Car list page</h2>
      <CarListComponet />
      <button onClick={onNavigateBack}>Navigate to home</button>
    </>
  );
};

export default CarListPage;