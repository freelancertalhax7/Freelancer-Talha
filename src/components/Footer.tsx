import { Terminal, Heart, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import * as Icons from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-4 border-t border-white/5 bg-black/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-6 h-6 text-cyber-green" />
            <span className="font-mono text-xl font-bold tracking-tighter text-white">
              Freelancer Talha
            </span>
          </div>
          <p className="text-white/40 max-w-sm mb-6 leading-relaxed">
            Leading the digital vanguard through creative web design, high-impact marketing, 
            and impenetrable security infrastructures.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => {
              const IconComp = (Icons as any)[link.icon] || Icons.Share2;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-cyber-green hover:text-black transition-all group"
                  aria-label={link.name}
                >
                  <IconComp className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-cyber-green mb-6">Expertise</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">Web Experience</li>
            <li className="hover:text-white transition-colors cursor-pointer">Graphic Identity</li>
            <li className="hover:text-white transition-colors cursor-pointer">Security Audits</li>
            <li className="hover:text-white transition-colors cursor-pointer">Growth Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-cyber-green mb-6">Collaborate</h4>
          <a 
            href="#" 
            className="group flex flex-col gap-1"
          >
            <span className="text-white/40 text-sm">Ready to start?</span>
            <span className="text-lg font-medium flex items-center gap-2 group-hover:text-cyber-green transition-colors">
              hire@cybervanguard.io <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-white/30 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Cyberspace
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
        <p>© {currentYear} Freelancer Talha. All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-tight">
          <a href="#" className="hover:text-cyber-green">Privacy Policy</a>
          <a href="#" className="hover:text-cyber-green">Terms of Service</a>
          <a href="#" className="hover:text-cyber-green">Security Policy</a>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-green/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </footer>
  );
}
