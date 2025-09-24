export function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-stark-300">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-stark-300 mb-4">Engineering</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Thermodynamics</li>
              <li>• Fluid Mechanics</li>
              <li>• Heat Transfer</li>
              <li>• Propulsion Systems</li>
              <li>• Materials Science</li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-stark-300 mb-4">Software</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• SolidWorks</li>
              <li>• MATLAB</li>
              <li>• Microsoft Excel</li>
              <li>• Microsoft Word</li>
              <li>• Autodesk CFD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
