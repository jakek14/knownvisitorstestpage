import React from 'react'
import { HeroSection } from '@/components/hero-section'
import { ValuePropositions } from '@/components/value-propositions'
import { UseCasesAndProcess } from '@/components/use-cases-process'
import { EmailSignup } from '@/components/email-signup'
import { Footer } from '@/components/footer'

// Import LogoCloud component
const LogoCloud = () => {
    return (
        <section className="bg-background pb-16 md:pb-32 -mt-16 pt-16">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm text-muted-foreground">Powered by</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <div className="flex gap-28 animate-scroll">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg"
                                    alt="Google"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meta.svg"
                                    alt="Meta"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
                                    alt="Facebook"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                                    alt="Instagram"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg"
                                    alt="TikTok"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/snapchat.svg"
                                    alt="Snapchat"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinterest.svg"
                                    alt="Pinterest"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
                                    alt="LinkedIn"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg"
                                    alt="Twitter"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/reddit.svg"
                                    alt="Reddit"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg"
                                    alt="YouTube"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg"
                                    alt="Amazon"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg"
                                    alt="Shopify"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValuePropositions />
      <UseCasesAndProcess />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
