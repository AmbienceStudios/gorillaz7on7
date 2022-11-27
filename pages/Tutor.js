'use client';

import { Footer, Navbar } from '../components';
// eslint-disable-next-line import/named
import { TutorView } from '../sections';

  <>
    <title>Gorillaz University</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>;

const Tutor = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <TutorView />
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
