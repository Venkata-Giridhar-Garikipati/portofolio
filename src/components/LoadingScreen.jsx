'use client';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#0a192f] z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1
        }}
        className="relative w-32 h-32 md:w-48 md:h-48"
      >
        {/* Outer circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute inset-0 rounded-full border-2 border-[#64ffda] opacity-20"
        />
        {/* Animated circle */}
        <motion.div
          animate={{ 
            rotate: 360,
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute inset-0 rounded-full border-2 border-[#64ffda] border-t-transparent"
        />
        {/* VG Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-4xl md:text-6xl font-bold text-[#64ffda] font-mono">VG</span>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-8"
      >
        <motion.p
          animate={{ 
            color: ['#64ffda', '#ccd6f6', '#64ffda'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xl md:text-2xl font-mono"
        >
          Let's Explore
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
