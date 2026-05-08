import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-md bg-cyber-green/20 border border-cyber-green/50 group-hover:scale-110 transition-transform">
            <Terminal className="w-5 h-5 text-cyber-green" />
          </div>
          <span className="font-mono text-lg font-bold tracking-tighter text-white">
            Freelancer Talha
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative py-1 text-sm font-medium transition-colors hover:text-cyber-green",
                location.pathname === link.path ? "text-cyber-green" : "text-white/60"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyber-green"
                />
              )}
            </Link>
          ))}
          <Link
            to="/hire-me"
            className="px-5 py-2 rounded-full border border-cyber-green text-cyber-green text-sm font-bold hover:bg-cyber-green hover:text-black transition-all"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full glass border-b border-white/10 md:hidden p-4 space-y-4"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-lg font-mono hover:text-cyber-green"
              >
                {'>'} {link.name}
              </Link>
            ))}
            <Link
              to="/hire-me"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-center rounded-lg bg-cyber-green text-black font-bold"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
