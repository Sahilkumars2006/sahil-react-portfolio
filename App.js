import React from "react";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      <section className="text-center py-16 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sahil Kumar
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          B.Tech Mechanical Engineering + M.Tech AI & Robotics
        </motion.p>
      </section>

      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I’m a passionate and ambitious engineering student at IIITDM Kancheepuram, pursuing a dual degree in Mechanical Engineering and AI & Robotics. I enjoy solving real-world problems through a mix of engineering principles and intelligent automation.
        </p>
      </section>

      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card><CardContent className="p-4"><h3 className="text-xl font-semibold">Earthquake Rescue Robot Simulation</h3><p className="text-sm text-gray-400 mt-2">C-based simulation of rescue robot coordination using stack, queue, and linked lists.</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-semibold">Birthday Canvas Animation</h3><p className="text-sm text-gray-400 mt-2">Web-based animated greeting card with custom audio, animation, and effects.</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-semibold">Personal Portfolio Website</h3><p className="text-sm text-gray-400 mt-2">HTML/CSS portfolio made with Replit to showcase skills, projects, and personal info.</p></CardContent></Card>
        </div>
      </section>

      <section className="px-6 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <li>HTML</li><li>CSS</li><li>JavaScript</li><li>Python</li><li>C Programming</li><li>Git & GitHub</li>
        </ul>
      </section>

      <footer className="text-center text-gray-500 py-8 border-t border-gray-700">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/Sahilkumars2006" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></a>
          <a href="mailto:your-email@example.com"><Mail className="w-5 h-5" /></a>
        </div>
        <p>&copy; 2025 Sahil Kumar. All rights reserved.</p>
      </footer>
    </main>
  );
}