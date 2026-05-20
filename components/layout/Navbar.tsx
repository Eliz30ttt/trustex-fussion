'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Send } from 'lucide-react'
import { NAVIGATION_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect-dark border-b border-graphite-600'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-cyan-blue flex items-center justify-center text-white font-bold text-lg group-hover:shadow-glow-cyan transition-all duration-300">
              TX
            </div>
            <span className="text-xl font-bold hidden sm:inline text-gradient-cyan">Trustex-Fussion</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-graphite-500 hover:text-accent-cyan transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-cyan-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://t.me/trustex_fussion"
              className="inline-flex items-center space-x-2 px-4 py-2 text-sm text-accent-cyan hover:text-white border border-accent-cyan hover:border-accent-cyan rounded-lg transition-all duration-300 hover:shadow-glow-cyan"
            >
              <Send size={16} />
              <span>Telegram</span>
            </a>
            <Link
              href="/wallet-activation"
              className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-gradient-cyan-blue rounded-lg hover:shadow-glow-cyan transition-all duration-300"
            >
              Activate Wallet
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-graphite-500 hover:text-accent-cyan hover:bg-graphite-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-graphite-700 py-4 space-y-2 bg-gradient-section-dark">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm text-graphite-500 hover:text-accent-cyan hover:bg-graphite-800 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-graphite-700 space-y-2">
              <a
                href="https://t.me/trustex_fussion"
                className="block px-4 py-3 text-sm text-accent-cyan border border-accent-cyan rounded-lg hover:bg-graphite-800 transition-colors duration-200 text-center"
              >
                Telegram
              </a>
              <Link
                href="/wallet-activation"
                className="block px-4 py-3 text-sm font-medium text-white bg-gradient-cyan-blue rounded-lg text-center hover:shadow-glow-cyan transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Activate Wallet
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
