'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, MapPin, Shield, Lock } from 'lucide-react'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-section-dark border-t border-graphite-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-cyan-blue flex items-center justify-center text-white font-bold text-sm">
                TX
              </div>
              <span className="text-sm font-bold text-gradient-cyan">Trustex-Fussion</span>
            </div>
            <p className="text-graphite-500 text-sm leading-relaxed mb-6">
              Enterprise-grade digital asset infrastructure and wallet activation platform.
            </p>
            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite-600 hover:text-accent-cyan transition-colors duration-300"
                  aria-label={link.name}
                >
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-graphite-500 text-sm hover:text-accent-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-graphite-500 text-sm hover:text-accent-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-graphite-500 text-sm hover:text-accent-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Security</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.security.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-graphite-500 text-sm hover:text-accent-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-graphite-700 pt-8 mb-8">
          {/* Infrastructure & Compliance Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
              <div>
                <h5 className="text-sm font-semibold text-white mb-1">Enterprise Security</h5>
                <p className="text-graphite-500 text-xs leading-relaxed">
                  Multi-layer verification systems, encrypted infrastructure, and operational security protocols.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Lock className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
              <div>
                <h5 className="text-sm font-semibold text-white mb-1">Compliance Ready</h5>
                <p className="text-graphite-500 text-xs leading-relaxed">
                  Full regulatory compliance, audit trails, and institutional-grade operational standards.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
              <div>
                <h5 className="text-sm font-semibold text-white mb-1">Global Infrastructure</h5>
                <p className="text-graphite-500 text-xs leading-relaxed">
                  Distributed globally, enterprise-grade uptime, and 24/7 operational monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-graphite-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-graphite-600 text-xs text-center md:text-left">
            &copy; {currentYear} Trustex-Fussion. All rights reserved. | Enterprise Digital Asset Infrastructure Platform
          </p>
          <div className="flex items-center space-x-6 text-xs text-graphite-600">
            <a href="/legal/privacy" className="hover:text-accent-cyan transition-colors duration-300">
              Privacy
            </a>
            <a href="/legal/terms" className="hover:text-accent-cyan transition-colors duration-300">
              Terms
            </a>
            <a href="/legal/cookies" className="hover:text-accent-cyan transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
