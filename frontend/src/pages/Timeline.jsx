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
            <div className="relative" ref={circleRef}>
                  {/* Circle */}
                  <div className="w-12 h-12 rounded-full border-2 border-white relative">
                        <motion.div
                              className="absolute inset-1 rounded-full bg-purple-600"
                              style={{ scale: fillProgress }}
                        />
                  </div>

                  {/* Text Content */}
                  <motion.div
                        className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 text-center"
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
            offset: ["0.1 end", "0.5 start"]
      })

      const lineProgress = useTransform(
            scrollYProgress,
            [0.1, 0.9],
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
            <div className='w-full min-h-screen bg-black relative' ref={containerRef} >
                   <div className='absolute inset-0 bg-[radial-gradient(35%_35%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]'></div>
                  <div className="container mx-auto px-4 py-20">
                        <div className='flex flex-col items-center justify-center gap-10 w-full'>
                              <Title
                                    text="Timeline"
                                    className="text-6xl md:text-8xl font-semibold text-center text-white"
                                    delay={150}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                    onLetterAnimationComplete={() => { }}
                              />
                        </div>

                        <div className="sticky mt-52 top-1/2 -translate-y-1/2">
                              <div className="flex justify-center items-center relative py-20">
                                    {/* Horizontal Line */}
                                    <div className="absolute h-[2px] bg-white/20 left-0 right-0">
                                          <motion.div
                                                className="h-full bg-purple-600 origin-left"
                                                style={{ scaleX: lineProgress }}
                                          />
                                    </div>

                                    {/* Timeline Items */}
                                    <div className="relative flex justify-between w-full max-w-3xl">
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