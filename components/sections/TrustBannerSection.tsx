'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Grid from '@/components/ui/Grid'
import MetricCard from '@/components/ui/MetricCard'

export default function TrustBannerSection() {
  const trustItems = [
    {
      label: 'Verification Level',
      value: 'Enterprise',
      description: 'Multi-layer account verification and compliance systems',
    },
    {
      label: 'Security Standard',
      value: 'ISO 27001',
      description: 'International information security certification',
    },
    {
      label: 'Compliance Status',
      value: 'Fully Audited',
      description: 'Regular third-party security audits and assessments',
    },
    {
      label: 'Operational Uptime',
      value: '99.99%',
      description: 'Enterprise-grade infrastructure reliability',
    },
  ]

  return (
    <SectionWrapper variant="light" className="py-16 lg:py-24">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Institutional Trust Standards</h2>
          <p className="text-lg text-graphite-400 leading-relaxed">
            Built on verified security infrastructure, compliance standards, and enterprise-grade operational excellence. Trustex-Fussion is committed to institutional-level transparency and accountability.
          </p>
        </motion.div>

        {/* Trust Metrics */}
        <Grid cols={2} gap="md">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="glass-effect rounded-xl p-6 border-l-4 border-l-accent-cyan">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-graphite-500 mb-1">{item.label}</p>
                    <p className="text-2xl font-bold text-white mb-2">{item.value}</p>
                    <p className="text-sm text-graphite-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Grid>

        {/* Additional Trust Info */}
        <div className="glass-effect rounded-xl p-8 border-b-2 border-b-accent-cyan">
          <h3 className="text-xl font-bold text-white mb-6">Operational Security Framework</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-accent-cyan font-semibold mb-3">Manual Withdrawal Verification</h4>
              <p className="text-graphite-400 text-sm leading-relaxed">Every withdrawal is subject to institutional-grade verification protocols, ensuring complete control and security over all transactions.</p>
            </div>
            <div>
              <h4 className="text-accent-cyan font-semibold mb-3">Continuous Account Monitoring</h4>
              <p className="text-graphite-400 text-sm leading-relaxed">24/7 real-time monitoring systems detect and alert on suspicious activity, ensuring operational security and compliance.</p>
            </div>
            <div>
              <h4 className="text-accent-cyan font-semibold mb-3">Internal Audit Systems</h4>
              <p className="text-graphite-400 text-sm leading-relaxed">Comprehensive audit trails document all transactions and user activities for complete operational transparency and regulatory compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
