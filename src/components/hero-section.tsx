'use client'
import React, { useState, useEffect } from 'react'
import { Mail, Send, Menu, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { WavyBackground } from '@/components/ui/wavy-background'
import MemberList from '@/components/ui/member-list'
import { motion } from 'framer-motion'
import { DisplayCards, type DisplayCardProps } from "@/components/ui/display-cards";
import { AlertTriangle } from "lucide-react";
import RevenueLineGraph from "./RevenueLineGraph";
import type { ChangeEvent } from 'react';
import HyperText from "@/components/ui/hyper-text";
import ImageAutoSlider from "@/components/ui/image-auto-slider";
import Timeline from "@/components/ui/timeline-demo";

const dynamicWords = [
    'Leads',
    'Customers', 
    'Buyers',
    'Subscribers',
    'Clients',
    'Conversions',
    'Opportunities',
    'Revenue',
    'Sales'
]

// Animation variants for synchronized entry
const rowVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
        <div className="relative bg-white">
            {/* Hero Section with Wavy Background */}
            <WavyBackground 
                backgroundFill="white"
                waveOpacity={0.3}
                blur={5}
                speed="slow"
                containerClassName="min-h-screen"
            >
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-32">
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
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
                            KnownVisitor identifies your anonymous website visitors and provides their email and postal addresses—even if they never filled out a form. Transform lost traffic into actionable contact data.
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
                                <div className="h-[400px] sm:h-[500px] overflow-y-auto">
                                    <MemberList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </WavyBackground>

            {/* Text Bar Section */}
            <div
                className="py-16 mt-32"
                style={{ background: 'linear-gradient(90deg, #3bb143 0%, #2d8a35 50%, #4caf50 100%)' }}
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
                        className="text-white text-2xl sm:text-2xl lg:text-5xl font-normal leading-relaxed"
                    >
                        Why Guess Who's on Your Site? Instantly Identify Anonymous Visitors, Capture Insights, Optimize Engagement, and Fuel Smarter Marketing.
                    </motion.p>
                </div>
            </div>

            {/* Multirow Product Description Section */}
            <section className="relative pt-16 pb-16">
              <div className="bg-gray-50 pb-16 pt-16 -mt-16">
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
                                  "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                              },
                              {
                                icon: <AlertTriangle className="size-4 text-green-300" />,
                                title: "Alert",
                                description: "Jane Smith has visited your website",
                                date: "1 day ago",
                                iconClassName: "text-green-500",
                                titleClassName: "text-green-500",
                                className:
                                  "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
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
                        <p className="text-2xl text-gray-700 mb-4">With a single pixel, knownvisitor.com reveals the full picture of your website traffic — surfacing both known customers and previously anonymous visitors as they arrive.</p>
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
                      <div className="order-1 md:order-2 w-full flex justify-center rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="w-full">
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
                                className="bg-muted text-muted-foreground rounded-full pl-3 pr-8 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer border border-border shadow-sm transition-all duration-200 hover:bg-background/80 focus:bg-background/90"
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
                      className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
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
                        <p className="text-2xl text-gray-700 mb-4">knownvisitor.com integrates effortlessly with your favorite ecommerce, CRM, and marketing platforms.</p>
                        <p className="text-2xl text-gray-700">Feed real-time visitor data into your existing systems to sharpen targeting, boost personalization, and increase ROI from channels you control.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* Setup Made Simple Section */}
            <section className="relative pt-8 sm:pt-12 pb-0 sm:pb-0 bg-white">
              <div className="relative mx-auto max-w-full px-0 z-10">
                <div className="text-center mb-0 pb-0 sm:mb-4">
                  <h2 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-3 text-gray-900">Setup Made Simple</h2>
                  <div className="text-lg sm:text-xl text-muted-foreground font-normal">
                    <span className="block sm:hidden">Quick setup. Instant visibility.<br />Smarter marketing.</span>
                    <span className="hidden sm:inline">Quick setup. Instant visibility. Smarter marketing.</span>
                  </div>
                </div>
                <div className="-mt-6 sm:mt-10">
                  <Timeline />
                </div>
              </div>
            </section>
            {/* End Setup Made Simple Section */}

            {/* Extended Content Section */}
            <section className="relative py-24 sm:py-32 bg-white -mt-64">
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
                    {/* Core Capabilities Section */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-4xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">Core Capabilities</h2>
                        <p className="text-xl sm:text-lg text-gray-600 max-w-3xl mx-auto">
                            Transform your anonymous website traffic into actionable contact data with our patent-pending platform.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Email Discovery</h3>
                            <p className="text-gray-600">
                                Automatically identify and capture email addresses from anonymous website visitors.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Send className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Lead Generation</h3>
                            <p className="text-gray-600">
                                Convert anonymous traffic into qualified leads with detailed contact information.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Menu className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Advanced Analytics</h3>
                            <p className="text-gray-600">
                                Track visitor behavior and engagement patterns to optimize your conversion strategy.
                            </p>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Choose KnownVisitor?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600">Patent-pending technology for accurate identification</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600">GDPR and privacy compliant data collection</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600">Real-time visitor tracking and notifications</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600">Seamless integration with your existing tools</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                                <h4 className="text-lg font-semibold mb-3 text-gray-900">Ready to Get Started?</h4>
                                <p className="text-gray-600 mb-4">
                                    Join thousands of businesses already using KnownVisitor to transform their anonymous traffic into valuable leads.
                                </p>
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                    Start Free Trial
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
                            <div className="text-gray-600">Active Users</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
                            <div className="text-gray-600">Leads Generated</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                            <div className="text-gray-600">Accuracy Rate</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Bottom spacing to ensure scrollability */}
            <div className="h-20"></div>
        </div>
    )
} 