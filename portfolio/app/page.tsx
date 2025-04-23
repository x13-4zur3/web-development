import { CertificateCard } from "@/components/certificate-card"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Download, Github, Linkedin, Mail, Twitter, Sparkles } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedSkillBar } from "@/components/animated-skill-bar"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2 animate-fade-in">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  John Doe
                </h1>
                <p className="text-xl text-muted-foreground animate-slide-up animation-delay-300">
                  Full Stack Developer
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-500">
                <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors duration-300">
                  React
                </Badge>
                <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors duration-300">
                  Node.js
                </Badge>
                <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors duration-300">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors duration-300">
                  Next.js
                </Badge>
              </div>
              <div className="flex gap-4 mt-6 animate-fade-in animation-delay-700">
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <a href="mailto:contact@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
              <div className="mt-6 animate-fade-in animation-delay-1000">
                <Button asChild className="relative overflow-hidden group">
                  <a href="/resume.pdf" download>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 group-hover:animate-shimmer"></span>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate full-stack developer with 5+ years of experience building web applications. I
                specialize in React, Node.js, and TypeScript, creating responsive and user-friendly interfaces backed by
                scalable server architectures.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                projects. I'm constantly learning and exploring new technologies to stay at the forefront of web
                development.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-16 md:py-24 bg-muted overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-2xl"></div>

          <div className="container px-4 md:px-6 relative">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 text-center">
                <span className="inline-flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-primary" />
                  Skills
                </span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                My technical expertise and proficiency in various technologies and tools
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" /> Frontend
                  </h3>
                  <AnimatedSkillBar name="React" percentage={90} />
                  <AnimatedSkillBar name="TypeScript" percentage={85} />
                  <AnimatedSkillBar name="Next.js" percentage={80} />
                  <AnimatedSkillBar name="Tailwind CSS" percentage={85} />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Database className="mr-2 h-5 w-5 text-primary" /> Backend
                  </h3>
                  <AnimatedSkillBar name="Node.js" percentage={85} />
                  <AnimatedSkillBar name="Express" percentage={80} />
                  <AnimatedSkillBar name="MongoDB" percentage={75} />
                  <AnimatedSkillBar name="PostgreSQL" percentage={70} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-16 md:py-24 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 text-center">Projects</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A showcase of my recent work and personal projects
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedSection delay={200}>
                <ProjectCard
                  title="E-commerce Platform"
                  description="A full-stack e-commerce solution with payment processing and inventory management."
                  tags={["React", "Node.js", "MongoDB", "Stripe"]}
                  imageUrl="/placeholder.svg?height=200&width=400"
                  demoUrl="https://example.com"
                  repoUrl="https://github.com"
                />
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <ProjectCard
                  title="Task Management App"
                  description="A collaborative task management tool with real-time updates and team features."
                  tags={["Next.js", "TypeScript", "Firebase", "Tailwind"]}
                  imageUrl="/placeholder.svg?height=200&width=400"
                  demoUrl="https://example.com"
                  repoUrl="https://github.com"
                />
              </AnimatedSection>

              <AnimatedSection delay={600}>
                <ProjectCard
                  title="Weather Dashboard"
                  description="A weather application with location-based forecasts and interactive maps."
                  tags={["React", "OpenWeather API", "Mapbox", "CSS"]}
                  imageUrl="/placeholder.svg?height=200&width=400"
                  demoUrl="https://example.com"
                  repoUrl="https://github.com"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative py-16 md:py-24 bg-muted overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl"></div>

          <div className="container px-4 md:px-6 relative">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 text-center">Certifications</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Professional certifications and achievements that validate my expertise
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <AnimatedSection delay={200}>
                <CertificateCard
                  title="AWS Certified Developer"
                  organization="Amazon Web Services"
                  date="June 2023"
                  imageUrl="/placeholder.svg?height=80&width=80"
                  credentialUrl="https://aws.amazon.com/certification/certified-developer-associate/"
                />
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <CertificateCard
                  title="Professional React Developer"
                  organization="Meta"
                  date="March 2023"
                  imageUrl="/placeholder.svg?height=80&width=80"
                  credentialUrl="https://www.meta.com"
                />
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <CertificateCard
                  title="MongoDB Developer Certification"
                  organization="MongoDB University"
                  date="November 2022"
                  imageUrl="/placeholder.svg?height=80&width=80"
                  credentialUrl="https://university.mongodb.com/certification"
                />
              </AnimatedSection>

              <AnimatedSection delay={500}>
                <CertificateCard
                  title="Google Cloud Professional Developer"
                  organization="Google Cloud"
                  date="August 2022"
                  imageUrl="/placeholder.svg?height=80&width=80"
                  credentialUrl="https://cloud.google.com/certification/cloud-developer"
                />
              </AnimatedSection>

              <AnimatedSection delay={600}>
                <CertificateCard
                  title="Certified Kubernetes Application Developer"
                  organization="Cloud Native Computing Foundation"
                  date="May 2022"
                  imageUrl="/placeholder.svg?height=80&width=80"
                  credentialUrl="https://www.cncf.io/certification/ckad/"
                />
              </AnimatedSection>

              <AnimatedSection delay={700}>
                <CertificateCard
                  title="Advanced JavaScript Certification"
                  organization="Udemy"
                  date="January 2022"
                  imageUrl="/placeholder.svg?height=80&width=80"
                  credentialUrl="https://www.udemy.com"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl"></div>

          <div className="container px-4 md:px-6 relative">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 text-center">Get In Touch</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? Send me a message!
              </p>
            </AnimatedSection>

            <div className="max-w-md mx-auto">
              <AnimatedSection delay={200}>
                <div className="bg-card border rounded-lg p-6 shadow-sm">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

