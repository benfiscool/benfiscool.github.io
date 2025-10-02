'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About Me
          </h1>
          <div className="text-2xl text-stark-300 mb-4">
            Hey, I&apos;m Ben 👋
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mechanical Engineering Student | Builder | Problem Solver
          </p>
        </motion.div>

        {/* Main Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 mb-16 relative"
        >
          {/* Scattered Images - positioned outside content area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-4 -left-64 w-48 h-36 hidden xl:block z-10"
          >
            <Image
              src="/about-images/20210408_182324.jpg"
              alt="Workshop photo"
              fill
              className="object-cover rounded-lg shadow-xl transform -rotate-3"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 5 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-20 -right-64 w-40 h-52 hidden xl:block z-10"
          >
            <Image
              src="/about-images/2021_02_18_16_30_08.jpg"
              alt="Project photo"
              fill
              className="object-cover rounded-lg shadow-xl transform rotate-5"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute top-80 -left-72 w-52 h-40 hidden xl:block z-10"
          >
            <Image
              src="/about-images/20221219_103652.jpg"
              alt="Engineering photo"
              fill
              className="object-cover rounded-lg shadow-xl transform -rotate-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 4 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute top-72 -right-56 w-44 h-44 hidden xl:block z-10"
          >
            <Image
              src="/about-images/20241129_145121.jpg"
              alt="Recent project"
              fill
              className="object-cover rounded-lg shadow-xl transform rotate-4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="absolute top-[32rem] -left-60 w-56 h-36 hidden xl:block z-10"
          >
            <Image
              src="/about-images/Disney Land 08 287 (1).jpg"
              alt="Disney trip"
              fill
              className="object-cover rounded-lg shadow-xl transform -rotate-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="absolute top-[28rem] -right-72 w-40 h-52 hidden xl:block z-10"
          >
            <Image
              src="/about-images/FB_IMG_1649093940375.jpg"
              alt="Personal photo"
              fill
              className="object-cover rounded-lg shadow-xl transform rotate-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="absolute top-[40rem] -left-64 w-48 h-36 hidden xl:block z-10"
          >
            <Image
              src="/about-images/FB_IMG_1649094039832.jpg"
              alt="Activity photo"
              fill
              className="object-cover rounded-lg shadow-xl transform -rotate-12"
            />
          </motion.div>

          <div className="card-glass p-8 md:p-12 relative z-20">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                <p>
                  From the moment I could hold a wrench, I was hooked. Some of my earliest memories are of crawling around my dad's shop, completely fascinated by tools and machines, even if I didn't know what they actually did. I spent hours messing with K'NEX, not to follow instructions, but to see what I could come up with. I didn't know it was called "engineering" but I just knew I loved building things and figuring out how they worked.
                </p>

                <p>
                  Fast forward a bit, and that curiosity turned into something real. 3D printers had been out for a while, but my dad and I were fascinated by the technology. He ended up investing in a Prusa I3 MK2 with the hopes that I would learn CAD and be able to make parts to justify the cost. Not wanting to let him down, I started to learn Fusion 360, initially with the help of Youtube tutorials (my go-to resource to learn anything they don't teach you in school). Eventually I was good enough to start making my own parts, some useful and some knick-knacks that were fun to bring to school and show to friends. I would make replacement parts for my R/C cars, prototype motor mounts for my homebuilt electric skateboard, and random replacement parts for appliances that broke around the house. However, it clicked for me that though I loved to work on machines and modify my toys, what I loved even more was the creative process involved in designing something completely original. That's what ultimately inspired me to pursue my then future degree.
                </p>

                <p>
                  Now I'm studying Mechanical Engineering at Embry Riddle Aeronautical University, with a concentration in Propulsion. My classes cover everything from thermodynamics to controls, but what really drives me is hands-on work.
                </p>

                <p>
                  The makerspace has basically become my second home. I've spent hours learning CNC machining, metalworking, woodworking, and fabrication. My first project in college and also one of my favorites was designing and building a one-wheel electric skateboard from scratch. From sketch to CAD to machining and wiring, it was all me. It's buggy and has bucked me off more than a few times, but that trial by busted knuckles gave me real hands-on experience with systems integration.
                </p>

                <p>
                  That's the kind of work I want to keep doing. Whether it's building hardware, restoring old tech, or developing tools that help others create, I want to be fully hands-on, constantly learning, and solving problems that don't have a right answer.
                </p>

                <p>
                  When I'm not working on a project, I'm outdoors mountain biking or golfing, tinkering with electronics, or going down bizarre Youtube rabbit holes about weird tech or the history they don't teach in school.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-glass p-8 text-center border-t-2 border-stark-400/30"
          >
            <p className="text-lg text-stark-300 mb-4">
              This site is where I share what I&apos;m building, breaking, fixing, and learning along the way.
            </p>
            <p className="text-gray-300">
              Thanks for checking it out.
            </p>
          </motion.div>
        </motion.section>

        {/* Simple Projects Link */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-stark-600/20 hover:bg-stark-600/30 border border-stark-400/30 hover:border-stark-400/50 rounded-lg text-stark-300 hover:text-stark-200 font-medium transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Check Out My Projects</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.section>
      </div>
    </div>
  )
}
