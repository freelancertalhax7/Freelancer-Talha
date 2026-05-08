import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';
import { TerminalText } from '../components/TerminalText';

export default function Skills() {
  const categories = ['Design', 'Security', 'Marketing', 'Development'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 min-h-screen">
      <div className="mb-20 text-center space-y-4">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="text-cyber-green font-mono text-xs uppercase tracking-[0.4em]"
        >
          Resource Allocation
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">TECHNICAL STACK.</h1>
        <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed">
          A quantified view of my multidisciplinary expertise as a designer, 
          hacker, and marketing architect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, idx) => {
          const IconComp = (Icons as any)[skill.icon] || Icons.HelpCircle;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 glass rounded-xl border border-white/5 hover:border-cyber-green/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-cyber-green group-hover:bg-cyber-green group-hover:text-black transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{skill.name}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-white/30">{skill.category}</span>
                  </div>
                </div>
                <div className="font-mono text-xs text-cyber-green">{skill.level}%</div>
              </div>

              <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute h-full bg-cyber-green shadow-[0_0_10px_#00FF41]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Terminal View */}
      <section className="mt-32">
        <div className="glass rounded-2xl overflow-hidden border border-white/10">
          <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/30" />
            </div>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">vanguard-v1.2.0.sh</span>
            <div className="w-12" />
          </div>
          <div className="p-8 font-mono text-sm space-y-4">
             <div className="flex gap-2">
                <span className="text-cyber-green">talha@freelancer:~$</span>
                <TerminalText text="analyze --deep profile --user talha_pro" />
             </div>
             <div className="text-white/40 border-l-2 border-white/10 pl-4 py-2">
                [+] Extracting design philosophy...<br />
                [+] Parsing marketing algorithms...<br />
                [+] Testing security endpoints... Vulnerabilities found: 0.<br />
                [+] Synthesizing multi-disciplinary output...
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="p-4 border border-white/5 rounded bg-white/2">
                   <span className="block text-cyber-green text-[10px] mb-2 uppercase">Design</span>
                   <span className="text-lg">Elite</span>
                </div>
                <div className="p-4 border border-white/5 rounded bg-white/2">
                   <span className="block text-cyber-blue text-[10px] mb-2 uppercase">Security</span>
                   <span className="text-lg">Hardened</span>
                </div>
                <div className="p-4 border border-white/5 rounded bg-white/2">
                   <span className="block text-cyber-accent text-[10px] mb-2 uppercase">Marketing</span>
                   <span className="text-lg">Aggressive</span>
                </div>
                <div className="p-4 border border-white/5 rounded bg-white/2">
                   <span className="block text-cyber-green text-[10px] mb-2 uppercase">Vision</span>
                   <span className="text-lg">Crystal</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
