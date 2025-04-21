import React from 'react'
import gridBg from '../assets/grid-lines.png'
import Title from '../components/Title'
import { div } from 'framer-motion/client'
import ThemeCard from '../components/ThemeCard'
import { Code, Star } from 'lucide-react'

const Theme = () => {
      const themes = [
            {
                  title: 'AI & ML',
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                  icon: <Code className='text-white' size={50}/>
            },
            {
                  title: 'AI & ML',
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                  icon: <Code className='text-white' size={50}/>
            },
            {
                  title: 'AI & ML',
                  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                  icon: <Code className='text-white' size={50}/>
            }
      ]
      return (
            <div className='w-full h-screen relative'>
                  <div className='w-full h-screen flex flex-col items-center  p-32 absolute z-10  bg-[rgb(74,32,138)] inset-0 bg-blend-overlay [mask-image:radial-gradient(80%_30%_at_50%_55%,black,transparent_100%)]' style={{
                        backgroundImage: `url(${gridBg})`
                  }}>
                  </div>
                  <div className='absolute z-20 flex flex-col items-center w-full h-full'>
                        <div className='flex flex-col items-center justify-center gap-10 w-full'>
                              <Title
                                    text="Theme"
                                    className="text-8xl font-semibold text-center text-white"
                                    delay={150}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                    onLetterAnimationComplete={() => { }}
                              />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 mt-44'>
                              {themes.map((theme, index) => (
                                    <ThemeCard key={index} spotlightColor="rgba(144, 3, 252, 0.2)">
                                          {theme.icon}
                                          <h1 className='text-white text-4xl font-bold mb-4'>{theme.title}</h1>
                                          <p className='max-w-xs text-white/70'>{theme.description}</p>
                                    </ThemeCard>
                              ))}
                        </div>

                  </div>
            </div>

      )
}

export default Theme