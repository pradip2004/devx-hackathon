import React from 'react'
import ScrollReveal from '../components/ScrollReveal'
import RotatingText from '../components/RotatingText'

const Line = () => {
      return (
            <div className='w-full h-screen flex flex-col items-center justify-center p-8 md:p-32 relative font-family-winky'>
                  <div className='absolute inset-0 bg-[radial-gradient(55%_55%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]'></div>
                  <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                  >
                        This hackathon is a great opportunity to learn about the latest trends in the industry.
                        Hosted by GDG TIU, it's a great way to get started with coding and build your skills.
                  </ScrollReveal>
                  <div className='flex items-center justify-center gap-5 relative text-white text-4xl font-bold uppercase'>
                        Join <RotatingText
                              texts={['biggest', 'innovative', 'Creative', 'Hackathon']}
                              mainClassName="px-2 sm:px-2 md:px-3 bg-purple-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                              staggerFrom={"last"}
                              initial={{ y: "100%" }}
                              animate={{ y: 0 }}
                              exit={{ y: "-120%" }}
                              staggerDuration={0.025}
                              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                              transition={{ type: "spring", damping: 30, stiffness: 400 }}
                              rotationInterval={2000}
                        />
                  </div>

            </div>
      )
}

export default Line