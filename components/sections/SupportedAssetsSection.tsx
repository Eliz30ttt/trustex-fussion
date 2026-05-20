'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Grid from '@/components/ui/Grid'
import AssetCard from '@/components/ui/AssetCard'
import { SUPPORTED_ASSETS } from '@/lib/constants'

export default function SupportedAssetsSection() {
  return (
    <SectionWrapper variant="dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Supported Digital Assets</h2>
        <p className="text-lg text-graphite-400 leading-relaxed">
          Trustex-Fussion provides comprehensive infrastructure support for major blockchain ecosystems and digital assets. Secure, institutional-grade access to diversified blockchain networks.
        </p>
      </motion.div>

      <Grid cols={5} gap="md" className="mb-12">
        {SUPPORTED_ASSETS.map((asset, idx) => (
          <motion.div
            key={asset.symbol}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <AssetCard {...asset} />
          </motion.div>
        ))}
      </Grid>

      {/* Asset Details Section */}
      <div className="glass-effect rounded-xl p-8 border-t border-graphite-700">
        <h3 className="text-2xl font-bold text-white mb-8">Asset Ecosystem Overview</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h4 className="text-accent-cyan font-semibold mb-3 flex items-center space-x-2">
              <span className="text-2xl">₿</span>
              <span>Bitcoin Network</span>
            </h4>
            <p className="text-graphite-400 text-sm leading-relaxed">The original blockchain infrastructure. Trustex-Fussion provides secure custody and operational management of BTC assets with institutional-grade verification protocols.</p>
          </div>
          <div>
            <h4 className="text-accent-cyan font-semibold mb-3 flex items-center space-x-2">
              <span className="text-2xl">Ξ</span>
              <span>Ethereum Ecosystem</span>
            </h4>
            <p className="text-graphite-400 text-sm leading-relaxed">Smart contract platform supporting complex financial operations. Full integration with Ethereum infrastructure and token ecosystem management capabilities.</p>
          </div>
          <div>
            <h4 className="text-accent-cyan font-semibold mb-3 flex items-center space-x-2">
              <span className="text-xl">✕</span>
              <span>Cross-Chain Networks</span>
            </h4>
            <p className="text-graphite-400 text-sm leading-relaxed">Multi-blockchain infrastructure enabling seamless cross-chain settlement, interoperability, and unified asset management across distributed networks.</p>
          </div>
          <div>
            <h4 className="text-accent-cyan font-semibold mb-3 flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span>Layer-2 Solutions</span>
            </h4>
            <p className="text-graphite-400 text-sm leading-relaxed">Scalable layer-2 infrastructure integration, enabling faster transaction processing and reduced operational costs while maintaining security standards.</p>
          </div>
          <div>
            <h4 className="text-accent-cyan font-semibold mb-3 flex items-center space-x-2">
              <span className="text-2xl">🔗</span>
              <span>Staking Infrastructure</span>
            </h4>
            <p className="text-graphite-400 text-sm leading-relaxed">Enterprise-grade staking operations for proof-of-stake networks, including delegation, monitoring, and reward management systems.</p>
          </div>
          <div>
            <h4 className="text-accent-cyan font-semibold mb-3 flex items-center space-x-2">
              <span className="text-2xl">🛡️</span>
              <span>Custody Operations</span>
            </h4>
            <p className="text-graphite-400 text-sm leading-relaxed">Cold storage infrastructure, multi-signature protocols, and institutional custody standards for asset safeguarding and operational security.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
