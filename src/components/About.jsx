import { motion } from "framer-motion";

function About() {
  const timeline = [
    {
      year: "2022",
      title: "Started BE IT",
      description:
        "Began my Bachelor of Engineering in Information Technology and developed a strong foundation in programming, databases, and web development.",
    },

    {
      year: "2024",
      title: "Larsen & Toubro Internship",
      description:
        "Worked as an IT Intern, gaining exposure to enterprise workflows, software systems, and professional development practices.",
    },

    {
      year: "2025",
      title: "Built SwasthyaNet",
      description:
        "Developed a telemedicine platform featuring Firebase Authentication, AI Chatbot integration, appointment booking, and video consultation capabilities.",
    },

    {
      year: "2026",
      title: "BE IT Graduate",
      description:
        "Focused on Full Stack Development, React, Java, SQL, Spring Boot, and building real-world projects to prepare for software engineering roles.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 md:px-10 py-20"
    >
      <div className="max-w-5xl mx-auto">
        
        <p className="text-red-500 uppercase tracking-[0.3em] text-center">
          About
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-center mt-4 mb-6">
          My Journey
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Passionate Information Technology graduate with interests in Full
          Stack Development, modern web technologies, and building impactful
          software solutions.
        </p>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              className="
                bg-white/5
                border
                border-white/10

                rounded-2xl
                p-6

                hover:border-red-500
                hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]
                hover:scale-[1.02]

                transition-all
                duration-300
              "
            >
              <div className="flex flex-col md:flex-row gap-6">
                
                <div
                  className="
                    text-red-500
                    text-3xl
                    font-bold
                    min-w-[120px]
                  "
                >
                  {item.year}
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;