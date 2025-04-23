"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg"></div>
          </motion.div>

          <div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
            </motion.div>
            <motion.p variants={itemVariants} className="text-muted-foreground mb-4">
              I&apos;m a Computer Science student with a passion for creating innovative solutions through code. My
              journey in technology started with a curiosity about how games work, which led me to explore various
              programming languages and development environments.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
              With experience in both game development and web technologies, I enjoy building interactive experiences
              that engage users. I&apos;m also developing my skills in cybersecurity to ensure that the applications I
              create are not only functional but also secure.
            </motion.p>
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Name</h3>
                  <p className="text-muted-foreground">John Doe</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <p className="text-muted-foreground">john.doe@example.com</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Education</h3>
                  <p className="text-muted-foreground">B.S. Computer Science</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

