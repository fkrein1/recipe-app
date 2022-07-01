import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IngredientsGrid from '../../components/IngredientsGrid';

export default function Ingredients() {
  return (
    <>
      <Header title="Explore" />
      <IngredientsGrid />
      <Footer />
    </>
  );
}
