import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import KnowMore from './components/KnowMore/KnowMore'
import Contact from './components/Contact/Contact'
import ClickSpark from './components/ClickSpark/ClickSpark'
import StarTrail from './components/StarTrail/StarTrail'
import Beams from './components/Beams/Beams'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="app">
      
      <StarTrail />
      <Navbar />

      <div className="sticky-panel hero-panel">
        <div className="beams-bg">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={4}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className="hero-section-content">
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
          <Projects />
        </main>
      </div>

      <div className="sticky-panel">
        <main className="main-content center-panel">
          <KnowMore />
        </main>
      </div>

      <div className="last-panel">
        <main className="main-content center-panel">
          <Contact />
        </main>
      </div>
      
      <Footer />
      
      </div>
    </ClickSpark>
  )
}

export default App
