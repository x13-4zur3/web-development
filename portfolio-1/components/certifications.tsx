"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheckIcon, AwardIcon } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "January 2023",
    description: "Validates expertise in designing and deploying scalable systems on AWS.",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Networking"],
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "March 2023",
    description: "Demonstrates ability to design, build, test, and maintain cloud applications on Microsoft Azure.",
    skills: ["Azure Services", "Cloud Development", "API Integration", "Authentication"],
  },
  {
    id: 3,
    title: "Unity Certified Developer",
    issuer: "Unity Technologies",
    date: "June 2022",
    description: "Validates proficiency in developing interactive applications and games using Unity.",
    skills: ["C#", "Game Development", "3D Graphics", "Physics Simulation"],
  },
  {
    id: 4,
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "September 2023",
    description:
      "Demonstrates knowledge of penetration testing, vulnerability assessment, and ethical hacking techniques.",
    skills: ["Network Security", "Penetration Testing", "Vulnerability Assessment", "Security Tools"],
  },
]

export default function Certifications() {
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
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;ve earned several industry-recognized certifications that validate my skills and knowledge in various
            technology domains.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <BadgeCheckIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <span>{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
            <AwardIcon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m committed to continuous learning and regularly update my skills through online courses, workshops,
            and hands-on projects. Currently pursuing additional certifications in advanced game development and
            cybersecurity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

