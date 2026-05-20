'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Lock, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-cyan-blue rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-blue-indigo rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-indigo rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-6">
                <Zap size={16} className="text-accent-cyan" />
                <span className="text-sm text-accent-cyan font-medium">Enterprise-Grade Infrastructure</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient-cyan">Digital Asset Infrastructure</span>
                <br />
                <span className="text-white">Built for Institutions</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-graphite-400 leading-relaxed max-w-lg"
            >
              Trustex-Fussion provides institutional-grade wallet activation, digital asset management, and Telegram-integrated operational systems for secure, scalable financial infrastructure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group">
                Activate Wallet
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Markets
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-graphite-700"
            >
              <div>
                <p className="text-2xl font-bold text-accent-cyan">50+</p>
                <p className="text-sm text-graphite-500">Digital Assets Supported</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-cyan">99.9%</p>
                <p className="text-sm text-graphite-500">Uptime Guarantee</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-cyan">24/7</p>
                <p className="text-sm text-graphite-500">Operational Monitoring</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Floating Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative h-full min-h-96"
          >
            <motion.div
              variants={itemVariants}
              className="absolute top-0 right-0 w-72 animate-float"
            >
              <Card className="shadow-card-shadow">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Security Verified</h4>
                    <p className="text-sm text-graphite-400">Multi-layer encryption and verification systems</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="absolute top-40 left-10 w-72 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <Card className="shadow-card-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-graphite-500">Active Wallets</span>
                    <span className="text-2xl font-bold text-accent-cyan">2.4M+</span>
                  </div>
                  <div className="w-full h-2 bg-graphite-700 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-cyan-blue"></div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="absolute bottom-0 right-10 w-72 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <Card className="shadow-card-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-graphite-500">Daily Transactions</span>
                    <span className="text-2xl font-bold text-accent-cyan">145K</span>
                  </div>
                  <p className="text-xs text-graphite-400">Institutional infrastructure processing</p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
