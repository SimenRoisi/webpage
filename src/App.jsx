import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import LetsConnect from './components/LetsConnect';

function App() {
  return (
    <main className="bg-stellar-grey text-dimmed-text min-h-screen selection:bg-warm-orange selection:text-stellar-grey">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <LetsConnect />

      {/* Footer */}
      <footer className="text-center py-8 text-sm opacity-50">
        <p>© {new Date().getFullYear()} - Built with React & Framer Motion</p>
      </footer>
    </main>
  );
}

export default App;
