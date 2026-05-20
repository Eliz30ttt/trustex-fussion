'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  label: string
  value: string | number
  icon?: LucideIcon
  description?: string
  className?: string
}

export default function MetricCard({
  label,
  value,
  icon: Icon,
  description,
  className = '',
}: MetricCardProps) {
  return (
    <div className={`glass-effect rounded-xl p-6 group hover:shadow-glow-cyan transition-all duration-300 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-graphite-500 text-sm font-medium mb-1">{label}</p>
          <p className="text-3xl font-bold text-gradient-cyan">{value}</p>
        </div>
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-gradient-cyan-blue flex items-center justify-center group-hover:shadow-glow-cyan transition-all duration-300">
            <Icon className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
      {description && <p className="text-graphite-400 text-sm leading-relaxed">{description}</p>}
    </div>
  )
}
