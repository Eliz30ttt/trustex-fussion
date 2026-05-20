'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface TimelineItem {
  step: number
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan to-accent-blue"></div>

      {/* Timeline items */}
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.step} className="relative">
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-0 top-2 w-16 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-cyan-blue flex items-center justify-center border-4 border-graphite-900 shadow-glow-cyan">
                <Check className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="md:ml-40 glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="md:hidden w-10 h-10 rounded-full bg-gradient-cyan-blue flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-graphite-400 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
