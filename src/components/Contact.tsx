import { StreamlineHeading } from './StreamlineHeading'

export function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-4xl text-center">
        <StreamlineHeading className="text-4xl font-bold mb-8 text-stark-300">
          Get In Touch
        </StreamlineHeading>
        <p className="text-xl text-gray-300 mb-12">
          Ready to discuss aerospace engineering, propulsion systems, or potential collaborations?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:bencfreeman@outlook.com"
            className="bg-stark-600 hover:bg-stark-700 text-white font-bold py-3 px-6 rounded transition-all duration-300"
          >
            Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/bcfreem/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-stark-400 font-bold py-3 px-6 rounded border border-stark-500 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
