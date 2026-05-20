'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Timeline from '@/components/ui/Timeline'

export default function WalletActivationFlowSection() {
  const activationSteps = [
    {
      step: 1,
      title: 'Account Registration',
      description: 'Create your Trustex-Fussion account with basic institutional information. Secure sign-up process with email verification and two-factor authentication setup.',
    },
    {
      step: 2,
      title: 'Verification Process',
      description: 'Complete comprehensive identity verification and compliance requirements. Institutional-grade KYC/AML procedures ensure regulatory compliance and operational security.',
    },
    {
      step: 3,
      title: 'Wallet Setup',
      description: 'Configure your digital wallet with security settings and operational preferences. Choose from multiple wallet types and configure multi-signature protocols if needed.',
    },
    {
      step: 4,
      title: 'Telegram Integration',
      description: 'Connect your Telegram account for instant notifications and operational management. Secure API integration enables real-time monitoring and activity alerts.',
    },
    {
      step: 5,
      title: 'Asset Activation',
      description: 'Activate support for your desired digital assets. Institutional setup includes asset allocation, transfer protocols, and operational workflow configuration.',
    },
    {
      step: 6,
      title: 'Full Operational Control',
      description: 'Access complete wallet management, transaction monitoring, and Telegram dashboard. Begin managing your digital assets with institutional-grade infrastructure and controls.',
    },
  ]

  return (
    <SectionWrapper variant="light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Wallet Activation Workflow</h2>
        <p className="text-lg text-graphite-400 leading-relaxed">
          Simple, secure, and institutional-grade wallet activation process designed for enterprise users. Get verified, activated, and operational in minutes.
        </p>
      </motion.div>

      <Timeline items={activationSteps} />

      {/* Process Info Cards */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">Security First Approach</h3>
          <ul className="space-y-3 text-graphite-400 text-sm">
            <li className="flex items-start space-x-3">
              <span className="text-accent-cyan mt-1">✓</span>
              <span>Multi-factor authentication on all access points</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent-cyan mt-1">✓</span>
              <span>Encrypted end-to-end communication protocols</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent-cyan mt-1">✓</span>
              <span>Institutional-grade custody and cold storage</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent-cyan mt-1">✓</span>
              <span>Regular security audits and penetration testing</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-effect rounded-xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">Operational Excellence</h3>
          <ul className="space-y-3 text-graphite-400 text-sm">
            <li className="flex items-start space-x-3">
              <span className="text-accent-cyan mt-1">✓</span>
              <span>24/7 operational monitoring and support</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent-cyan mt-1">✓</span>
              <span>Real-time transaction notifications via Telegram</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent-cyan mt-1">✓</span>
              <span>Comprehensive audit trails and reporting</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent-cyan mt-1">✓</span>
              <span>Institutional-grade API access for integration</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
