import React from 'react';
import { useRouter } from 'next/router';

const CarPage = () => {
  const router = useRouter();
  return (
    <>
      <h2>Car detail page</h2>
      <p>{router.query.carId}</p>
    </>
  );
};

export default CarPage;