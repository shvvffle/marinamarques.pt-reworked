import React from "react";

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MoveRight,
  Code,
  Book,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { ProjectCard } from "./components/ProjectCard";
import { MultilingualGreeting } from "./components/MultilingualGreeting";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <header className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url(/images/background.jpg)] bg-cover bg-center opacity-40 dark:opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 via-transparent to-purple-500/30 backdrop-blur-[2px] animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-white/80 dark:from-transparent dark:to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                <Sparkles className="w-5 h-5" />
                <MultilingualGreeting />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white space-y-2">
                <span className="block">my name is</span>
                <span className="block text-transparent capitalize bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400">
                  Marina Marques
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mt-6">
                I'm a front-end developer based in the beautiful city of
                <span className="text-teal-600 dark:text-teal-400 font-medium">
                  {" "}
                  Lisbon, Portugal
                </span>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in touch <MoveRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 dark:text-white"
              >
                View projects
              </a>
            </div>
            <div className="flex gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Front End Developer at Sherpany</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>
                  <a href="https://youdontseemebook.com/" target="_blank">
                    Published Indie Author
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        id="about"
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-90 h-80 rounded">
              <img
                src="/images/mm_info.jpg"
                alt="marina marques"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a front-end developer — which is just a fancy way to say I
                architect and build websites and applications. My coding journey
                began back when MySpace profiles were all the rage. I remember
                the thrill (and frustration!) of trying to figure out how to
                change the background color or make text flash, spending
                countless hours on customizations without noticing time fly by.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                That feeling of creating something from scratch was
                exhilarating. Coding felt like building with Lego: you start
                with individual pieces that seem random, but bit by bit, they
                come together. <br />
                Suddenly, you've created something incredible — your own little
                castle.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-16 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Are You Feeling Low?"
              description="For those rough days - a compliment per click.
Landing page with a compliment generator."
              image="/images/work-areyoufeelinglow.png"
              technologies="Javascript, jQuery, HTML, CSS"
              liveUrl="https://shvvffle.github.io/areyoufeelinglow/"
              githubUrl="https://github.com/shvvffle/areyoufeelinglow"
            />
            <ProjectCard
              title="Personal Website"
              description="Responsive personal/portfolio website. The source code is available at both Codepen and Github and has been used by over 300 people."
              image="/images/work-personalWebsite.png"
              technologies="Javascript, jQuery, HTML, CSS"
              liveUrl="https://marinamarques.netlify.app/"
              githubUrl="https://github.com/shvvffle/marinamarques.pt"
            />
            <ProjectCard
              title="Can My Cat/Dog Eat This?"
              description="A simple web app that tells you if a food is safe for your pet to eat."
              image="/images/work-canmycatdogeatthis.png"
              technologies="React, TypeScript, TailwindCSS"
              liveUrl="https://canmypeteatthis.netlify.app/"
            />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:9.marques.marina@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white"
            >
              <Mail className="w-5 h-5" />
              9.marques.marina@gmail.com
            </a>
            <a
              href="https://github.com/shvvffle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://pt.linkedin.com/in/marinamarques9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://x.com/shvvffle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:text-white"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
          </div>
        </div>
      </section>
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>© {new Date().getFullYear()} Marina Marques. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
