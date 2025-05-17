import React from 'react';
import Footer from '../Layout/Footer';
import OffcanvasExample from '../Layout/OffcanvasExample';
import DonorList from './DonorCard';

export default function DonorCard_1() {
  return (
    <div>
      <OffcanvasExample  />
        <DonorList />
        <Footer/>
    </div>
  )
}
