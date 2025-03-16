'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ words = [], speed = 100 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : speed, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-[#64ffda] inline-block"
    >
      {`${words[index]?.substring(0, subIndex)}${blink ? "|" : " "}`}
    </motion.span>
  );
};

export default TypewriterText;
