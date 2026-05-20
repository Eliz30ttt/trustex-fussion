'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`glass-effect rounded-xl p-6 group hover:shadow-glow-cyan transition-all duration-300 border-l-2 border-l-accent-cyan ${className}`}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-cyan-blue flex items-center justify-center mb-4 group-hover:shadow-glow-cyan transition-all duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-graphite-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
