import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
  event.preventDefault();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(() => {
      setIsSubmitted(true);

      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    });
};

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-10 py-20"
    >
      <div className="max-w-4xl mx-auto">

        <p className="text-red-500 uppercase tracking-[0.3em] text-center">
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-center mt-4">
          Let's Connect
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Let's build something amazing together.
        </p>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <a
            href="mailto:pasilkarswaraj@gmail.com"
            className="
            bg-white/5
            border border-white/10
            rounded-xl
            p-6
            text-center

            hover:scale-105
            hover:border-red-500
            hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]

            transition-all
            duration-300
            block
            "
          >
            <FaEnvelope className="text-3xl mx-auto text-red-500" />

            <p className="mt-3 font-semibold">
              Email
            </p>

            <p className="text-gray-400 text-sm">
              pasilkarswaraj@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/swaraj-pasilkar"
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-white/5
            border border-white/10
            rounded-xl
            p-6
            text-center

            hover:scale-105
            hover:border-red-500
            hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]

            transition-all
            duration-300
            block
            "
          >
            <FaLinkedin className="text-3xl mx-auto text-red-500" />

            <p className="mt-3 font-semibold">
              LinkedIn
            </p>

            <p className="text-gray-400 text-sm">
              View Profile
            </p>
          </a>

          <a
            href="https://github.com/pasilkarswaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-white/5
            border border-white/10
            rounded-xl
            p-6
            text-center

            hover:scale-105
            hover:border-red-500
            hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]

            transition-all
            duration-300
            block
            "
          >
            <FaGithub className="text-3xl mx-auto text-red-500" />

            <p className="mt-3 font-semibold">
              GitHub
            </p>

            <p className="text-gray-400 text-sm">
              View Projects
            </p>
          </a>

        </div>

        {/* Contact Form */}

        <div
          className="
          bg-white/5
          border border-white/10
          rounded-2xl
          p-8
          "
        >

          <h3 className="text-2xl font-bold text-center text-red-500 mb-6">
            Send Me A Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="
              w-full
              p-4
              rounded-xl

              bg-black/30

              border
              border-red-500/20

              focus:border-red-500

              outline-none

              transition-all
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="
              w-full
              p-4
              rounded-xl

              bg-black/30

              border
              border-red-500/20

              focus:border-red-500

              outline-none

              transition-all
              "
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className="
              w-full
              p-4
              rounded-xl

              bg-black/30

              border
              border-red-500/20

              focus:border-red-500

              outline-none

              transition-all
              "
            />

            <button
              type="submit"
              className="
              w-full

              px-8
              py-4

              rounded-xl

              bg-red-500

              text-white
              font-bold

              hover:scale-[1.02]
              hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]

              transition-all
              duration-300
              "
            >
              Send Message 🚀
            </button>

          </form>

          {isSubmitted && (
            <div
              className="
              mt-6

              p-4

              rounded-xl

              bg-green-500/10
              border border-green-500/20

              text-green-400
              text-center
              "
            >
              Message Sent Successfully 🚀
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Contact;