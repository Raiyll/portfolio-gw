import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 font-sans">
      <section className="max-w-3xl mx-auto border rounded-2xl border-purple-700 p-8 bg-[#111]">
        {/* Profile Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Hello, I'm <span className="text-purple-400">Rai</span>
            </h1>
            <p className="italic text-gray-400 mt-1">
              Programmer yang lebih suka nescafe sachet daripada kopi indomaret
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 bg-zinc-800 rounded">Web</span>
              <span className="px-2 py-1 bg-zinc-800 rounded">Android</span>
              <span className="px-2 py-1 bg-zinc-800 rounded">Desktop</span>
              <span className="px-2 py-1 border border-yellow-400 text-yellow-400 rounded">
                1st LKS ITSS Banten 2025
              </span>
            </div>
          </div>
          <img
            src="/profile-pic.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full border border-gray-700 object-cover"
          />
        </div>

        {/* About Me */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="text-gray-300 mt-2">
            I'm a tech enthusiast from Tangerang, Indonesia, who loves building
            software solutions that make a difference. When I'm not coding,
            you'll find me sipping coffee at odd hours of the night, diving
            into new tech stacks, or refactoring old projects.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Stacks</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded">
              Tailwind CSS
            </span>
            <span className="bg-purple-600 px-2 py-1 rounded">Laravel</span>
            <span className="bg-zinc-600 px-2 py-1 rounded">Livewire</span>
            <span className="bg-blue-500 px-2 py-1 rounded">ReactJS</span>
            <span className="bg-fuchsia-500 px-2 py-1 rounded">Flutter</span>
            <span className="bg-neutral-700 px-2 py-1 rounded">Java</span>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-zinc-800 p-4 rounded">
              <h3 className="font-semibold">Smartclass</h3>
              <p className="text-sm text-gray-400">
                Built with Laravel & Livewire
              </p>
              <p className="text-gray-300 mt-1 text-sm">
                A project management platform for IFDP Jakarta
              </p>
            </div>
            <div className="bg-zinc-800 p-4 rounded">
              <h3 className="font-semibold">ProSync</h3>
              <p className="text-sm text-gray-400">Built with Laravel</p>
              <p className="text-gray-300 mt-1 text-sm">
                A project management app I built during Industrial Class
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Let's be friends</h2>
          <div className="flex gap-4 mt-3 text-2xl">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
