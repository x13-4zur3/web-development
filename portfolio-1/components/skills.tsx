"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2Icon, GamepadIcon, GlobeIcon, ShieldIcon, CloudIcon, CuboidIcon as Cube3dIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  {
    title: "Programming Languages",
    icon: <Code2Icon className="h-10 w-10 text-primary" />,
    description:
      "Proficient in Python, C++, JavaScript, and TypeScript with experience in building various applications.",
    items: ["Python", "C++", "JavaScript", "TypeScript", "Java", "C#"],
  },
  {
    title: "Game Development",
    icon: <GamepadIcon className="h-10 w-10 text-primary" />,
    description:
      "Experience in creating games using Unity and Unreal Engine with a focus on gameplay mechanics and optimization.",
    items: ["Unity", "Unreal Engine", "Game Design", "Level Design", "Physics Simulation"],
  },
  {
    title: "Web Development",
    icon: <GlobeIcon className="h-10 w-10 text-primary" />,
    description: "Building responsive and interactive web applications using modern frameworks and libraries.",
    items: ["React", "Next.js", "HTML/CSS", "Node.js", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Cybersecurity",
    icon: <ShieldIcon className="h-10 w-10 text-primary" />,
    description: "Basic knowledge of security principles, vulnerability assessment, and secure coding practices.",
    items: ["Network Security", "Penetration Testing", "Secure Coding", "Authentication"],
  },
  {
    title: "Cloud Services",
    icon: <CloudIcon className="h-10 w-10 text-primary" />,
    description: "Experience with AWS services and Microsoft Azure for deploying and managing applications.",
    items: ["AWS", "Microsoft Azure", "Cloud Deployment", "Serverless Architecture"],
  },
  {
    title: "3D Modeling",
    icon: <Cube3dIcon className="h-10 w-10 text-primary" />,
    description: "Basic skills in creating 3D models and animations using Blender for game assets and visualizations.",
    items: ["Blender", "3D Modeling", "Texturing", "Animation", "Rendering"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;ve developed a diverse set of skills throughout my academic and personal projects. Here are the key
            areas where I excel:
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="mb-4">{skill.icon}</div>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
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

