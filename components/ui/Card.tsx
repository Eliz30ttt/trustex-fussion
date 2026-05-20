'use client'

import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  className = '',
  hover = true,
}: CardProps) {
  return (
    <div
      className={`glass-effect rounded-xl p-6 ${
        hover ? 'hover:shadow-glow-cyan transition-all duration-300 hover:border-accent-cyan' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
