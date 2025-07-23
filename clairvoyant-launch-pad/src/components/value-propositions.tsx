import React from 'react'
import { 
  EyeOpenIcon, 
  LockClosedIcon, 
  CounterClockwiseClockIcon, 
  ComponentInstanceIcon, 
  ReloadIcon 
} from '@radix-ui/react-icons'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'

const features = [
  {
    Icon: EyeOpenIcon,
    name: "Anonymous Traffic Identification",
    description: "Track and identify anonymous website visitors through our proprietary pixel technology, matching sessions against our comprehensive opt-in database.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: ComponentInstanceIcon,
    name: "First-Party Data Ownership",
    description: "Own your visitor data completely—get full contact records including email and postal addresses without ongoing rental fees from ad platforms.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-50" />,
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: CounterClockwiseClockIcon,
    name: "Cost-Efficient Retargeting",
    description: "Pay once for matched contact information instead of per-click retargeting. More affordable than traditional click-based advertising campaigns.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-100 opacity-50" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: LockClosedIcon,
    name: "Opt-in Compliance",
    description: "All data sourced from permission-based, opt-in databases ensuring full compliance with CAN-SPAM and other privacy regulations.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100 opacity-50" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: ReloadIcon,
    name: "Multi-Channel Retargeting",
    description: "Use acquired data across email, direct mail, phone outreach, or upload to ad platforms—complete flexibility in your marketing approach.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-100 opacity-50" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  },
]

export function ValuePropositions() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Core Capabilities
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Transform your anonymous website traffic into actionable contact data with our patent-pending platform
          </p>
        </div>
        
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}