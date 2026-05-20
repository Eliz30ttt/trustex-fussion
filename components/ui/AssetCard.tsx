'use client'

import React from 'react'

interface AssetCardProps {
  symbol: string
  name: string
  description: string
  icon: string
  className?: string
}

export default function AssetCard({
  symbol,
  name,
  description,
  icon,
  className = '',
}: AssetCardProps) {
  return (
    <div
      className={`glass-effect rounded-xl p-6 text-center group hover:shadow-glow-cyan hover:border-accent-cyan transition-all duration-300 ${className}`}
    >
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{symbol}</h3>
      <h4 className="text-sm text-accent-cyan font-medium mb-3">{name}</h4>
      <p className="text-graphite-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
