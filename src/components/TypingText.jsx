import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function TypingText() {
  const roles = [
    "Java Developer",
    "React Developer",
    "SQL Enthusiast",
    "Problem Solver",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h3
     key={index}
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
     className="text-2xl text-red-500 mt-4">
      {roles[index]}
    </motion.h3>
  );
}

export default TypingText;