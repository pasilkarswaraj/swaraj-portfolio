import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

function ProjectCard(props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
       duration: 0.8,
       delay: props.delay
     }}
      viewport={{
        once: true,
      }}
      className="
        bg-gradient-to-br
        from-white/10
        to-white/5

        border
        border-red-500/20

        rounded-xl
        p-6

        hover:scale-105
        hover:-translate-y-2
        hover:border-red-500
        hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]

        transition-all
        duration-300
      "
    >
      {/* Rocket Icon */}
      <div
        className="
          text-red-500
          text-4xl
          mb-4

          transition
          duration-300
          hover:rotate-12
        "
      >
        <FaRocket />
      </div>

      {/* Label */}
      <p className="text-red-500 text-sm tracking-widest uppercase mb-2">
        Featured Project
      </p>

      {/* Project Title */}
      <h2 className="text-3xl font-bold text-red-500 mb-4">
        {props.title}
      </h2>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed">
        {props.description}
      </p>

      {/* Status Badge */}
      <div className="mt-4">
        <span
          className="
            px-3
            py-1
            rounded-full

            text-sm
            text-green-400

            bg-green-500/10
            border
            border-green-500/20
          "
        >
          {props.status}
        </span>
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mt-6">
        {props.tech.split(" • ").map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-1

              text-sm
              rounded-full

              bg-red-500/10
              border
              border-red-500/20
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="
            px-4
            py-2

            rounded-lg

            bg-red-500/20
            border
            border-red-500/20

            hover:scale-105

            transition
          "
        >
          GitHub
        </button>

        <button
          className="
            px-4
            py-2

            rounded-lg

            bg-purple-500/20
            border
            border-purple-500/20

            hover:scale-105

            transition
          "
        >
          Live Demo
        </button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;