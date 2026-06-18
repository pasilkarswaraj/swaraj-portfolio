import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {
      title: "SwasthyaNet",
      description:
        "Telemedicine platform with Firebase Authentication, AI Chatbot, Video Consultation and Appointment Booking.",
      tech:
        "React • Firebase • Tailwind • Genkit",
      
      status:
        "Completed"

    
    },

    {
      title: "Portfolio",
      description:
        "Interactive futuristic portfolio with React, Framer Motion and Three.js.",
      tech:
        "React • Tailwind • Framer Motion",
      status:
        "Completed"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-black text-white px-10 py-20">

      <div className="text-center mb-20">

        

        <h2 className="text-6xl font-bold mt-4">
            Featured Projects
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {
             projects.map((project, index) => (

                <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                status={project.status}
                delay={index * 0.2}
                 />

             ))
        }
      </div>

    </section>
  );
}

export default Projects;