export function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-stark-300">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-stark-300 mb-4">CAD & Analysis</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Solidworks (CSWA Certified)</li>
              <li>• Fusion 360</li>
              <li>• Ansys Fluent (CFD)</li>
              <li>• Ansys Static Structural</li>
              <li>• 3D Scanning & Reverse Engineering</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-stark-300 mb-4">Programming & Software</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• C# Programming</li>
              <li>• MATLAB</li>
              <li>• Unity 3D</li>
              <li>• Visual Studio</li>
              <li>• Microsoft Office Suite</li>
              <li>• SysML</li>
              <li>• MBSE (Model-Based Systems Engineering)</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-stark-300 mb-4">Manufacturing & Design</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• CNC/Manual Machining</li>
              <li>• 3D Printing</li>
              <li>• Welding & Fabrication</li>
              <li>• Product Design & Prototyping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
