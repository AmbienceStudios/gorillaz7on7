'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const GearShop = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="Latest Gorillaz Gear" textStyles="text-center font-extrabold text-3xl pb-12" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px]  text-center text-secondary-white"
      >
        {/* <span className="font-extrabold text-white"> We</span> are an organization that helps student athletes advance their education and athletic careers based in Phoenix, Arizona */}

      </motion.p>
    </motion.div>
    <div className="gearContainer">
      <img src="./g-photo1.jpg" className="placeholder" />
      <img src="./g-photo8.jpg" className="placeholder" />
      <img src="./g-photo7.jpg" className="placeholder" />
      <img src="./g-photo6.jpg" className="placeholder" />
    </div>
    <div className="sectionmargin" />
    <div className="gearContainer">
      <img src="./g-photo5.jpg" className="placeholder" />
      <img src="./g-photo4.jpg" className="placeholder" />
      <img src="./g-photo3.jpg" className="placeholder" />
      <img src="./g-photo2.jpg" className="placeholder" />
    </div>

  </section>
);

export default GearShop;
