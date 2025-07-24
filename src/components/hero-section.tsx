import React, { useState, useEffect } from 'react'
import { Mail, ArrowRight, Check, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { WavyBackground } from '@/components/ui/wavy-background'
import MemberList from '@/components/ui/member-list'
import { motion } from 'framer-motion'
import { DisplayCards } from "@/components/ui/display-cards";
import { AlertTriangle } from "lucide-react";
import RevenueLineGraph from "./RevenueLineGraph";
import type { ChangeEvent } from 'react';
import { HyperText } from "@/components/ui/hyper-text";
import ImageAutoSlider from "@/components/ui/image-auto-slider";
import Timeline from "@/components/ui/timeline-demo";
import { TiltedScroll } from "./ui/tilted-scroll";

import { LockAnimation } from "./ui/lock-animation";
import ThemeToggle from "./ThemeToggle";

const dynamicWords = [
    'Leads',
    'Customers', 
    'Buyers',
    'Subscribers',
    'Clients',
    'Conversions',
    'Revenue',
    'Sales'
]



// Pop animation variants
const popVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  show: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 25
    }
  },
};

export function HeroSection() {
    const [email, setEmail] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedTimeFrame, setSelectedTimeFrame] = useState<'Monthly' | 'Quarterly' | 'Yearly'>('Monthly');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
        }, 4000)
        
        return () => clearInterval(interval)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || isLoading) return
        
        setIsLoading(true)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setIsSubmitted(true)
        setIsLoading(false)
        
        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setEmail('')
        }, 3000)
    }

    const handleTimeFrameChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedTimeFrame(e.target.value as 'Monthly' | 'Quarterly' | 'Yearly');
    };

    return (
            <div className="relative bg-white" data-hero-section>
      {/* Hero Section with Wavy Background */}
      <WavyBackground
        backgroundFill="white"
                waveOpacity={0.3}
                blur={5}
                speed="slow"
                containerClassName="min-h-screen"
            >
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16">
                                                            <div className="relative z-10 mx-auto max-w-4xl text-center">
                        {/* Logo */}
                        <div className="flex justify-center mb-2">
                            <img 
                                src="./logo.png?v=2" 
                                alt="Logo" 
                                className="h-16 sm:h-20 md:h-24 object-contain"
                            />
                        </div>
                        
                        <h1 className="text-balance text-5xl sm:text-6xl md:text-7xl font-bold sm:font-medium leading-tight text-gray-900 text-center">
                            <span className="block">Turn Anonymous</span>
                            <span className="block sm:inline">Visitors Into{' '}</span>
                            <div className="inline-block h-[1.2em] flex items-center justify-center">
                                <HyperText
                                    key={currentWordIndex}
                                    text={dynamicWords[currentWordIndex]}
                                    className="text-black font-bold"
                                    duration={1200}
                                    animateOnLoad={true}
                                />
                            </div>
                        </h1>

                        <p className="mx-auto mt-8 sm:mt-6 max-w-2xl text-pretty text-xl sm:text-lg text-black text-center">
                            KnownVisitors identifies your anonymous website visitors even if they never filled out a form. Transform lost traffic into actionable contact data.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-12 sm:mt-12 mx-auto max-w-md text-center">
                            <div className="relative group">
                                {/* Modern input container with gradient border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-700 to-green-600 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                
                                <div className="relative bg-white rounded-2xl p-1 shadow-xl border border-gray-100">
                                    <div className="flex items-center gap-2 p-2">
                                        {/* Email icon with animation */}
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Mail className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        
                                        {/* Input field */}
                                        <div className="flex-1">
                                            <input
                                                placeholder="Enter your email address"
                                                className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base font-medium text-center"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                disabled={isLoading || isSubmitted}
                                            />
                                        </div>

                                        {/* Submit button */}
                                        <div className="flex-shrink-0">
                                            <Button
                                                type="submit"
                                                disabled={!email || isLoading || isSubmitted}
                                                className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                            >
                                                {isLoading ? (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                        <span className="hidden sm:inline">Joining...</span>
                                                    </div>
                                                ) : isSubmitted ? (
                                                    <div className="flex items-center gap-2 text-green-100">
                                                        <Check className="w-4 h-4" />
                                                        <span className="hidden sm:inline">Joined!</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <span className="hidden sm:inline">Join Waitlist</span>
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                    </div>
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Success message */}
                                {isSubmitted && (
                                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-green-700 text-sm font-medium animate-in slide-in-from-bottom-2 duration-300">
                                        🎉 Welcome to the waitlist! We'll notify you soon.
                                    </div>
                                )}
                            </div>
                        </form>

                        <div className="relative mt-12 sm:mt-8 mx-auto max-w-6xl px-4 sm:px-0 text-center">
                            <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border overflow-hidden relative transform hover:scale-[1.02] transition-transform duration-300">
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
                                <div className="absolute inset-0 rounded-xl shadow-inner pointer-events-none" />
                                <div className="h-[400px] sm:h-[500px] overflow-y-hidden md:overflow-y-auto">
                                    <MemberList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </WavyBackground>

            {/* Text Bar Section */}
            <div
                className="py-16 mt-32 relative overflow-hidden animate-gradient"
                style={{ 
                    background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 25%, #15803d 50%, #166534 75%, #14532d 100%)',
                    backgroundSize: '200% 100%'
                }}
            >
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                            duration: 1.2, 
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.2
                        }}
                        className="text-white text-lg sm:text-xl lg:text-3xl font-normal leading-relaxed"
                    >
                        Why Guess Who's on Your Site? Instantly Identify Anonymous Visitors, Capture Insights, Optimize Engagement, and Fuel Smarter Marketing.
                    </motion.p>
                </div>
            </div>

            {/* Multirow Product Description Section */}
            <section className="relative pt-16 pb-16">
              <div className="bg-gray-50 pb-32 pt-16 -mt-16">
                <div className="max-w-7xl mx-auto px-6">
                  <h2 className="text-4xl sm:text-7xl font-bold text-center mb-24 text-black leading-tight pt-10">
                    Understand Your Customers<br />
                    <span className="block text-black">Both New And Returning</span>
                  </h2>
                  <div className="max-w-7xl mx-auto px-6 grid gap-20 sm:gap-40">
                    {/* Row 1 */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
                      variants={popVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <div className="w-full min-h-80 flex items-center justify-center mr-20">
                        {/* DisplayCardsDemo component */}
                        <DisplayCards cards={[
                              {
                                icon: <AlertTriangle className="size-4 text-green-300" />,
                                title: "Alert",
                                description: "John Doe has visited your website",
                                date: "1 day ago",
                                iconClassName: "text-green-500",
                                titleClassName: "text-green-500",
                                className:
                                  "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                              },
                              {
                                icon: <AlertTriangle className="size-4 text-green-300" />,
                                title: "Alert",
                                description: "Jane Smith has visited your website",
                                date: "1 day ago",
                                iconClassName: "text-green-500",
                                titleClassName: "text-green-500",
                                className:
                                  "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                              },
                              {
                                icon: <AlertTriangle className="size-4 text-green-300" />,
                                title: "Alert",
                                description: "Mike Johnson has visited your website",
                                date: "1 day ago",
                                iconClassName: "text-green-500",
                                titleClassName: "text-green-500",
                                className:
                                  "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
                              },
                            ]} />
                      </div>
                      <div className="w-full">
                        <h4 className="text-2xl font-bold text-green-600 mb-4">See Who's Visiting</h4>
                        <h3 className="text-4xl font-bold mb-8 text-gray-900">Visitor Recognition</h3>
                        <p className="text-2xl text-gray-700 mb-4">With a single pixel, knownvisitors.com reveals the full picture of your website traffic — surfacing both known customers and previously anonymous visitors as they arrive.</p>
                      </div>
                    </motion.div>
                    {/* Row 2 (flipped order) */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
                      variants={popVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <div className="order-2 md:order-1 min-h-80">
                        <h4 className="text-2xl font-bold text-green-600 mb-4">Uncover Missed Sales</h4>
                        <h3 className="text-4xl font-bold mb-8 text-gray-900">Capture Hidden Revenue</h3>
                        <p className="text-2xl text-gray-700 mb-4">Many of your highest-value shoppers never log in.</p>
                        <p className="text-2xl text-gray-700">Now you can identify these anonymous browsers and deliver 5x more personalized outreach — from emails and texts to push notifications.</p>
                      </div>
                      <div className="order-1 md:order-2 w-full flex justify-center rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden">
                        <div className="w-full overflow-hidden">
                          {/* Manually recreated header */}
                          <div className="flex justify-between items-center mb-2 w-full px-4 pt-4">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1v22M5 5h14M5 19h14" /></svg>
                              </div>
                              <h2 className="text-xl font-bold text-foreground">Growing Revenue</h2>
                            </div>
                            <div className="relative">
                              <select
                                value={selectedTimeFrame}
                                onChange={handleTimeFrameChange}
                                className="bg-gray-50 text-muted-foreground rounded-full pl-3 pr-8 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer border border-border shadow-sm transition-all duration-200 hover:bg-white/80 focus:bg-white/90"
                              >
                                <option value="Monthly">Monthly</option>
                                <option value="Quarterly">Quarterly</option>
                                <option value="Yearly">Yearly</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <RevenueLineGraph selectedTimeFrame={selectedTimeFrame} />
                        </div>
                      </div>
                    </motion.div>
                    {/* Row 3 */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center hidden"
                      variants={popVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <div className="w-full flex justify-center min-h-48 sm:min-h-80">
                        <ImageAutoSlider />
                      </div>
                      <div className="w-full">
                        <h4 className="text-2xl font-bold text-green-600 mb-4">Works with Your Tools</h4>
                        <h3 className="text-4xl font-bold mb-8 text-gray-900">Plug and Play with Your Current Stack</h3>
                        <p className="text-2xl text-gray-700 mb-4">knownvisitors.com integrates effortlessly with your favorite ecommerce, CRM, and marketing platforms.</p>
                        <p className="text-2xl text-gray-700">Feed real-time visitor data into your existing systems to sharpen targeting, boost personalization, and increase ROI from channels you control.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Cards Section */}
            <section className="relative -mt-[2rem] sm:-mt-[3rem] pt-32 sm:pt-24 pb-64 bg-white">
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-20">
                    {/* Light gradient circle behind the container */}
                    <div className="absolute -right-48 top-1/2 transform -translate-y-1/2 pointer-events-none z-0">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-green-300/40 via-green-400/30 to-green-300/20 blur-3xl"></div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white rounded-2xl p-8 sm:p-16 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 hover:rotate-1 hidden sm:block relative z-30" 
                        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 35px 70px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)';
                        }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">Data you can act on, instantly</h2>
                                <p className="text-xl sm:text-lg text-gray-600 mb-8">
                                    Your dashboard shouldn't just display numbers — it should unlock insight.
                                </p>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">See Emails, Phone Numbers, and More</h3>
                                        <p className="text-gray-600">
                                            Instantly access verified customer data, from contact info to behavioral traits.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Uncover Postal Codes and Location</h3>
                                        <p className="text-gray-600">
                                            Localize outreach and segment based on visitor geography.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Filter, Sort, and Export</h3>
                                        <p className="text-gray-600">
                                            Use smart filters or export enriched data to your CRM, ESP, or ad platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Image */}
                            <div>
                                <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-2xl border overflow-hidden relative transform hover:scale-[1.02] transition-all duration-300" style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(-15deg) rotateX(5deg)'}>
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
                                    <div className="absolute inset-0 rounded-xl shadow-inner pointer-events-none" />
                                    <div className="h-[200px] sm:h-[250px] overflow-x-auto overflow-y-hidden">
                                        <div className="w-full relative">
                                          {/* Desktop Table - 3 columns only */}
                                          <div className="hidden md:block">
                                            <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                                              {/* Header */}
                                              <div className="bg-gray-50 grid grid-cols-[1fr_0.8fr_2fr]">
                                                <div className="py-2 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Name
                                                  </div>
                                                </div>
                                                <div className="py-2 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Phone
                                                  </div>
                                                </div>
                                                <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Email
                                                  </div>
                                                </div>
                                              </div>
                                              
                                              {/* Content */}
                                              <div className="bg-white divide-y divide-gray-200">
                                                {[
                                                  { id: 1, name: "John Smith", email: "john.smith@techcorp.com", phone: "+1 (555) 123-4567" },
                                                  { id: 2, name: "Sarah Johnson", email: "sarah.j@designstudio.com", phone: "+1 (555) 234-5678" },
                                                  { id: 3, name: "Mike Wilson", email: "mike.wilson@marketingpro.com", phone: "+1 (555) 345-6789" },
                                                  { id: 4, name: "Emily Davis", email: "emily.d@startupinc.com", phone: "+1 (555) 456-7890" },
                                                  { id: 5, name: "David Brown", email: "david.brown@consulting.com", phone: "+1 (555) 567-8901" }
                                                ].map((member) => (
                                                  <div key={member.id} className="grid grid-cols-[1fr_0.8fr_2fr] hover:bg-gray-50">
                                                    <div className="py-2 whitespace-nowrap text-sm font-medium text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.name}
                                                      </div>
                                                    </div>
                                                    <div className="py-2 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.phone}
                                                      </div>
                                                    </div>
                                                    <div className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.email}
                                                      </div>
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          </div>

                                          {/* Mobile Table - Names and Emails only */}
                                          <div className="md:hidden">
                                            <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                                              {/* Header */}
                                              <div className="bg-gray-50 grid grid-cols-[0.8fr_1.2fr]">
                                                <div className="py-1 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Name
                                                  </div>
                                                </div>
                                                <div className="py-1 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Email
                                                  </div>
                                                </div>
                                              </div>
                                              
                                              {/* Content */}
                                              <div className="bg-white divide-y divide-gray-200">
                                                {[
                                                  { id: 1, name: "John Smith", email: "john.smith@techcorp.com" },
                                                  { id: 2, name: "Sarah Johnson", email: "sarah.j@designstudio.com" },
                                                  { id: 3, name: "Mike Wilson", email: "mike.wilson@marketingpro.com" },
                                                  { id: 4, name: "Emily Davis", email: "emily.d@startupinc.com" },
                                                  { id: 5, name: "David Brown", email: "david.brown@consulting.com" },
                                                  { id: 6, name: "Lisa Garcia", email: "lisa.garcia@digitalagency.com" },
                                                  { id: 7, name: "Alex Chen", email: "alex.chen@innovate.com" },
                                                  { id: 8, name: "Maria Rodriguez", email: "maria.r@creative.com" }
                                                ].map((member) => (
                                                  <div key={member.id} className="grid grid-cols-[0.8fr_1.2fr] hover:bg-gray-50">
                                                    <div className="py-1 whitespace-nowrap text-xs font-medium text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.name}
                                                      </div>
                                                    </div>
                                                    <div className="py-1 whitespace-nowrap text-xs text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.email}
                                                      </div>
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          </div>
                                          
                                          {/* Export button positioned in top right corner */}
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            className="absolute top-2 right-2 h-8 w-8 p-0 bg-white border-gray-300 hover:bg-gray-50 shadow-sm"
                                          >
                                            <Download className="h-4 w-4" />
                                          </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Mobile version without card hover animation */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white rounded-2xl p-8 sm:p-16 shadow-2xl border border-gray-200 block sm:hidden relative z-30" 
                        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">Data you can act on, instantly</h2>
                                <p className="text-xl sm:text-lg text-gray-600 mb-8">
                                    Your dashboard shouldn't just display numbers — it should unlock insight.
                                </p>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">See Emails, Phone Numbers, and More</h3>
                                        <p className="text-gray-600">
                                            Instantly access verified customer data, from contact info to behavioral traits.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Uncover Postal Codes and Location</h3>
                                        <p className="text-gray-600">
                                            Localize outreach and segment based on visitor geography.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Filter, Sort, and Export</h3>
                                        <p className="text-gray-600">
                                            Use smart filters or export enriched data to your CRM, ESP, or ad platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Image */}
                            <div>
                                <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-2xl border overflow-hidden relative transform hover:scale-[1.02] transition-all duration-300" style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(-15deg) rotateX(5deg)'}>
                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
                                    <div className="absolute inset-0 rounded-xl shadow-inner pointer-events-none" />
                                    <div className="h-[200px] sm:h-[250px] overflow-x-auto overflow-y-hidden">
                                        <div className="w-full relative">
                                          {/* Desktop Table - 3 columns only */}
                                          <div className="hidden md:block">
                                            <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                                              {/* Header */}
                                              <div className="bg-gray-50 grid grid-cols-[1fr_0.8fr_2fr]">
                                                <div className="py-2 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Name
                                                  </div>
                                                </div>
                                                <div className="py-2 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Phone
                                                  </div>
                                                </div>
                                                <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Email
                                                  </div>
                                                </div>
                                              </div>
                                              
                                              {/* Content */}
                                              <div className="bg-white divide-y divide-gray-200">
                                                {[
                                                  { id: 1, name: "John Smith", email: "john.smith@techcorp.com", phone: "+1 (555) 123-4567" },
                                                  { id: 2, name: "Sarah Johnson", email: "sarah.j@designstudio.com", phone: "+1 (555) 234-5678" },
                                                  { id: 3, name: "Mike Wilson", email: "mike.wilson@marketingpro.com", phone: "+1 (555) 345-6789" },
                                                  { id: 4, name: "Emily Davis", email: "emily.d@startupinc.com", phone: "+1 (555) 456-7890" },
                                                  { id: 5, name: "David Brown", email: "david.brown@consulting.com", phone: "+1 (555) 567-8901" }
                                                ].map((member) => (
                                                  <div key={member.id} className="grid grid-cols-[1fr_0.8fr_2fr] hover:bg-gray-50">
                                                    <div className="py-2 whitespace-nowrap text-sm font-medium text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.name}
                                                      </div>
                                                    </div>
                                                    <div className="py-2 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.phone}
                                                      </div>
                                                    </div>
                                                    <div className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.email}
                                                      </div>
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          </div>

                                          {/* Mobile Table - Names and Emails only */}
                                          <div className="md:hidden">
                                            <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                                              {/* Header */}
                                              <div className="bg-gray-50 grid grid-cols-[0.8fr_1.2fr]">
                                                <div className="py-1 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Name
                                                  </div>
                                                </div>
                                                <div className="py-1 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
                                                  <div className="text-left">
                                                    Email
                                                  </div>
                                                </div>
                                              </div>
                                              
                                              {/* Content */}
                                              <div className="bg-white divide-y divide-gray-200">
                                                {[
                                                  { id: 1, name: "John Smith", email: "john.smith@techcorp.com" },
                                                  { id: 2, name: "Sarah Johnson", email: "sarah.j@designstudio.com" },
                                                  { id: 3, name: "Mike Wilson", email: "mike.wilson@marketingpro.com" },
                                                  { id: 4, name: "Emily Davis", email: "emily.d@startupinc.com" },
                                                  { id: 5, name: "David Brown", email: "david.brown@consulting.com" },
                                                  { id: 6, name: "Lisa Garcia", email: "lisa.garcia@digitalagency.com" },
                                                  { id: 7, name: "Alex Chen", email: "alex.chen@innovate.com" },
                                                  { id: 8, name: "Maria Rodriguez", email: "maria.r@creative.com" }
                                                ].map((member) => (
                                                  <div key={member.id} className="grid grid-cols-[0.8fr_1.2fr] hover:bg-gray-50">
                                                    <div className="py-1 whitespace-nowrap text-xs font-medium text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.name}
                                                      </div>
                                                    </div>
                                                    <div className="py-1 whitespace-nowrap text-xs text-gray-900 flex justify-center">
                                                      <div className="text-left">
                                                        {member.email}
                                                      </div>
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          </div>
                                          
                                          {/* Export button positioned in top right corner */}
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            className="absolute top-2 right-2 h-8 w-8 p-0 bg-white border-gray-300 hover:bg-gray-50 shadow-sm"
                                          >
                                            <Download className="h-4 w-4" />
                                          </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Setup Made Simple Section */}
            <section className="relative -mt-4 sm:-mt-8 pb-0 sm:pb-0 bg-white">
              <div className="relative mx-auto max-w-full px-0 z-10">
                <div className="text-center mb-0 pb-0 sm:mb-4">
                  <h2 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-3 text-gray-900">Setup Made Simple</h2>
                  <div className="text-lg sm:text-xl text-muted-foreground font-normal">
                    <span className="block sm:hidden">Quick setup. Instant visibility.<br />Smarter marketing.</span>
                    <span className="hidden sm:inline">Quick setup. Instant visibility. Smarter marketing.</span>
                  </div>
                </div>
                <div className="-mt-12 sm:-mt-8">
                  <Timeline />
                </div>
              </div>
            </section>
            {/* End Setup Made Simple Section */}

            {/* Cards Section - L-Shape Layout */}
            <section className="relative -mt-[20rem] sm:-mt-[24rem] bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-30">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Card 3 - Vertical, Left Side */}
                        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 relative z-30">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Hidden Funnel Just Got Exposed</h3>
                            <p className="text-lg text-gray-600 mb-6">
                                You're only seeing a fraction of your funnel. KnownVisitors uncovers who's actually moving through it.
                            </p>
                            <div className="h-[16rem] rounded-xl flex items-center justify-center">
                                <LockAnimation 
                                    size={1.5}
                                    autoAnimate={true}
                                    autoAnimateInterval={4000}
                                />
                            </div>
                        </div>

                        {/* Right Side Container */}
                        <div className="lg:col-span-2 space-y-6">
                                                        {/* Card 1 - Top */}
                            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 relative z-30">
                                <div className="flex flex-col lg:flex-row items-center gap-6">
                                    <div className="flex-1 w-full lg:w-auto">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Effortless List Growth</h3>
                                        <p className="text-lg text-gray-600 mb-6">
                                            Grow your email and SMS lists with real, high-intent contacts — without relying on popups or gated content.
                                        </p>
                                    </div>
                                    <div className="flex-1 w-full lg:w-auto">
                                        <div className="h-40 rounded-xl flex items-center justify-center">
                                            <TiltedScroll className="scale-75" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 - Bottom */}
                            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 relative z-30">
                                <div className="flex flex-col lg:flex-row items-center gap-6">
                                    <div className="flex-1 w-full lg:w-auto">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Fits Right Into Your Workflow</h3>
                                        <p className="text-lg text-gray-600 mb-6">
                                            No need to change your tools — just enhance them. KnownVisitors plugs into your existing marketing setup.
                                        </p>
                                    </div>
                                    <div className="flex-1 w-full lg:w-auto">
                                        <div className="h-40 rounded-xl flex items-center justify-center bg-transparent">
                                            <div className="grid grid-cols-4 gap-3 p-4">
                                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)' }}>
                                                    <img src="./Meta.png" alt="Meta" className="w-12 h-12 object-contain" />
                                                </div>
                                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)' }}>
                                                    <img src="./Snapchat.png" alt="Snapchat" className="w-12 h-12 object-contain" />
                                                </div>
                                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)' }}>
                                                    <img src="./Google.png" alt="Google" className="w-12 h-12 object-contain" />
                                                </div>
                                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)' }}>
                                                    <img src="./Tiktok.png" alt="TikTok" className="w-12 h-12 object-contain" />
                                                </div>
                                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)' }}>
                                                    <img src="./Wix.png" alt="Wix" className="w-12 h-12 object-contain" />
                                                </div>
                                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)' }}>
                                                    <img src="./Shopify.png" alt="Shopify" className="w-12 h-12 object-contain" />
                                                </div>
                                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)' }}>
                                                    <img src="./Squarespace.png" alt="Squarespace" className="w-12 h-12 object-contain" />
                                                </div>
                                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)' }}>
                                                    <img src="./Big.png" alt="Big" className="w-12 h-12 object-contain" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Cloned Row 1 - Visitor Recognition */}
                <div className="max-w-7xl mx-auto px-6 mt-20">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
                        variants={popVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="w-full min-h-80 flex items-center justify-center mr-20">
                            {/* DisplayCardsDemo component */}
                            <DisplayCards cards={[
                                {
                                    icon: <AlertTriangle className="size-4 text-green-300" />,
                                    title: "Alert",
                                    description: "John Doe has visited your website",
                                    date: "1 day ago",
                                    iconClassName: "text-green-500",
                                    titleClassName: "text-green-500",
                                    className:
                                        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                                },
                                {
                                    icon: <AlertTriangle className="size-4 text-green-300" />,
                                    title: "Alert",
                                    description: "Jane Smith has visited your website",
                                    date: "1 day ago",
                                    iconClassName: "text-green-500",
                                    titleClassName: "text-green-500",
                                    className:
                                        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                                },
                                {
                                    icon: <AlertTriangle className="size-4 text-green-300" />,
                                    title: "Alert",
                                    description: "Mike Johnson has visited your website",
                                    date: "1 day ago",
                                    iconClassName: "text-green-500",
                                    titleClassName: "text-green-500",
                                    className:
                                        "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
                                },
                            ]} />
                        </div>
                        <div className="w-full">
                            <h4 className="text-2xl font-bold text-green-600 mb-4">See Who's Visiting</h4>
                            <h3 className="text-4xl font-bold mb-8 text-gray-900">Visitor Recognition</h3>
                            <p className="text-2xl text-gray-700 mb-4">With a single pixel, knownvisitors.com reveals the full picture of your website traffic — surfacing both known customers and previously anonymous visitors as they arrive.</p>
                        </div>
                    </motion.div>
                </div>
                
                {/* Join Waitlist Button and Theme Toggle */}
                <div className="text-center mt-16">
                    <div className="flex items-center justify-center gap-4">
                        <Button 
                            variant="outline"
                            onClick={() => {
                                const heroSection = document.querySelector('[data-hero-section]');
                                if (heroSection) {
                                    heroSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="bg-green-600 hover:bg-green-700 text-white hover:text-white rounded-2xl px-12 py-6 font-semibold text-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 hover:shadow-3xl border-green-600 relative overflow-hidden group shadow-[0_8px_0_rgb(22,163,74)] hover:shadow-[0_4px_0_rgb(22,163,74)] hover:translate-y-1"
                        >
                            <span className="relative z-10">Join the Waitlist</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                        <ThemeToggle />
                    </div>
                </div>
            </section>

            {/* Bottom spacing to ensure scrollability */}
            <div className="h-20"></div>
        </div>
    )
} 
