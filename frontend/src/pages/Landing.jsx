import React from 'react'
import Button from '../components/Button'
import starBg from '../assets/stars.png'
import { motion } from 'framer-motion'

const Landing = () => {

      return (
            <section className='h-[492px] md:h-[700px] w-full flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]' style={{
                  backgroundImage: `url(${starBg})`
            }}>
                  <div className='absolute inset-0 bg-[radial-gradient(55%_55%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]'></div>
                  <div className='absolute h-64 w-64 md:w-96 md:h-96 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white_0%,rgb(184,148,255)_27.7%,rgb(24,0,66)_100%)] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]'></div>

                  <motion.div
                        style={{
                              translateX: "-50%",
                              translateY: "-50%",
                        }} animate={{
                              rotate: "1turn"
                        }} transition={{
                              duration: 30,
                              repeat: Infinity,
                              ease: "linear"
                        }} className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white/20 rounded-full top-1/2 left-1/2 '>
                        <div className="absolute h-2 w-2 left-0 bg-white/20 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute h-2 w-2 left-1/2 bg-white/20 rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute h-5 w-5 left-full border border-white/20 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
                              <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-full -translate-x-1/2 -translate-y-1/2"></div>
                  </motion.div>

                  <motion.div style={{
                        translateX: "-50%",
                        translateY: "-50%",
                  }} animate={{
                        rotate: "-1turn"
                  }} transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                  }} className='absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border border-white/20 border-dashed rounded-full top-1/2 left-1/2'>
                        <div className="absolute h-2 w-2 left-1/2 bg-white/20 rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
                  </motion.div>
                  <motion.div style={{
                        translateX: "-50%",
                        translateY: "-50%",
                  }} animate={{
                        rotate: "1turn"
                  }} transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                  }} className='absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border border-white/20 border-dashed rounded-full top-1/2 left-1/2 '>
                        <div className="absolute h-2 w-2 left-0 bg-white/20 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute h-2 w-2 left-full bg-white/20 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </motion.div>
                  <div className=' w-full h-full flex flex-col  items-center justify-center relative mt-16'>
                        <h1 className='text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138))] text-transparent bg-clip-text'>Hackathon</h1>
                        <p className='text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex justify-center items-center mt-5'>
                              <Button>Get Started</Button>
                        </div>
                  </div>
            </section>

      )
}

export default Landing