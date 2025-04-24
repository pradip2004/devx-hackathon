import React, { useRef } from 'react'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import { Home, Palette, Trophy, Clock, FileText } from 'lucide-react'
import { Scroller } from './components/Scroller'
import Line from './pages/Line'
import Theme from './pages/Theme'
import Prize from './pages/Prize'
import Timeline from './pages/Timeline'
import Submission from './pages/Submission'
import FAQ from './pages/FAQ'
import Logo from './assets/Logo.png'
import SofLogo from './assets/sof.png'

const App = () => {
  const landingRef = useRef(null);
  const themeRef = useRef(null);
  const prizeRef = useRef(null);
  const timelineRef = useRef(null);
  const submissionRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { 
      icon: <Home size={18} className='text-white' />, 
      label: 'Home', 
      onClick: () => scrollToSection(landingRef) 
    },
    { 
      icon: <Palette size={18} className='text-white' />, 
      label: 'Theme', 
      onClick: () => scrollToSection(themeRef) 
    },
    { 
      icon: <Trophy size={18} className='text-white' />, 
      label: 'Prize', 
      onClick: () => scrollToSection(prizeRef) 
    },
    { 
      icon: <Clock size={18} className='text-white' />, 
      label: 'Timeline', 
      onClick: () => scrollToSection(timelineRef) 
    },
    { 
      icon: <FileText size={18} className='text-white' />, 
      label: 'Registration', 
      onClick: () => scrollToSection(submissionRef) 
    },
  ];

  const scrollerTexts = [
    [
      <div className="flex items-center justify-center gap-8 px-4">
        <img src={Logo} alt="Logo" className="h-32 w-auto object-contain" />
        <div className="inline-block w-10 h-10 bg-purple-500/50 rounded-full"></div>
        <img src={SofLogo} alt="SOF Logo" className="h-32 w-auto object-contain" />
      </div>
    ]
  ];

  return (
    <div className='bg-black overflow-hidden relative min-h-screen pb-20 font-family-winky'>
      <div ref={landingRef}>
        <Landing />
      </div>
      <div className="fixed bottom-10 left-0 right-0 z-50">
        <Navbar
          className=""
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
      <div className="w-full overflow-hidden">
        <Scroller
          texts={scrollerTexts}
          className="text-white my-10"
        />
      </div>

      <Line />

      <div ref={themeRef}>
        <Theme />
      </div>

      <div ref={prizeRef}>
        <Prize />
      </div>

      <div ref={timelineRef}>
        <Timeline />
      </div>

      <div ref={submissionRef}>
        <Submission />
      </div>

      <div ref={faqRef}>
        <FAQ />
      </div>
    </div>
  )
}

export default App