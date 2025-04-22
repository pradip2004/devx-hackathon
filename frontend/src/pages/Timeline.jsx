import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Title from '../components/Title'

const TimelineItem = ({ index, progress, text, date }) => {
      const circleRef = useRef(null)

      const fillProgress = useTransform(
            progress,
            [0.1, 0.3 * (index + 1)],
            ["0%", "100%"]
      )

      const textOpacity = useTransform(
            progress,
            [0.1 + (0.3 * index), 0.1 + (0.3 * (index + 0.5))],
            [0, 1]
      )

      return (
            <div className="relative flex flex-col md:block" ref={circleRef}>
                  {/* Circle */}
                  <div className="w-12 h-12 rounded-full border-2 border-white relative z-10">
                        <motion.div
                              className="absolute inset-1 rounded-full bg-purple-600"
                              style={{ scale: fillProgress }}
                        />
                  </div>

                  {/* Text Content */}
                  <motion.div
                        className="md:absolute md:-top-24 md:left-1/2 md:-translate-x-1/2 w-full md:w-48 text-left md:text-center mt-4 md:mt-0"
                        style={{ opacity: textOpacity }}
                  >
                        <h3 className="text-white text-xl font-bold mb-2">{text}</h3>
                        <p className="text-white/70">{date}</p>
                  </motion.div>
            </div>
      )
}

const Timeline = () => {
      const containerRef = useRef(null)
      const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["0.1 end", "0.8 start"]
      })

      const lineProgress = useTransform(
            scrollYProgress,
            [0.1, 0.8],
            ["0%", "100%"]
      )

      const timelineItems = [
            {
                  text: "Registration Starts",
                  date: "March 1, 2024"
            },
            {
                  text: "Round 1",
                  date: "March 15, 2024"
            },
            {
                  text: "Final Show Down",
                  date: "March 17, 2024"
            }
      ]

      return (
            <div className='w-full min-h-screen bg-black relative flex items-center justify-center' ref={containerRef} >
                   <div className='absolute inset-0 bg-[radial-gradient(35%_35%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]'></div>
                  <div className="container mx-auto px-4 py-20 relative z-10">
                        <div className='flex flex-col items-center justify-center gap-10 w-full'>
                              <Title
                                    text="Timeline"
                                    className="text-4xl sm:text-6xl md:text-8xl font-semibold text-center text-white"
                                    delay={150}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                    onLetterAnimationComplete={() => { }}
                              />
                        </div>

                        <div className="mt-20 md:mt-52 rounded-2xl p-8 md:p-12">
                              {/* Mobile Timeline (Vertical) */}
                              <div className="md:hidden flex flex-col relative py-10">
                                    <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/20">
                                          <motion.div
                                                className="w-full h-full bg-purple-600 origin-top"
                                                style={{ scale: lineProgress }}
                                          />
                                    </div>
                                    <div className="relative flex flex-col gap-8 pl-12">
                                          {timelineItems.map((item, index) => (
                                                <TimelineItem
                                                      key={index}
                                                      index={index}
                                                      progress={scrollYProgress}
                                                      text={item.text}
                                                      date={item.date}
                                                />
                                          ))}
                                    </div>
                              </div>

                              {/* Desktop Timeline (Horizontal) */}
                              <div className="hidden md:flex flex-row relative py-20">
                                    <div className="absolute left-0 top-1/2 w-full h-[2px] -translate-y-1/2 bg-white/20">
                                          <motion.div
                                                className="w-full h-full bg-purple-600 origin-left"
                                                style={{ scale: lineProgress }}
                                          />
                                    </div>
                                    <div className="relative flex flex-row justify-between w-full max-w-5xl mx-auto">
                                          {timelineItems.map((item, index) => (
                                                <TimelineItem
                                                      key={index}
                                                      index={index}
                                                      progress={scrollYProgress}
                                                      text={item.text}
                                                      date={item.date}
                                                />
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Timeline