"use client"

import { useRef, useEffect, useState } from "react"

interface AnimatedSkillBarProps {
  name: string
  percentage: number
}

export function AnimatedSkillBar({ name, percentage }: AnimatedSkillBarProps) {
  const [width, setWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(percentage)
          }, 300)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current)
      }
    }
  }, [percentage])

  return (
    <div className="space-y-2" ref={barRef}>
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

