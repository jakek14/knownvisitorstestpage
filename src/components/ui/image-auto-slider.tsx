import React from "react";

const images = [
  "/Klaviyo.png",
  "/Google.png",
  "/Big.png",
  "/Woo.png",
  "/Wix.png",
  "/Tiktok.png",
  "/Squarespace.png",
  "/Snapchat.png",
  "/Shopify.png",
  "/Pinterest.png",
  "/Meta.png"
];

const duplicatedImages = [...images, ...images];

const ImageAutoSlider: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .infinite-scroll {
          animation: scroll-right 28s linear infinite;
        }
        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
        .image-item {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      filter 0.4s ease, 
                      z-index 0.4s ease;
          position: relative;
        }
        .image-item:hover {
          transform: scale(1.25) translateY(-10px);
          z-index: 10;
        }
      `}</style>
      <div className="w-full overflow-x-hidden overflow-y-hidden flex items-center justify-center bg-transparent -my-8 sm:my-0">
        <div className="scroll-container w-full max-w-6xl bg-transparent">
          <div className="infinite-scroll flex gap-4 sm:gap-6 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-3xl overflow-hidden bg-transparent border-none shadow-none outline-none flex items-center justify-center"
                style={{ boxShadow: 'none', border: 'none', outline: 'none', background: 'transparent' }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  style={{ boxShadow: 'none', border: 'none', outline: 'none', background: 'transparent' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageAutoSlider; 