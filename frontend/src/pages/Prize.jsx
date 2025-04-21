import React from 'react'
import Title from '../components/Title'
import starBg from '../assets/stars.png'
import PixelCard from '../components/PixelCard'

const Prize = () => {
      return (
            <div className='w-full min-h-screen relative'>
                  <div className='w-full h-full min-h-screen flex flex-col items-center p-8 md:p-32 absolute z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]' style={{
                        backgroundImage: `url(${starBg})`
                  }}>
                  </div>
                  <div className='absolute z-20 flex flex-col items-center w-full h-full'>
                        <div className='flex flex-col items-center justify-center gap-10 w-full'>
                              <Title
                                    text="Prizes"
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
                        <div className='flex flex-col md:flex-row items-center justify-center gap-10 w-full mt-10 md:h-[80%] px-4'>
                              <PixelCard variant="blue" gap={1} className='md:mt-40'>
                                    <div className="absolute flex flex-col items-center">
                                          <div className="relative inline-block">
                                                <span className='text-8xl font-bold text-transparent [-webkit-text-stroke:1px_rgb(255,255,255)]'>2</span>
                                                <span className='absolute top-0 -right-7 text-2xl font-bold text-white'>nd</span>
                                          </div>
                                          <h3 className='text-white text-4xl font-bold mt-8'>INR XX,XXX</h3>
                                          <p className='text-white text-lg mt-2'>Goodies, More Prizes</p>
                                    </div>
                              </PixelCard>
                              <PixelCard variant="yellow" gap={1} className='mt-0'>
                                    <div className="absolute flex flex-col items-center">
                                          <div className="relative inline-block">
                                                <span className='text-8xl font-bold text-transparent [-webkit-text-stroke:2px_rgb(255,255,255)]'>1</span>
                                                <span className='absolute top-0 -right-5 text-2xl font-bold text-white'>st</span>
                                          </div>
                                          <h3 className='text-white text-4xl font-bold mt-8'>INR XX,XXX</h3>
                                          <p className='text-white text-lg mt-2'>Goodies, More Prizes</p>
                                    </div>
                              </PixelCard>
                              <PixelCard variant="pink" gap={1} className='md:mt-40'>
                                    <div className="absolute flex flex-col items-center">
                                          <div className="relative inline-block">
                                                <span className='text-8xl font-bold text-transparent [-webkit-text-stroke:2px_rgb(255,255,255)]'>3</span>
                                                <span className='absolute top-0 -right-7 text-2xl font-bold text-white'>rd</span>
                                          </div>
                                          <h3 className='text-white text-4xl font-bold mt-8'>INR XX,XXX</h3>
                                          <p className='text-white text-lg mt-2'>Goodies, More Prizes</p>
                                    </div>
                              </PixelCard>
                        </div>
                  </div>
            </div>
      )
}

export default Prize