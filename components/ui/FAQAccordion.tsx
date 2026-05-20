'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="glass-effect rounded-xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-graphite-800 transition-colors duration-300"
          >
            <span className="font-medium text-white">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-accent-cyan transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 border-t border-graphite-700 bg-graphite-900 bg-opacity-50">
              <p className="text-graphite-400 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
