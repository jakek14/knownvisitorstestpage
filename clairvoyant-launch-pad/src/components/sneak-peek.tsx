import React from 'react'
import { motion } from 'framer-motion'
import techPreview1 from '@/assets/tech-preview-1.jpg'
import techPreview2 from '@/assets/tech-preview-2.jpg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
}

export function SneakPeek() {
  return (
    <section id="technology" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            A glimpse into 
            <span className="text-gradient"> tomorrow</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We're crafting something extraordinary. While we can't reveal everything yet, here's a preview of what's coming.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Intelligent Personalization</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Imagine an AI that understands your unique context, preferences, and goals—without ever compromising your privacy. Our breakthrough approach combines cutting-edge machine learning with advanced cryptographic techniques.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
                <p className="text-muted-foreground">On-device processing for instant responses</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
                <p className="text-muted-foreground">Zero-knowledge data architecture</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
                <p className="text-muted-foreground">Continuous learning without data collection</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={techPreview1}
                alt="Technology preview showing intelligent interface"
                className="w-full h-80 object-cover filter blur-sm hover:blur-none transition-all duration-700 hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-foreground/80 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  Intelligent insights without compromising privacy
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24"
        >
          <motion.div variants={itemVariants} className="relative lg:order-first">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={techPreview2}
                alt="Privacy-first architecture visualization"
                className="w-full h-80 object-cover filter blur-sm hover:blur-none transition-all duration-700 hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-foreground/80 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  Advanced privacy architecture in action
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Privacy-First Architecture</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We've reimagined how AI systems can be both intelligent and private. Our novel approach ensures that your personal information never leaves your device, while still providing the personalized experience you expect.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
                <p className="text-muted-foreground">End-to-end encrypted by default</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
                <p className="text-muted-foreground">Federated learning capabilities</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
                <p className="text-muted-foreground">Open-source privacy auditing</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}