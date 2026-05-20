'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FloatingCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FloatingCard({
  children,
  delay = 0,
  className = '',
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: 'easeOut',
      }}
      className={`animate-float ${className}`}
    >
      {children}
    </motion.div>
  )
}
