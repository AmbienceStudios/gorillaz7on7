import { Footer, Navbar } from '../components';
// eslint-disable-next-line import/named
import { About, Explore, Feedback, Hero, Insights, NIL, Girl } from '../sections';

const Page = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
      <Girl />
    </div>
    <div className="relative">
      {/* <GetStarted /> */}
      <div className="gradient-04 z-0" />
      {/* <WhatsNew /> */}
    </div>
    {/* <World /> */}
    <div className="relative">
      <NIL />
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
