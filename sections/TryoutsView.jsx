/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */

'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Countdown from './Countdown';

const TryoutsView = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="7on7" textStyles="text-center font-extrabold text-3xl pb-12" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px]  text-center text-secondary-white"
      >
        {/* <span className="font-extrabold text-white"> We</span> are an organization that helps student athletes advance their education and athletic careers based in Phoenix, Arizona */}

      </motion.p>
    </motion.div>
    <div className="gearContainer">
      <img src="./f-photo1.jpg" className="placeholder" />
      <img src="./f-photo8.jpg" className="placeholder" />
      <img src="./f-photo7.jpg" className="placeholder" />
      <img src="./f-photo6.jpg" className="placeholder" />
    </div>
    <div className="sectionmargin" />
    <div className="gearContainer">
      <img src="./f-photo5.jpg" className="placeholder" />
      <img src="./f-photo4.jpg" className="placeholder" />
      <img src="./f-photo3.jpg" className="placeholder" />
      <img src="./f-photo2.jpg" className="placeholder" />
    </div>
    <div className="sectionmargin" />
    <div className="sectionmargin" />
    <div className="sectionmargin" />
    <img src="./tryouts.png" className="flex m-auto" />
    <div className="sectionmargin" />
    <Countdown />
    <p className="text-white flex m-auto justify-center text-center text-4xl pb-12 ">6U-12U From 10AM-11:30AM</p>
    <p className="text-white flex m-auto justify-center text-center text-4xl pb-12 ">13U-HighSchool From 11:45AM-1:45PM</p>
    <p className="text-white flex m-auto justify-center text-center text-4xl pb-12">Millennium High School</p>

  </section>
);

export default TryoutsView;
