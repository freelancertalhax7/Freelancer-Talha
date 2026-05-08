import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

// Placeholder pages for quick completion
const About = () => (
  <div className="max-w-7xl mx-auto px-4 py-32">
    <h1 className="text-6xl font-bold mb-12">TALHA'S STORY.</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
      <div className="space-y-8">
        <p className="text-xl text-white/60 leading-relaxed italic">
          "I don't just build websites. I build digital fortresses that look like works of art."
        </p>
        <p className="text-white/40 leading-relaxed">
          Starting from a background in network security, I quickly realized that the 
          most secure systems are often the hardest to use. I dedicated my career to 
          bridging that gap—becoming a master of aesthetic design and strategic 
          marketing while maintaining my roots in deep technical security.
        </p>
        <div className="p-8 border border-white/5 bg-white/2 rounded-2xl">
           <h3 className="font-bold mb-4 flex items-center gap-2 text-cyber-green">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              Core Philosophy
           </h3>
           <p className="text-sm text-white/50 leading-relaxed">
              Design is the bridge. Marketing is the amplifier. Security is the foundation. 
              Without any of these elements, a project is incomplete. I provide all three 
              under one unified vision.
           </p>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/5] glass rounded-3xl p-1 pb-0 overflow-hidden">
           <div className="w-full h-full bg-gradient-to-t from-cyber-green/20 via-transparent to-transparent flex items-end justify-center p-12">
              <div className="text-center space-y-4">
                 <div className="text-8xl font-bold tracking-tighter text-white">01</div>
                 <div className="text-xs uppercase tracking-[0.5em] text-cyber-green">Master Unit</div>
              </div>
           </div>
        </div>
        <div className="absolute top-12 -right-6 w-32 h-32 glass rounded-full blur-[40px] bg-cyber-green/20" />
      </div>
    </div>
  </div>
);

const HireMe = () => (
  <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-12">
    <div className="space-y-4">
       <h1 className="text-6xl font-bold tracking-tighter">HIRE TALHA.</h1>
       <p className="text-white/40 max-w-xl mx-auto">Select a mission protocol to begin our collaboration.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {['Strategic Growth', 'Security Hardening', 'Creative Excellence'].map(m => (
         <div key={m} className="p-12 glass rounded-3xl border border-white/10 hover:border-cyber-green hover:scale-105 transition-all text-left">
            <h3 className="text-2xl font-bold mb-4">{m}</h3>
            <p className="text-sm text-white/40 mb-8 leading-relaxed">A specialized protocol focused on maximizing your digital impact through targeted efforts.</p>
            <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-cyber-green hover:text-black transition-colors">Select Protocol</button>
         </div>
       ))}
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<HireMe />} />
        </Routes>
      </Layout>
    </Router>
  );
}
