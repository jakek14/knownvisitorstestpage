import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface RevenueDataPoint {
  month: string;
  value: number;
}

interface RevenueStats {
  currentValue: number;
  previousValue: number;
  changePercentage: number;
  data: RevenueDataPoint[];
}

type TimeFrame = 'Monthly' | 'Quarterly' | 'Yearly';

const revenueData: Record<TimeFrame, RevenueStats> = {
  Monthly: {
    currentValue: 284500,
    previousValue: 245800,
    changePercentage: 15.7,
    data: [
      { month: 'Jan', value: 180000 },
      { month: 'Feb', value: 195000 },
      { month: 'Mar', value: 210000 },
      { month: 'Apr', value: 225000 },
      { month: 'May', value: 245000 },
      { month: 'Jun', value: 260000 },
      { month: 'Jul', value: 284500 },
    ]
  },
  Quarterly: {
    currentValue: 850000,
    previousValue: 720000,
    changePercentage: 18.1,
    data: [
      { month: 'Q1 2023', value: 585000 },
      { month: 'Q2 2023', value: 620000 },
      { month: 'Q3 2023', value: 680000 },
      { month: 'Q4 2023', value: 720000 },
      { month: 'Q1 2024', value: 780000 },
      { month: 'Q2 2024', value: 820000 },
      { month: 'Q3 2024', value: 850000 },
    ]
  },
  Yearly: {
    currentValue: 3200000,
    previousValue: 2800000,
    changePercentage: 14.3,
    data: [
      { month: '2018', value: 1800000 },
      { month: '2019', value: 2100000 },
      { month: '2020', value: 2000000 },
      { month: '2021', value: 2400000 },
      { month: '2022', value: 2800000 },
      { month: '2023', value: 3000000 },
      { month: '2024', value: 3200000 },
    ]
  }
};

const generateSmoothPath = (points: RevenueDataPoint[], width: number, height: number): string => {
  if (!points || points.length < 2) {
    return `M 0 ${height}`;
  }

  const maxValue = Math.max(...points.map(p => p.value));
  const minValue = Math.min(...points.map(p => p.value));
  const valueRange = maxValue - minValue;
  
  const xStep = width / (points.length - 1);
  const pathData = points.map((point, i) => {
    const x = i * xStep;
    const normalizedValue = valueRange > 0 ? (point.value - minValue) / valueRange : 0.5;
    const y = height - (normalizedValue * (height * 0.8)) - (height * 0.1);
    return [x, y];
  });

  let path = `M ${pathData[0][0]} ${pathData[0][1]}`;

  for (let i = 0; i < pathData.length - 1; i++) {
    const x1 = pathData[i][0];
    const y1 = pathData[i][1];
    const x2 = pathData[i + 1][0];
    const y2 = pathData[i + 1][1];
    const midX = (x1 + x2) / 2;
    path += ` C ${midX},${y1} ${midX},${y2} ${x2},${y2}`;
  }

  return path;
};

const formatCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString()}`;
};

interface RevenueLineGraphProps {
  selectedTimeFrame: TimeFrame;
}

const RevenueLineGraph: React.FC<RevenueLineGraphProps> = ({ selectedTimeFrame }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const linePathRef = useRef<SVGPathElement>(null);
  const areaPathRef = useRef<SVGPathElement>(null);

  const svgRef = useRef<SVGSVGElement>(null);

  const currentStats = revenueData[selectedTimeFrame];
  const isPositiveGrowth = currentStats.changePercentage >= 0;

  const svgWidth = 280;
  const svgHeight = 120;

  const linePath = useMemo(() => 
    generateSmoothPath(currentStats.data, svgWidth, svgHeight), 
    [currentStats.data]
  );

  const areaPath = useMemo(() => {
    if (!linePath.startsWith("M")) return "";
    return `${linePath} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`;
  }, [linePath]);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [selectedTimeFrame]);

  useEffect(() => {
    const path = linePathRef.current;
    const area = areaPathRef.current;

    if (path && area) {
      const length = path.getTotalLength();
      
      path.style.transition = 'none';
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = `${length}`;
      
      area.style.transition = 'none';
      area.style.opacity = '0';

      path.getBoundingClientRect();

      path.style.transition = 'stroke-dashoffset 1.2s ease-out, stroke 0.5s ease';
      path.style.strokeDashoffset = '0';

      area.style.transition = 'opacity 1s ease-out 0.3s, fill 0.5s ease';
      area.style.opacity = '1';
    }
  }, [linePath, animationKey]);



  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  const strokeColor = '#3bb143';
  const gradientId = 'revenueGradientHero';



  return (
    <div className="px-4 sm:px-8 py-4 w-full max-w-full mx-auto overflow-hidden gap-0">
      {/* Header */}
      <motion.div 
        className="flex justify-between items-center mb-0 w-full"
        variants={headerVariants}
      >
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Growing Revenue</h2>
        </div>
        
        {/* Removed dropdown */}
      </motion.div>

      {/* Stats Section */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={selectedTimeFrame}
          className="mb-0 mt-[-2.5rem]"
          variants={statsVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div 
            className="text-3xl font-bold text-foreground mb-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {formatCurrency(currentStats.currentValue)}
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
              isPositiveGrowth 
                ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
            }`}>
              {isPositiveGrowth ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {Math.abs(currentStats.changePercentage).toFixed(1)}%
            </div>
            <span className="text-muted-foreground text-sm">
              vs previous period ({formatCurrency(currentStats.previousValue)})
            </span>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Chart Section */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`chart-${selectedTimeFrame}`}
          className="h-32 w-full mb-0"
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-full"
            preserveAspectRatio="none"

          >
            <defs>
              <linearGradient id="revenueGradientHero" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3bb143" stopOpacity={0.35}/>
                <stop offset="50%" stopColor="#2d8a35" stopOpacity={0.25}/>
                <stop offset="100%" stopColor="#4caf50" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <path
              ref={areaPathRef}
              d={areaPath}
              fill={`url(#${gradientId})`}
            />
            
            <path
              ref={linePathRef}
              d={linePath}
              fill="none"
              stroke={strokeColor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

          </svg>

        </motion.div>
      </AnimatePresence>

      {/* Data Points */}
      <motion.div 
        className="flex justify-between mt-2 text-xs text-muted-foreground overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {currentStats.data.slice(-5).map((point, index) => (
          <motion.div 
            key={point.month}
            className="text-center flex-1 min-w-0 px-1"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <div className="font-medium truncate">{formatCurrency(point.value)}</div>
            <div className="text-muted-foreground/70 truncate">{point.month}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RevenueLineGraph; 