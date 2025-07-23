import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
}

export function EmailSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    
    toast({
      title: "Welcome to the future!",
      description: "You're now on our exclusive waitlist. We'll be in touch soon.",
    })
  }

  if (isSubmitted) {
    return (
      <section id="signup" className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              You're in!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Welcome to the exclusive group of marketers getting early access to TrySERA. We'll share platform updates, beta access, and implementation guides.
            </p>
            <p className="text-sm text-muted-foreground">
              Keep an eye on your inbox for platform demos and beta access.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="signup" className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Start Identifying Your Visitors Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Join leading marketers who are already turning anonymous traffic into actionable contact data. Get early access to TrySERA's patent-pending platform.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 px-4 text-base bg-background border-2 focus:border-primary transition-colors"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !email}
                className="h-12 px-8 hover-lift group"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </form>

          <p className="text-sm text-muted-foreground mt-6">
            By joining, you agree to receive platform updates and demo invitations. You can unsubscribe at any time.
          </p>

          <div className="flex items-center justify-center space-x-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Free platform demo</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Beta access priority</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Implementation support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}