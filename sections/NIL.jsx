'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const NIL = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="N.I.L Deal Complete" textStyles="text-center font-extrabold text-6xl pb-12" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px]  text-center text-secondary-white"
      >
        {/* <span className="font-extrabold text-white"> We</span> are an organization that helps student athletes advance their education and athletic careers based in Phoenix, Arizona */}


      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/NIL.jpg"
        alt="arrow down"
        className="w-[700px] h-auto object-contain rounded-xl mt-[28px]"
      />

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/NIL2.jpg"
        alt="arrow down"
        className="w-[700px] h-auto object-contain rounded-xl mt-[28px]"
      />

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/girl.jpg"
        alt="arrow down"
        className="w-[700px] h-auto object-contain rounded-xl mt-[28px]"
      />


      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default NIL;
