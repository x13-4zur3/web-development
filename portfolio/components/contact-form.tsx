"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    // Reset form
    e.currentTarget.reset()
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2 group">
        <Label htmlFor="name" className="group-focus-within:text-primary transition-colors duration-200">
          Name
        </Label>
        <Input
          id="name"
          placeholder="Your name"
          required
          className="transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="space-y-2 group">
        <Label htmlFor="email" className="group-focus-within:text-primary transition-colors duration-200">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Your email"
          required
          className="transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="space-y-2 group">
        <Label htmlFor="message" className="group-focus-within:text-primary transition-colors duration-200">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Your message"
          className="min-h-[120px] transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary"
          required
        />
      </div>
      <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 group-hover:animate-shimmer"></span>
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Message
          </>
        )}
      </Button>
    </form>
  )
}

