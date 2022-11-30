'use client';

import { motion } from 'framer-motion';
import VideoPlayer from 'react-video-js-player'
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Car from '../public/videos/Gorillaz.mp4';
import Poster from '../public/d3g3n.png';

const TrainingView = () => {
  const videoSrc = Car;
  const poster = Poster;

    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="GirlRillaz Training Photos" textStyles="text-center font-extrabold text-3xl pb-12" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px]  text-center text-secondary-white"
        >
          {/* <span className="font-extrabold text-white"> We</span> are an organization that helps student athletes advance their education and athletic careers based in Phoenix, Arizona */}

        </motion.p>
      </motion.div>
      <div className="gearContainer">
        <img src="./t-photo1.jpg" className="placeholder2" />
        <img src="./t-photo2.jpg" className="placeholder2" />
        <img src="./t-photo3.jpg" className="placeholder2" />
        <img src="./t-photo4.jpg" className="placeholder2" />
      </div>
      <div className="sectionmargin" />
      <div className="gearContainer">
        <img src="./t-photo5.jpg" className="placeholder2" />
        {/* <div className="placeholder2" />
      <div className="placeholder2" />
      <div className="placeholder2" /> */}
      </div>

      <div className="gradient-02  z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="GirlRillaz Training Videos" textStyles="text-center font-extrabold text-3xl mt-20 pb-12" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px]  text-center text-secondary-white"
        >
          {/* <span className="font-extrabold text-white"> We</span> are an organization that helps student athletes advance their education and athletic careers based in Phoenix, Arizona */}

        </motion.p>
      </motion.div>
      <div className="gearContainer">
        <VideoPlayer
          src={videoSrc}
          poster={poster}
          width="480"
          height="640"
        />
      </div>

      <div className="sectionmargin" />
      <div className="gearContainer">
        <img src="./t-photo5.jpg" className="placeholder2" />
        <div className="placeholder2" />
        <div className="placeholder2" />
        <div className="placeholder2" />
      </div>

    </section>;
};

export default TrainingView;
