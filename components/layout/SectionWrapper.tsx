'use client'

import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  variant?: 'dark' | 'light'
}

export default function SectionWrapper({
  children,
  className,
  id,
  variant = 'dark',
}: SectionWrapperProps) {
  const bgClass = variant === 'light' ? 'gradient-section-light' : 'gradient-section-dark'

  return (
    <section
      id={id}
      className={cn(
        'py-20 lg:py-32 px-4 sm:px-6 lg:px-8',
        bgClass,
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
