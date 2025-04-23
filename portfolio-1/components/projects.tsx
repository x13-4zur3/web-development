"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GithubIcon, ExternalLinkIcon, GamepadIcon, GlobeIcon, ShieldIcon } from "lucide-react"

const categories = ["All", "Game Dev", "Web Dev", "Cybersecurity"]

const projects = [
  {
    id: 1,
    title: "Fantasy RPG Adventure",
    description:
      "A 3D role-playing game built with Unity featuring custom character progression, dynamic combat system, and procedurally generated environments.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Game Dev",
    tags: ["Unity", "C#", "3D Modeling", "Game Design"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Puzzle Platformer",
    description:
      "A 2D puzzle platformer with physics-based mechanics and hand-drawn art style. Features over 50 levels with increasing difficulty.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Game Dev",
    tags: ["Unreal Engine", "C++", "2D Animation", "Level Design"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description:
      "A full-stack web application for managing online store inventory, orders, and customer data with real-time analytics.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Dev",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Personal Blog",
    description:
      "A responsive blog platform built with Next.js and a headless CMS, featuring dark mode, search functionality, and comment system.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Dev",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity.io"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Network Scanner",
    description:
      "A cybersecurity tool for scanning networks, identifying vulnerabilities, and generating detailed reports for system administrators.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Cybersecurity",
    tags: ["Python", "Network Security", "Penetration Testing"],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Password Manager",
    description:
      "A secure password management application with end-to-end encryption, two-factor authentication, and cross-platform synchronization.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Cybersecurity",
    tags: ["JavaScript", "Encryption", "Authentication", "Electron"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Game Dev":
        return <GamepadIcon className="h-4 w-4 mr-2" />
      case "Web Dev":
        return <GlobeIcon className="h-4 w-4 mr-2" />
      case "Cybersecurity":
        return <ShieldIcon className="h-4 w-4 mr-2" />
      default:
        return null
    }
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my skills in game development, web
            technologies, and cybersecurity.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium flex items-center">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

