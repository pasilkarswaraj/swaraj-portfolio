import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
      bg-black
      border-t
      border-red-500/20

      py-8
      px-6
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto

        flex
        flex-col
        md:flex-row

        items-center
        justify-between

        gap-6
        "
      >
        {/* Left Side */}

        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-red-500">
            Swaraj.dev
          </h3>

          <p className="text-gray-400 mt-2">
            Building impactful software, one project at a time.
          </p>
        </div>

        {/* Right Side */}

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/pasilkarswaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-gray-400

            hover:text-red-500
            hover:scale-110

            transition-all
            duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/swaraj-pasilkar"
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-gray-400

            hover:text-red-500
            hover:scale-110

            transition-all
            duration-300
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:pasilkarsawaraj@gmail.com"
            className="
            text-gray-400

            hover:text-red-500
            hover:scale-110

            transition-all
            duration-300
            "
          >
            <FaEnvelope />
          </a>

        </div>
      </div>

      {/* Bottom Line */}

      <div
        className="
        text-center

        text-gray-500
        text-sm

        mt-8
        pt-6

        border-t
        border-red-500/10
        "
      >
        © 2026 Swaraj Pasilkar. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;