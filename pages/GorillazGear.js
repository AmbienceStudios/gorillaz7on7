'use client';

import { Footer, Navbar } from '../components';
// eslint-disable-next-line import/named
import {  Explore, Feedback, Hero, Insights } from '../sections';
import GearShop from '../sections/GearShop';

const GorillazGear = () => (
  <div className="bg-black overflow-hidden">
  <Navbar />
  {/* <Hero /> */}
  <div className="relative">
    <GearShop />
    <div className="gradient-03 z-0" />
    {/* <Explore /> */}
  </div>
  <div className="relative">
    {/* <GetStarted /> */}
    <div className="gradient-04 z-0" />
    {/* <WhatsNew /> */}
  </div>
  {/* <World /> */}
  <div className="relative">

    {/* <Insights /> */}
    <div className="gradient-04 z-0" />
    {/* <Feedback /> */}
  </div>
  <Footer />
</div>
);

export default GorillazGear;
