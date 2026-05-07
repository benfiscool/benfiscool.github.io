import { CapstonePopup } from '@/components/CapstonePopup'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center glow-text">
          Resume
        </h1>
        
        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <a 
            href="/Ben Freeman Resume 5.7.2026.pdf" 
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Resume
          </a>
        </div>

        <div className="space-y-8">
          {/* Contact Information */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Benjamin Freeman</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p><span className="font-semibold">Email:</span> <a href="mailto:freemb10@my.erau.edu" className="text-blue-400 hover:text-blue-300">freemb10@my.erau.edu</a></p>
                <p><span className="font-semibold">Phone:</span> (602) 617-3531</p>
              </div>
              <div>
                <p><span className="font-semibold">Location:</span> Scottsdale, AZ</p>
                <p><span className="font-semibold">Citizenship:</span> U.S. Citizen</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              Detail-oriented and highly adaptable mechanical engineer seeking an entry-level engineering position. With a strong foundation in CAD design, mathematics, machining, and various software packages, I'm eager to gain my start in the field of mechanical engineering.
            </p>
          </div>

          {/* Education */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">B.S. Mechanical Engineering, Propulsion</h3>
                <p className="text-blue-300">Embry – Riddle Aeronautical University • Prescott, AZ</p>
                <p className="text-gray-400">Aug 2022 – May 2026</p>
                <ul className="mt-2 text-gray-300">
                  <li>• GPA: 3.93</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Experience</h2>
            <div className="space-y-6">
              
              <div>
                <h3 className="text-xl font-semibold text-white">Machine Shop Student Employee</h3>
                <p className="text-blue-300">Embry-Riddle Campus Machine Shop • Prescott, AZ</p>
                <p className="text-gray-400">Aug 2025 – May 2026</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Produce parts from conception to completion using CAD, CAM, and CNC/manual lathes and mills.</li>
                  <li>• Assist students in best practices and safe operation of manual and CNC machines.</li>
                  <li>• Monitor the machine shop for safety and cleanliness, and intervene when necessary.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Product Designer</h3>
                <p className="text-blue-300">Dyno-Comp Performance Tuning • Scottsdale, AZ</p>
                <p className="text-gray-400">May 2024 – Aug 2025</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Conducted and reverse-engineered 3D scans to produce custom, one-off solutions to meet customer needs.</li>
                  <li>• Utilized CFD analysis to validate the effectiveness of designs.</li>
                  <li>• Maintained a fleet of 3D printers and created standard operating procedure documents for equipment use, maintenance, and best practices.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Freelance CAD Designer</h3>
                <p className="text-blue-300">Fiverr.com</p>
                <p className="text-gray-400">May 2022 – Present</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Worked with customers to produce original CAD designs for prototyping and production.</li>
                  <li>• Received requirements and interfaces in various forms to create drop-in replacement parts for existing applications.</li>
                  <li>• Managed time effectively to deliver all ongoing projects at or before agreed upon delivery date.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Fabricator</h3>
                <p className="text-blue-300">Accessory Partners • Scottsdale, AZ</p>
                <p className="text-gray-400">May 2023 – Aug 2023</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Used CAD and 3D scanning to prototype components for sunroof and suspension systems.</li>
                  <li>• Manufactured metal and plastic parts in a hands-on shop environment.</li>
                  <li>• Reverse-engineered legacy parts for vintage vehicles.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects & Leadership */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Projects & Leadership</h2>
            <div className="space-y-6">
              
              <div>
                <h3 className="text-xl font-semibold text-white">Foil Bearing Endurance Testing Rig – Capstone Project (Sponsored by Honeywell)</h3>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Responsible for designing a test rig to evaluate wear on foil bearings for use in auxiliary power units.</li>
                  <li>• Create mathematical and computer models using Matlab and ANSYS Fluent.</li>
                  <li>• Collaborate with a team of seven to evaluate project requirements, scope, and produce a viable product within budget.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">President, ERAU Eagle Makerspace</h3>
                <p className="text-blue-300">Prescott, AZ</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Responsible for onboarding and training monitors who oversee the space</li>
                  <li>• Train members on safe and proper use of shop tools and machinery</li>
                  <li>• Operate and maintain a variety of machinery including a lathe, mill, ShopBot CNC router, and several band saws.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Software</h3>
                <p className="text-gray-300">Solidworks (CSWA Certification), Fusion 360, Unity 3D, Excel, Word, Matlab</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Technical</h3>
                <p className="text-gray-300">Welding, Fabrication, 3D Printing, 3D Scanning</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Capstone Popup */}
      <CapstonePopup />
    </div>
  )
}