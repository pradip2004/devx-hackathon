import React from 'react'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import { Home, Archive, User, Settings, Sparkles } from 'lucide-react'
import { Scroller } from './components/Scroller'
import Line from './pages/Line'
import Theme from './pages/Theme'
import Prize from './pages/Prize'
import Timeline from './pages/Timeline'
import Submission from './pages/Submission'
const App = () => {
  const items = [
    { icon: <Home size={18} className='text-white' />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <Archive size={18} className='text-white' />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <User size={18} className='text-white' />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <Settings size={18} className='text-white' />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  
  const scrollerTexts = [
    ['sponsor', 'name', <div className="inline-block w-10 h-10 bg-purple-500 rounded-full mx-1"></div>]
  ];

  return (
    <div className='bg-black overflow-hidden relative min-h-screen'>
      <Landing />
      <div className="fixed bottom-10 left-0 right-0 z-50">
        <Navbar
          className=""
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
      <Scroller
        texts={scrollerTexts}
        className="text-white my-10"
      />

      <Line />

      <Theme />

      <Prize />

      <Timeline />

      <Submission />
    </div>
  )
}

export default App