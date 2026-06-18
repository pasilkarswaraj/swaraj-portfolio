import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50

        backdrop-blur-md
        bg-black/30

        border-b
        border-red-500/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-8
          py-4

          flex
          justify-between
          items-center
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-bold

          text-red-500

          hover:text-red-400

          transition

          flex
          items-center
          gap-2">
          🦇 Swaraj.dev
        </a>

        {/* Navigation */}

        <ul className="flex gap-8 text-white">

          <li>
            <a
              href="#home"
              className="
                hover:text-red-500
                transition
                duration-300
              "
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="
                hover:text-red-500
                transition
                duration-300
              "
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="
                hover:text-red-500
                transition
                duration-300
              "
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="
                hover:text-red-500
                transition
                duration-300
              "
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="
                hover:text-red-500
                transition
                duration-300
              "
            >
              Contact
            </a>
          </li>

        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;