import { motion } from 'motion/react';
import { Send, Terminal, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter">ESTABLISH <br />CONNECTION.</h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-md">
            Whether you need a security audit, a brand transformation, 
            or a high-performance web platform, I'm ready to listen.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-cyber-green">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/30 mb-1">Direct Channel</h4>
              <p className="text-lg">hq@cybervanguard.io</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-cyber-blue">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/30 mb-1">Secure Messaging</h4>
              <p className="text-lg">@vanguard_signal (Private)</p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-cyber-green">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/30 mb-1">Encrypted Inbound</h4>
              <p className="text-sm font-mono opacity-50 break-all max-w-xs">PGP: 0x8F2C 3D4A E5B6 F7C8 ...</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative"
      >
        <div className="flex items-center gap-2 mb-8 text-cyber-green font-mono text-xs">
          <Terminal className="w-4 h-4" />
          <span>INBOUND_COMMUNICATION_PROTOCOL v2.0</span>
        </div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
          >
            <div className="w-20 h-20 rounded-full bg-cyber-green/20 flex items-center justify-center text-cyber-green">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Transmission Sent</h3>
            <p className="text-white/50 text-sm">Your message has been encrypted and delivered. Expect a response within 12 cycles.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="px-6 py-2 border border-cyber-green text-cyber-green rounded-full text-xs font-bold hover:bg-cyber-green hover:text-black transition-all"
            >
              Send New Transmission
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-1">Entity Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyber-green transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-1">Digital Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@nexus.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyber-green transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-1">Objective</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyber-green transition-colors appearance-none">
                <option value="security">Security Audit</option>
                <option value="design">Web/Graphic Design</option>
                <option value="marketing">Digital Marketing</option>
                <option value="collab">Other Collaboration</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-white/30 ml-1">Payload</label>
              <textarea 
                required
                rows={5}
                placeholder="Briefly describe your objectives..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyber-green transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-cyber-green text-black font-bold rounded-xl flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {status === 'sending' ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                  <Terminal className="w-5 h-5" />
                </motion.div>
              ) : (
                <>Transmit Payload <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
