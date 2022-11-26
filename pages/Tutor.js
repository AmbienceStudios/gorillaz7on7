'use client';

import { Footer, Navbar } from '../components';
// eslint-disable-next-line import/named
import { GearShop } from '../sections';

const Tutor = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <GearShop />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Tutor;
