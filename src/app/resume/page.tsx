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
            href="/Ben Freeman ME-2.pdf" 
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
                <p><span className="font-semibold">Email:</span> FreemB10@my.erau.edu</p>
                <p><span className="font-semibold">Phone:</span> (602) 617-3531</p>
              </div>
              <div>
                <p><span className="font-semibold">Location:</span> Prescott, Arizona</p>
                <p><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/bcfreem" className="text-blue-400 hover:text-blue-300">in/bcfreem</a></p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              Motivated and detail-oriented Mechanical Engineering student with a focus on propulsion, seeking a summer internship to gain hands-on experience in Mechanical or Aerospace Engineering.
            </p>
          </div>

          {/* Education */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Bachelor of Science in Mechanical Engineering (Current)</h3>
                <p className="text-blue-300">Embry-Riddle Aeronautical University • Prescott, AZ</p>
                <p className="text-gray-400">2024 • Expected Graduation: May 2026</p>
                <ul className="mt-2 text-gray-300">
                  <li>• Concentration: Propulsion</li>
                  <li>• GPA: 3.89</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Professional Experience</h2>
            <div className="space-y-6">
              
              <div>
                <h3 className="text-xl font-semibold text-white">Product Design</h3>
                <p className="text-blue-300">Dyno-Comp Performance Tuning • Scottsdale, AZ</p>
                <p className="text-gray-400">May 2024 - August 2024</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Conducted 3D scanning of vehicles to develop customized aerodynamic packages which optimize airflow for better cooling and vehicle handling.</li>
                  <li>• Applied Computational Fluid Dynamics (CFD) analysis to validate the aerodynamic effectiveness of designs.</li>
                  <li>• Designed and 3D printed one-off parts to customer specifications.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Design and Fabrication (Part-time)</h3>
                <p className="text-blue-300">Accessory Partners • Scottsdale, AZ</p>
                <p className="text-gray-400">May 2023 - August 2023</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Leveraged CAD software and 3D scanning technology to design and prototype custom automotive components including sunroof and suspension components</li>
                  <li>• Manufactured parts for automotive sunroofs in a shop environment</li>
                  <li>• Reverse-engineered parts which are no longer available for vintage vehicles</li>
                  <li>• Worked with colleagues to design application-specific jigs for ease of manufacturing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Data Entry Associate</h3>
                <p className="text-blue-300">Accessory Partners • Scottsdale, AZ</p>
                <p className="text-gray-400">February 2022 - September 2022</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li>• Collaborated with a team to input and manipulate large datasets</li>
                  <li>• Automated data formatting and organization using formulas and macros in Excel</li>
                  <li>• Gained an extensive knowledge of excel including functions and formatting</li>
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

          {/* Relevant Coursework */}
          <div className="card-glass p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Relevant Coursework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <ul className="space-y-2">
                <li>• ME309 – Air-breathing and Rocket Propulsion</li>
                <li>• ES206 - Fluid Mechanics</li>
                <li>• ES204 - Dynamics</li>
                <li>• EGR201 – Solidworks</li>
              </ul>
              <ul className="space-y-2">
                <li>• EGR115 – Matlab</li>
                <li>• ES208 - Thermodynamics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}