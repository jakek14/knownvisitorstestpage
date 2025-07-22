// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Powered by",
  logos = [
    {
      id: "shopify",
      description: "Shopify",
      image: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      className: "h-7 w-auto",
    },
    {
      id: "woocommerce",
      description: "WooCommerce (WordPress plugin)",
      image: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
      className: "h-7 w-auto",
    },
    {
      id: "bigcommerce",
      description: "BigCommerce",
      image: "https://cdn.worldvectorlogo.com/logos/bigcommerce.svg",
      className: "h-7 w-auto",
    },
    {
      id: "wix",
      description: "Wix eCommerce",
      image: "https://cdn.worldvectorlogo.com/logos/wix.svg",
      className: "h-7 w-auto",
    },
    {
      id: "hubspot",
      description: "HubSpot",
      image: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
      className: "h-7 w-auto",
    },
    {
      id: "tiktok",
      description: "TikTok",
      image: "https://cdn.worldvectorlogo.com/logos/tiktok-icon.svg",
      className: "h-7 w-auto",
    },
    {
      id: "pinterest",
      description: "Pinterest",
      image: "https://cdn.worldvectorlogo.com/logos/pinterest-icon.svg",
      className: "h-7 w-auto",
    },
    {
      id: "snapchat",
      description: "Snapchat",
      image: "https://cdn.worldvectorlogo.com/logos/snapchat-2.svg",
      className: "h-7 w-auto",
    },
    {
      id: "facebook",
      description: "Facebook",
      image: "https://cdn.worldvectorlogo.com/logos/facebook-3.svg",
      className: "h-7 w-auto",
    },
    {
      id: "google",
      description: "Google",
      image: "https://cdn.worldvectorlogo.com/logos/google-icon.svg",
      className: "h-7 w-auto",
    },
    {
      id: "criteo",
      description: "Criteo",
      image: "https://cdn.worldvectorlogo.com/logos/criteo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "taboola",
      description: "Taboola",
      image: "https://cdn.worldvectorlogo.com/logos/taboola-1.svg",
      className: "h-7 w-auto",
    },
    {
      id: "instagram",
      description: "Instagram",
      image: "https://cdn.worldvectorlogo.com/logos/instagram-2-1.svg",
      className: "h-7 w-auto",
    },
  ],
  className,
}: Logos3Props) => {
  return (
    <section className="py-8">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-2 text-lg font-semibold text-muted-foreground tracking-wide opacity-80">
          {heading}
        </h2>
      </div>
      <div className="pt-4 md:pt-8 lg:pt-10">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                        style={{ filter: 'grayscale(1)', opacity: 0.7 }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 }; 