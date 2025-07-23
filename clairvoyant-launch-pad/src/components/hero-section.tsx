'use client'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Send, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { HyperText } from '@/components/ui/hyper-text'
import RainingLetters from '@/components/raining-letters'
import MemberList from '@/components/ui/member-list'



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



export function HeroSection() {
    const [email, setEmail] = useState('')
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
        }, 4000) // Increased to 4 seconds to allow HyperText to fully complete
        
        return () => clearInterval(interval)
    }, [])

    return (
        <main className="overflow-hidden relative">
            <section className="relative">
                <RainingLetters />
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-32 z-20">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <h1 className="text-balance text-5xl sm:text-6xl md:text-7xl font-bold sm:font-medium leading-tight">
                                Turn anonymous visitors<br />into{' '}
                                <div className="inline-block min-h-[1.2em]">
                                    <HyperText
                                        key={currentWordIndex}
                                        text={dynamicWords[currentWordIndex]}
                                        className="text-primary font-bold"
                                        duration={1200}
                                        animateOnLoad={true}
                                    />
                                </div>
                            </h1>

                            <p className="mx-auto mt-8 sm:mt-6 max-w-2xl text-pretty text-xl sm:text-lg text-muted-foreground bg-background/90 backdrop-blur-sm px-6 py-4 sm:px-4 sm:py-2 rounded-xl sm:rounded-lg">
                                TrySERA identifies your anonymous website visitors and provides their email and postal addresses—even if they never filled out a form. Transform lost traffic into actionable contact data.
                            </p>

                            <form className="mt-12 sm:mt-12 mx-auto max-w-sm">
                                <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] pr-1.5 items-center rounded-[1rem] border shadow shadow-zinc-950/5 has-[input:focus]:ring-2 lg:pr-0">
                                    <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4" />

                                    <input
                                        placeholder="Enter your email address"
                                        className="h-14 sm:h-12 w-full bg-transparent pl-12 focus:outline-none text-base"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <div className="md:pr-1.5 lg:pr-0">
                                        <Button
                                            aria-label="submit"
                                            size="sm"
                                            className="rounded-[0.5rem] h-14 sm:h-12">
                                            <span className="hidden md:block">Join Waitlist</span>
                                            <Send
                                                className="relative mx-auto size-5 md:hidden"
                                                strokeWidth={2}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </form>
                <div className="relative mt-12 sm:mt-8 mx-auto max-w-6xl px-4 sm:px-0">
                    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border overflow-hidden relative transform hover:scale-[1.02] transition-transform duration-300">
                        {/* Bottom fade effect */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-10" />
                        {/* Enhanced shadow overlay */}
                        <div className="absolute inset-0 rounded-xl shadow-inner pointer-events-none" />
                        <div className="h-[400px] sm:h-[500px] overflow-y-auto">
                            <MemberList />
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </section>

                {/* Extended Hero Content Below Table */}
                <section className="relative py-16 sm:py-20 bg-gradient-to-b from-background to-muted/20">

                    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
                        {/* Core Capabilities Section */}
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-4xl sm:text-3xl font-bold mb-4 sm:mb-6">Core Capabilities</h2>
                            <p className="text-xl sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                                Transform your anonymous website traffic into actionable contact data with our patent-pending platform.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Email Discovery</h3>
                                <p className="text-muted-foreground">
                                    Automatically identify and capture email addresses from anonymous website visitors.
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Send className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
                                <p className="text-muted-foreground">
                                    Convert anonymous traffic into qualified leads with detailed contact information.
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Menu className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                                <p className="text-muted-foreground">
                                    Track visitor behavior and engagement patterns to optimize your conversion strategy.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border mb-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Why Choose TrySERA?</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">Patent-pending technology for accurate identification</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">GDPR and privacy compliant data collection</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">Real-time visitor tracking and notifications</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-muted-foreground">Seamless integration with your existing tools</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                                    <h4 className="text-lg font-semibold mb-3">Ready to Get Started?</h4>
                                    <p className="text-muted-foreground mb-4">
                                        Join thousands of businesses already using TrySERA to transform their anonymous traffic into valuable leads.
                                    </p>
                                    <Button className="w-full">
                                        Start Free Trial
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border">
                                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                                <div className="text-muted-foreground">Active Users</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border">
                                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                                <div className="text-muted-foreground">Leads Generated</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border">
                                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                                <div className="text-muted-foreground">Accuracy Rate</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}
