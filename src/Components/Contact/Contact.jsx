import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaUndo } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://flower-sell-backend.vercel.app/api/v1/flower/contact/`,
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      toast.error(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>

        <div className="flex items-center flex-col lg:flex-row gap-12">
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <FaPhoneAlt className="text-blue-400 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-white">Phone</h2>
              </div>
              <a
                href="tel:+8801401997130"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
              >
                +880 1401 997130
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-500/10 rounded-full">
                  <FaEnvelope className="text-red-400 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-white">Email</h2>
              </div>
              <a
                href="mailto:syednazmusshakib94@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
              >
                syednazmusshakib94@gmail.com
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/10 rounded-full">
                  <MdLocationOn className="text-green-400 text-2xl" />
                </div>
                <h2 className="text-xl font-semibold text-white">Location</h2>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.ca/maps/place/Notun+Bridge+Point,+Shaestagonj,+Hobigonj/@24.2687434,91.4714239,16.83z/data=!4m15!1m8!3m7!1s0x37515c4522a33541:0xaf92bcdf59019563!2sShaistaganj!3b1!8m2!3d24.2766967!4d91.4555525!16s%2Fm%2F09gllxz!3m5!1s0x37515c4e01c4206b:0x5e4b1ca47994326!8m2!3d24.2675395!4d91.4771063!16s%2Fg%2F11bzs3p8yb?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
              >
                Shayestaganj, Habiganj, Sylhet, Bangladesh
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                  >
                    <FaPaperPlane />
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>

                  <motion.button
                    type="reset"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setFormData({ name: "", email: "", message: "" })
                    }
                  >
                    <FaUndo />
                    Reset
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;