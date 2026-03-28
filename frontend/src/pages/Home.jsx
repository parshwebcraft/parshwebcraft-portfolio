import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Download,
  Code2,
  Layers,
  Server,
  FileCode,
  Database,
  Brain,
  Github,
  ExternalLink,
} from "lucide-react";
import { personalInfo, skills, projects } from "../data/mock";
import Layout from "../components/layout/Layout";

/* ---------------- ICON MAP ---------------- */
const iconMap = {
  Code2,
  Layers,
  Server,
  FileCode,
  Database,
  Brain,
};

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <Layout>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>ParshWebCraft | Software Engineer & Full-Stack Developer</title>
        <meta
          name="description"
          content="ParshWebCraft is a Computer Science undergraduate and Software Engineer, building scalable full-stack and AI-powered web applications."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-slate-950" />

        {/* Soft glows */}
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-indigo-400/10 blur-3xl rounded-full" />
        <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-pink-400/10 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-14 max-w-3xl">
            {/* Status */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-slate-300 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to Internships & Full-Time Roles
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                ParshWebCraft
              </span>
            </h1>

            {/* Role */}
            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-4">
              Software Engineer · Full-Stack & ML Developer
            </p>

            {/* Location */}
            <p className="text-sm text-slate-400 mb-6">
              📍 Greater Noida, Uttar Pradesh · India
            </p>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
              Computer Science undergraduate with hands-on experience in
              full-stack development and machine learning. I enjoy building
              scalable web applications, designing clean APIs, and applying AI
              to solve real-world problems.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio">
                <button className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-slate-900 bg-gradient-to-r from-indigo-400 to-pink-400 hover:opacity-90 transition">
                  View Projects <ArrowRight size={18} />
                </button>
              </Link>

              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-white/25 text-white hover:bg-white/10 transition"
              >
                <Download size={18} />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Technologies and tools I use to build modern, reliable software.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill) => {
              const Icon = iconMap[skill.icon];
              return (
                <div
                  key={skill.name}
                  className="p-6 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 hover:border-indigo-400/40 transition"
                >
                  {Icon && (
                    <Icon size={26} className="mx-auto text-indigo-400 mb-2" />
                  )}
                  <span className="block text-center text-slate-200 text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-pink-400/40 transition"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 text-slate-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-indigo-400 hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-pink-400 hover:underline"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
