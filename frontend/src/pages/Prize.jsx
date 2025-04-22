import React from 'react'
import Title from '../components/Title'
import starBg from '../assets/stars.png'
import PixelCard from '../components/PixelCard'

const Prize = () => {
      return (
            <div className='w-full relative'>
                  <div className='w-full flex flex-col items-center p-4 md:p-8 lg:p-32 absolute z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]' style={{
                        backgroundImage: `url(${starBg})`
                  }}>
                  </div>
                  <div className='relative z-20 flex flex-col items-center w-full py-8 md:py-16 lg:py-32'>
                        <div className='flex flex-col items-center justify-center gap-6 md:gap-10 w-full'>
                              <Title
                                    text="Prizes"
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
                        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full mt-6 md:mt-10 px-2 md:px-4'>
                              <PixelCard variant="blue" gap={1} className='mt-0 md:mt-40'>
                                    <div className="absolute flex flex-col items-center">
                                          <div className="relative inline-block">
                                                <span className='text-6xl md:text-8xl font-bold text-transparent [-webkit-text-stroke:1px_rgb(255,255,255)]'>2</span>
                                                <span className='absolute top-0 -right-5 md:-right-7 text-xl md:text-2xl font-bold text-white'>nd</span>
                                          </div>
                                          <h3 className='text-white text-3xl md:text-4xl font-bold mt-4 md:mt-8'>INR XX,XXX</h3>
                                          <p className='text-white text-base md:text-lg mt-2'>Goodies, More Prizes</p>
                                    </div>
                              </PixelCard>
                              <PixelCard variant="yellow" gap={1} className='mt-0'>
                                    <div className="absolute flex flex-col items-center">
                                          <div className="relative inline-block">
                                                <span className='text-6xl md:text-8xl font-bold text-transparent [-webkit-text-stroke:2px_rgb(255,255,255)]'>1</span>
                                                <span className='absolute top-0 -right-4 md:-right-5 text-xl md:text-2xl font-bold text-white'>st</span>
                                          </div>
                                          <h3 className='text-white text-3xl md:text-4xl font-bold mt-4 md:mt-8'>INR XX,XXX</h3>
                                          <p className='text-white text-base md:text-lg mt-2'>Goodies, More Prizes</p>
                                    </div>
                              </PixelCard>
                              <PixelCard variant="pink" gap={1} className='mt-0 md:mt-40'>
                                    <div className="absolute flex flex-col items-center">
                                          <div className="relative inline-block">
                                                <span className='text-6xl md:text-8xl font-bold text-transparent [-webkit-text-stroke:2px_rgb(255,255,255)]'>3</span>
                                                <span className='absolute top-0 -right-5 md:-right-7 text-xl md:text-2xl font-bold text-white'>rd</span>
                                          </div>
                                          <h3 className='text-white text-3xl md:text-4xl font-bold mt-4 md:mt-8'>INR XX,XXX</h3>
                                          <p className='text-white text-base md:text-lg mt-2'>Goodies, More Prizes</p>
                                    </div>
                              </PixelCard>
                        </div>
                  </div>
            </div>
      )
}

export default Prize