"use client"; 

import React, { useState, useEffect, ReactNode, FC } from "react"; 

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[]; 
  className?: string;
  autoAnimate?: boolean;
  autoAnimateInterval?: number;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color.split("").map((c) => c + c).join("");
  }
  if (color.length !== 6) return hex; 

  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));

  const rr = r.toString(16).padStart(2, '0');
  const gg = g.toString(16).padStart(2, '0');
  const bb = b.toString(16).padStart(2, '0');

  return `#${rr}${gg}${bb}`.toUpperCase();
};

export const Folder: FC<FolderProps> = ({
  color = "#00d8ff", 
  size = 1,
  items = [], 
  className = "",
  autoAnimate = false,
  autoAnimateInterval = 4000,
}) => {
  const maxItems = 3;
  const papers = Array(maxItems).fill(null).map((_, i) => items[i] || null);

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08); 
  const paper1Color = darkenColor("#FFFFFF", 0.12); 
  const paper2Color = darkenColor("#FFFFFF", 0.06);
  const paper3Color = "#FFFFFF";

  // Auto-animation effect
  useEffect(() => {
    if (!autoAnimate) return;

    const interval = setInterval(() => {
      setOpen((prev) => {
        if (prev) { 
          setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
        }
        return !prev;
      });
    }, autoAnimateInterval);

    return () => clearInterval(interval);
  }, [autoAnimate, autoAnimateInterval]);

  const handleClick = () => {
    if (autoAnimate) return; // Disable manual interaction when auto-animating
    setOpen((prev) => {
      if (prev) { 
        setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
      }
      return !prev;
    });
  };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (!open || autoAnimate) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.1; 
    const offsetY = (e.clientY - centerY) * 0.1; 
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>, 
    index: number
  ) => {
    if (autoAnimate) return;
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 }; 
      return newOffsets;
    });
  };

  const folderBaseStyle: React.CSSProperties = {
    transform: `scale(${size})`,
    transformOrigin: 'center center', 
    display: 'inline-block' 
  };
  
  const folderInteractiveStyle: React.CSSProperties = {
    transform: open ? "translateY(-8px)" : undefined,
  };

  const getOpenTransform = (index: number) => {
    const baseTransforms = [
        "translate(-120%, -70%) rotate(-15deg)", 
        "translate(10%, -70%) rotate(15deg)",  
        "translate(-50%, -100%) rotate(5deg)" 
    ];
    const mouseTransform = `translate(${paperOffsets[index].x}px, ${paperOffsets[index].y}px)`;
    return `${baseTransforms[index] || ""} ${mouseTransform}`;
  };
  
  return (
    <div style={folderBaseStyle} className={className}>
      <div
        className={`group relative transition-all duration-300 ease-in-out 
                    ${!autoAnimate ? "cursor-pointer" : ""}
                    ${!open && !autoAnimate ? "hover:-translate-y-1" : ""}`}
        style={folderInteractiveStyle}
        onClick={handleClick}
      >
        <div
          className="relative w-[100px] h-[80px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute z-0 bottom-[99%] left-0 w-[30px] h-[10px] 
                       rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          {papers.map((_itemContent, i) => { 
            let sizeClasses = ""; 
            if (i === 0) sizeClasses = "w-[70%] h-[80%]";
            else if (i === 1) sizeClasses = "w-[80%] h-[70%]";
            else if (i === 2) sizeClasses = "w-[90%] h-[60%]";
            if (open) {
                if (i === 0) sizeClasses = "w-[75%] h-[85%]";
                else if (i === 1) sizeClasses = "w-[85%] h-[75%]";
                else if (i === 2) sizeClasses = "w-[95%] h-[65%]";
            }
            const paperBaseTransform = !open ? "translate(-50%, 10%)" : "";
            const paperHoverTransform = !open && !autoAnimate ? "group-hover:translate-y-0" : "hover:scale-105";
            return (
              <div
                key={i}
                onMouseMove={(e) => handlePaperMouseMove(e, i)}
                onMouseLeave={(e) => handlePaperMouseLeave(e, i)}
                className={`absolute z-[${10 + i}] bottom-[10%] left-1/2 
                            transition-all duration-300 ease-in-out transform
                            ${paperHoverTransform} ${sizeClasses}`}
                style={{
                  backgroundColor: i === 0 ? paper1Color : i === 1 ? paper2Color : paper3Color,
                  borderRadius: "6px", 
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                  transform: open ? getOpenTransform(i) : paperBaseTransform,
                }}
              >
                {/* Mini Data Table Dashboard */}
                <div className="w-full h-full p-1 bg-white">
                  {/* Table Header */}
                  <div className="flex items-center justify-between mb-1 pb-0.5 border-b border-gray-200">
                    <div className="flex space-x-2 text-xs font-medium text-gray-600">
                      <span className="w-8">NAME</span>
                      <span className="w-6">PHONE</span>
                      <span className="w-8">EMAIL</span>
                      <span className="w-6">DATE</span>
                    </div>
                    <div className="w-2 h-2 bg-gray-400 rounded"></div>
                  </div>
                  
                  {/* Table Rows */}
                  <div className="space-y-0.5">
                    {/* Row 1 */}
                    <div className="flex items-center space-x-1 text-xs text-gray-700">
                      <span className="w-8 truncate">John Smith</span>
                      <span className="w-6 truncate">+1 (555)</span>
                      <span className="w-8 truncate">john.smith</span>
                      <span className="w-6 truncate">Jan 14</span>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="flex items-center space-x-1 text-xs text-gray-700">
                      <span className="w-8 truncate">Sarah Johnson</span>
                      <span className="w-6 truncate">+1 (555)</span>
                      <span className="w-8 truncate">sarah.j</span>
                      <span className="w-6 truncate">Jan 13</span>
                    </div>
                    
                    {/* Row 3 */}
                    <div className="flex items-center space-x-1 text-xs text-gray-700">
                      <span className="w-8 truncate">Mike Wilson</span>
                      <span className="w-6 truncate">+1 (555)</span>
                      <span className="w-8 truncate">mike.wilson</span>
                      <span className="w-6 truncate">Jan 12</span>
                    </div>
                    
                    {/* Row 4 */}
                    <div className="flex items-center space-x-1 text-xs text-gray-700">
                      <span className="w-8 truncate">Emily Davis</span>
                      <span className="w-6 truncate">+1 (555)</span>
                      <span className="w-8 truncate">emily.d</span>
                      <span className="w-6 truncate">Jan 11</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className={`absolute z-[40] w-full h-full origin-bottom transition-all duration-300 ease-in-out`}
            style={{
              backgroundColor: color,
              borderRadius: "0px 10px 10px 10px", 
              transform: open ? "translateY(20%) skewX(25deg) scaleY(0.5)" : "skewX(0deg) scaleY(1)",
            }}
          ></div>
          <div
            className={`absolute z-[41] w-full h-full origin-bottom transition-all duration-300 ease-in-out`}
            style={{
              backgroundColor: color, 
              borderRadius: "0px 10px 10px 10px",
              transform: open ? "translateY(20%) skewX(-25deg) scaleY(0.5)" : "skewX(0deg) scaleY(1)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}; 