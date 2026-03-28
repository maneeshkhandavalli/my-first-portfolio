import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import KnowMore from './components/KnowMore/KnowMore'
import Contact from './components/Contact/Contact'
import SplashCursor from './components/SplashCursor/SplashCursor'
import Beams from './components/Beams/Beams'
import './App.css'

function App() {
  return (
    <div className="app">
      <SplashCursor 
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />
      
      <div className="sticky-panel hero-panel">
        <div className="beams-bg">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className="hero-section-content">
          <Navbar />
          <main className="main-content">
            <Hero />
          </main>
        </div>
      </div>

      <div className="sticky-panel">
        <main className="main-content center-panel">
          <About />
        </main>
      </div>

      <div className="sticky-panel">
        <main className="main-content center-panel">
          <Skills />
        </main>
      </div>

      <div className="sticky-panel">
        <main className="main-content center-panel">
          <KnowMore />
        </main>
      </div>

      <div className="sticky-panel">
        <main className="main-content center-panel">
          <Contact />
        </main>
      </div>
      
    </div>
  )
}

export default App
