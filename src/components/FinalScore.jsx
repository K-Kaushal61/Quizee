import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function RollingNumber({ value }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(value / 30);

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="h-[110px] overflow-hidden flex items-center justify-center">
      <motion.div
        key={displayValue}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
        className="text-[110px] font-bold text-[#1f4d5f] tabular-nums"
      >
        {displayValue}
      </motion.div>
    </div>
  );
}



function FinalScore({ score, onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[600px]"
    >
    
      <div className="mb-12 px-6 py-2 rounded-full bg-white text-sm font-medium text-gray-700 shadow">
        Keep Learning!
      </div>

      <h2 className="text-4xl font-heading bg-gradient-to-r from-[#1a4152] via-[#2b7696] to-[#369ac4] bg-clip-text text-transparent mb-10">
        Your Final score is
      </h2>

      <div className="flex items-end mb-16">
        <span className="text-7xl font-bold font-heading bg-gradient-to-r from-[#1a4152] via-[#2b7696] to-[#369ac4] bg-clip-text text-transparent tabular-nums"> <RollingNumber value={score} /> </span>
        <span className="text-5xl font-medium bg-gradient-to-r from-[#1a4152] via-[#2b7696] to-[#369ac4] bg-clip-text text-transparent ml-2 mb-6">
          %
        </span>
      </div>

      <motion.button
        onClick={onRestart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-4 rounded-xl bg-blue-100 text-blue-900 font-medium transition-colors hover:bg-blue-200"
      >
        Start Again
      </motion.button>
    </motion.div>
  );
}

export default FinalScore;
