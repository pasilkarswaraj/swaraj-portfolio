import { motion } from "framer-motion";
import Button from "./Button";
import TypingText from "./TypingText";

function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen

      bg-gradient-to-b
      from-black
      via-zinc-950
      to-black

      text-white

      flex
      flex-col
      justify-center
      items-center

      px-6
      "
    >
      {/* Batman Tag */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
        text-red-500
        uppercase

        tracking-[0.4em]

        mb-4
        "
      >
        Wayne Enterprises Division
            </motion.p>

           
      <motion.h1
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
        text-5xl
        md:text-8xl

        font-bold

        text-center

        hover:text-red-500

        transition-all
        duration-500
        "
      >
        Hi, I'm Swaraj Pasilkar
      </motion.h1>

      {/* Subtitle */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="
        mt-6

        text-xl
        md:text-3xl

        text-red-500

        text-center
        "
      >
        Java Developer | React Developer | Full Stack Enthusiast
      </motion.h2>

      {/* Typing Animation */}

      <TypingText />

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        className="
        mt-6

        max-w-3xl

        text-center

        text-gray-400
        text-lg
        "
      >
        Aspiring Software Engineer passionate about Java,
        React, and building impactful applications that
        solve real-world problems.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.9,
        }}
        className="
        mt-10

        flex
        flex-wrap

        justify-center

        gap-4
        "
      >
        <a href="#projects">
          <Button text="View Projects" />
        </a>

        <a href="#contact">
          <Button text="Contact Me" />
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="Download Resume" />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;