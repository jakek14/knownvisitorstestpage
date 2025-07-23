import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Users, Search, ArrowRight, MousePointer, Database, Mail } from 'lucide-react'

const useCases = [
  {
    icon: Building2,
    title: "Direct Mail / Catalog Marketers",
    description: "Identify and reach visitors with full name and postal info for physical mail campaigns."
  },
  {
    icon: ShoppingCart,
    title: "Online / DTC Marketers",
    description: "Get email and mailing contacts for non-purchasing site visitors at lower cost than click-based ads."
  },
  {
    icon: Users,
    title: "Lead Generation Companies",
    description: "Recover lost leads by converting anonymous traffic into identifiable contacts."
  },
  {
    icon: Search,
    title: "Research Firms",
    description: "See who's browsing and engage them—even if they don't convert on the first visit."
  }
]

const howItWorksSteps = [
  {
    icon: MousePointer,
    title: "Pixel Installation",
    description: "A small tracking pixel is embedded on your website to monitor visitor sessions."
  },
  {
    icon: Database,
    title: "Database Matching",
    description: "When someone visits, TrySERA checks if that session matches a record in our opt-in database."
  },
  {
    icon: Mail,
    title: "Contact Delivery",
    description: "If matched, you receive that person's email and/or postal details instantly."
  },
  {
    icon: ArrowRight,
    title: "Multi-Channel Retargeting",
    description: "Retarget via email, direct mail, phone, or upload to ad platforms using data you now own."
  }
]

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

export function UseCasesAndProcess() {
  return (
    <>
      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 md:py-32 bg-background">
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
              Who Benefits from 
              <span className="text-gradient"> TrySERA</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              From e-commerce to lead generation, TrySERA helps businesses across industries capture and convert anonymous traffic.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl border bg-card hover-lift cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
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
              How 
              <span className="text-gradient"> It Works</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Our simple 4-step process transforms anonymous visitors into actionable contact data within minutes of implementation.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
                  )}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">The Result</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You can then retarget that visitor—via email, direct mail, phone, or upload to ad platforms—using data you now own. 
                No more paying per click. No more renting lists. Just direct access to your website visitors' contact information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}