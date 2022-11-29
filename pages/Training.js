'use client';

import { Footer, Navbar } from '../components';
// eslint-disable-next-line import/named
import { TrainingView } from '../sections';

  <>
    <title>Gorillaz University</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>;

const GorillazGear = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <TrainingView />
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

export default GorillazGear;
