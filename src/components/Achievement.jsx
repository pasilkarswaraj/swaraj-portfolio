import { motion } from "framer-motion";

function Achievements() {

  const achievements = [
    {
      icon: "🎓",
      title: "Bachelor of Engineering",
      description: "Information Technology Graduate",
    },

    {
      icon: "💼",
      title: "Larsen & Toubro Internship",
      description: "Worked as an IT Intern",
    },

    {
      icon: "🚀",
      title: "SwasthyaNet",
      description: "Telemedicine Platform Project",
    },

    {
      icon: "📊",
      title: "Power BI",
      description: "Data Analytics & Dashboards",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-10 py-20">

      <h2 className="text-5xl font-bold text-center mb-20">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {achievements.map((achievement) => (

        <div
        key={achievement.title}
        className="bg-white/5  border  border-white/10  rounded-xl  p-6  hover:scale-105  hover:-translate-y-2  hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]  transition-all  duration-300">

        <div className="text-5xl mb-4">
        {achievement.icon}
        </div>

        <h3>
            {achievement.title}
        </h3>

        <p>
            {achievement.description}
        </p>

    </div>

     ))}

</div>

    </section>
  );
}

export default Achievements;