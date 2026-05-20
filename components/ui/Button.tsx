'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-medium transition-all duration-300 rounded-lg inline-flex items-center justify-center whitespace-nowrap'

  const variantClasses = {
    primary: 'bg-gradient-cyan-blue text-white hover:shadow-glow-cyan disabled:opacity-50',
    secondary: 'bg-graphite-700 text-white hover:bg-graphite-600 disabled:opacity-50',
    outline: 'border border-accent-cyan text-accent-cyan hover:bg-graphite-800 disabled:opacity-50',
  }

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-7 py-4 text-lg',
  }

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
