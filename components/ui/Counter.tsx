'use client'

import React, { useEffect, useState } from 'react'

interface CounterProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function Counter({
  target,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [target, duration])

  return (
    <span className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
