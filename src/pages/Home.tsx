import { motion } from 'motion/react';
import { TerminalText } from '../components/TerminalText';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { ArrowRight, ShieldCheck, Palette, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-4 max-w-7xl mx-auto w-full relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 max-w-5xl"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 text-cyber-green font-mono text-sm uppercase tracking-[0.3em]"
          >
            <span className="w-8 h-[1px] bg-cyber-green" />
            Digital Strategist & Security Architect
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[7.5rem] font-black tracking-tight leading-[0.85] text-white font-display flex flex-col"
          >
            <span className="block opacity-90">WE BUILD</span>
            <span className="relative inline-block my-2">
              <span className="bg-clip-text text-transparent hacker-gradient filter drop-shadow-[0_0_25px_rgba(0,255,65,0.4)]">
                IMPERVIOUS
              </span>
              <motion.span 
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-0 bg-cyber-green border-y border-cyber-green/50 translate-y-1/2 h-px pointer-events-none"
              />
            </span>
            <span className="block text-4xl md:text-7xl font-bold tracking-tighter text-white/80">
              DIGITAL EXPERIENCES.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-white/50 max-w-2xl leading-relaxed font-light"
          >
            I am a multi-disciplinary creator specializing in 
            <span className="text-white"> pixel-perfect design</span>, 
            <span className="text-white"> growth-focused marketing</span>, and 
            <span className="text-white"> military-grade security</span>.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link 
              to="/hire-me" 
              className="px-10 py-5 bg-cyber-green text-black font-bold flex items-center gap-2 group hover:scale-105 transition-all duration-300 rounded-sm"
            >
              Initiate Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/skills" 
              className="px-10 py-5 glass text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all duration-300 rounded-sm"
            >
              View Capabilities
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Terminal Snippet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute right-4 bottom-0 hidden lg:block w-96 glass p-4 rounded-lg font-mono text-xs border border-cyber-green/30"
        >
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="text-cyber-green">λ</span>
              <TerminalText text="ssh contact@freelancertalha.com" />
            </div>
            <div className="text-white/40">Authenticating... Success.</div>
            <div className="text-white/40">Initializing systems...</div>
            <div className="flex gap-2 text-cyber-blue">
              <span>[OK]</span>
              <span>Firewall Active</span>
            </div>
            <div className="flex gap-2 text-cyber-green">
              <span>[OK]</span>
              <span>Design System Parsed</span>
            </div>
            <div className="flex gap-2">
              <span className="text-cyber-green">λ</span>
              <TerminalText text="systemctl start creativity.service" delay={2000} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges / Services */}
      <section className="px-4 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const IconComp = (Icons as any)[service.icon] || Icons.HelpCircle;
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="group p-10 glass rounded-3xl hover:bg-white/5 border border-white/5 hover:border-cyber-green transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyber-green group-hover:text-black transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-xs font-mono text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber-green" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Featured Areas */}
      <section className="px-4 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
            THE <br />
            <span className="italic font-light">INTERSECTION</span> <br />
            OF ART & SECURITY.
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Most designers focus on beauty. Most security experts focus on locks. 
            I focus on both. My philosophy is that a beautiful interface means 
            nothing if it isn't resilient, and a secure system shouldn't have to 
            sacrifice user experience.
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-cyber-green mb-1"
              >
                500+
              </motion.div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/30">Bugs Found</div>
            </div>
            <div>
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-bold text-cyber-blue mb-1"
              >
                120+
              </motion.div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/30">Brands Built</div>
            </div>
          </div>
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-cyber-green border-b border-cyber-green pb-2 group font-bold tracking-widest text-xs uppercase"
          >
            Explore My Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
            {/* Animated Mesh Grid */}
            <div className="absolute inset-0 bg-cyber-green/5 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ShieldCheck className="w-48 h-48 text-cyber-green/20 group-hover:scale-125 transition-transform duration-700" />
            </div>
            <div className="absolute top-8 left-8">
               <Palette className="w-12 h-12 text-cyber-accent opacity-50" />
            </div>
            <div className="absolute bottom-12 right-12">
               <TrendingUp className="w-12 h-12 text-cyber-blue opacity-50" />
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 border-r-2 border-t-2 border-cyber-green/30" />
          <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 border-l-2 border-b-2 border-cyber-green/30" />
        </motion.div>
      </section>
    </div>
  );
}
