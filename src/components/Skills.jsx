import { motion } from "framer-motion";
import {FaReact,FaHtml5,FaCss3Alt,FaJs,FaJava,FaGitAlt,FaGithub} from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiSpringboot } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { BiBarChartAlt2 } from "react-icons/bi";
function Skills() {
   
  const categories = {
   Frontend: [
  {
    name: "HTML",
    icon: FaHtml5,
  },

  {
    name: "CSS",
    icon: FaCss3Alt,
  },

  {
    name: "JavaScript",
    icon: FaJs,
  },

  {
    name: "React",
    icon: FaReact,
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
],

    Backend: [
  {
    name: "Java",
    icon: FaJava,
  },

  {
    name: "SQL",
    icon: SiMysql,
  },

  {
    name: "MySQL",
    icon: SiMysql,
  },

  {
    name: "Spring Boot (Learning)",
    icon: SiSpringboot,
  },
],

    Tools: [
  {
    name: "Git",
    icon: FaGitAlt,
  },

  {
    name: "GitHub",
    icon: FaGithub,
  },

  {
    name: "VS Code",
    icon: VscCode,
  },

  {
    name: "Eclipse",
    icon: FaJava,
  },
  {
    name: "Power BI",
    icon: BiBarChartAlt2,
  }
]

  };

  return (
    <section id="skills" className="min-h-screen bg-black text-white px-10 py-20">

      <h2 className="text-5xl font-bold text-center mb-20">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {Object.entries(categories).map(
          ([category, skills]) => (

            <motion.div
              key={category}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:-translate-y-2 transition-all duration-500">

              <h3 className="text-2xl font-bold text-red-500 mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill) => {

              const Icon = skill.icon;

               return (
                <div
                  key={skill.name}
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-lg

                    bg-red-500/10
                    border border-red-500/20

                    hover:scale-105
                    hover:-translate-y-1

                    hover:border-red-500
                    hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]

                    transition-all
                    duration-300

                    cursor-pointer
                    "
      
                >

                <Icon className="text-xl" />

                <span>{skill.name}</span>

                </div>
                );
              })}

              </div>

            </motion.div>

          )
        )}

      </div>

    </section>
  );
}

export default Skills;