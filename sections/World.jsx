'use client';

import { motion } from 'framer-motion';
import '../styles/globals.css'
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="How the funds are utlizied" textStyles="text-center" />
      <TitleText
        title={(
          <>Founders Token Allocations
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[1550px]"
      >
        <div class="flex-wrap flex flex-col flex-auto">
        <p class="text-white text-center text-4xl">Dev Team</p>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
                <div class="fill"> 
                </div>
               
            </div>
            <div class="inside-circle"> 20% </div>
          </div>
        </div>
        <div class="flex-wrap flex flex-col flex-auto">
        <p class="text-white text-center text-4xl">Operations</p>
        <div class="circle-wrap">          <div class="circle">
            <div class="mask half">
                <div class="fill"></div>
            </div>
            <div class="inside-circle"> 17.5% </div>
          </div>
        </div>
        </div>


        <div>
        <div class="flex-wrap flex flex-col flex-auto">
        <p class="text-white text-center text-4xl">Savings</p>
        <div class="circle-wrap">
          <div class="circle">
            
            <div class="mask half">
                <div class="fill"></div>
            </div>
            <div class="inside-circle"> 17.5% </div>
          </div>
        </div>
        </div>
        </div>
        <div class="flex-wrap flex flex-col flex-auto">
        <p class="text-white text-center text-4xl">Community</p>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
                <div class="fill"></div>
            </div>
            <div class="inside-circle"> 20% </div>
          </div>
        </div>
        </div>

        <div class="flex-wrap flex flex-col flex-auto">
        <p class="text-white text-center text-4xl">Air Drop</p>

        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
                <div class="fill"></div>
            </div>
            <div class="inside-circle"> 12.5% </div>
          </div>
        </div>
        </div>
        

        <div class="flex-wrap flex flex-col flex-auto">
        <p class="text-white text-center text-4xl">Non-Profit <br/>Donation</p>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
                <div class="fill"></div>
            </div>
            <div class="inside-circle"> 12.5% </div>
          </div>
        </div>
        </div>


        </div>

        

      </motion.div>
    </motion.div>
  </section>
);

export default World;
