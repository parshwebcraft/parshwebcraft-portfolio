import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import { personalInfo } from "../data/mock";
import Layout from "../components/layout/Layout";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects & Code",
      href: personalInfo.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Contact | ParshWebCraft – Software Engineer</title>
        <meta
          name="description"
          content="Contact ParshWebCraft, a Computer Science undergraduate and Software Engineer. Open to internships, full-time roles, and collaborations."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="py-28 relative overflow-hidden">
        {/* Base background */}
        <div className="absolute inset-0 bg-slate-950" />

        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-indigo-400/10 blur-3xl rounded-full" />
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-pink-400/10 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Interested in opportunities, collaborations, or discussing a
              project? I’d love to connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="pb-28 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              className="lg:col-span-2 space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Contact Information
                </h2>
                <p className="text-slate-400">
                  Based in Greater Noida, Uttar Pradesh. Open to internships,
                  full-time roles, and meaningful collaborations.
                </p>
              </motion.div>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <motion.div key={method.label} variants={fadeInUp}>
                    {method.href ? (
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition"
                      >
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:text-slate-900 transition">
                          <method.icon size={22} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-400">
                            {method.label}
                          </p>
                          <p className="text-white font-medium group-hover:text-indigo-400 transition">
                            {method.value}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={18}
                          className="text-slate-400 group-hover:text-pink-400 transition"
                        />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                          <method.icon size={22} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">
                            {method.label}
                          </p>
                          <p className="text-white font-medium">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Send a Message
                </h3>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={36} className="text-indigo-400 mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Message Sent
                    </h4>
                    <p className="text-slate-400">
                      Thank you for reaching out. I’ll respond as soon as
                      possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label className="text-slate-300">Name</Label>
                        <Input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-300">Email</Label>
                        <Input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Subject</Label>
                      <Input
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Message</Label>
                      <Textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button className="w-full py-6 bg-gradient-to-r from-indigo-400 to-pink-400 text-slate-900 font-semibold hover:opacity-90">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>

                    <p className="text-center text-sm text-slate-400">
                      Typical response time: 24–48 hours
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
