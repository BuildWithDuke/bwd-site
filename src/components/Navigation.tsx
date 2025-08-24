'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
  loading: () => <div className="w-10 h-10 rounded-full bg-muted border border-border" />
});

const Navigation: React.FC = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <svg width="200" height="60" viewBox="0 0 200 60" className="h-16">
              <g transform="translate(12, 12)">
                <path d="M20 7L8 25H16L12 37L24 19H16L20 7Z" fill="currentColor" className="text-accent"/>
              </g>
              <text x="52" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="700" fill="currentColor" className="text-foreground">
                Build
              </text>
              <text x="52" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="700" fill="currentColor" className="text-accent">
                WithDuke
              </text>
            </svg>
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-accent ${
                    pathname === item.href ? 'text-accent' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;