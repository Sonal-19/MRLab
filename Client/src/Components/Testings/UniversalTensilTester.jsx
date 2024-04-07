import React from 'react'

export default function UniversalTensilTester() {
  return (
    <>
    <div
      className="w-full h-80 bg-indigo-200 relative flex items-center justify-center"
      style={{
        backgroundImage: "url(/test4.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        opacity: 1.8,
      }}
    >
      <div className="text-center mt-5">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-white mt-16 font-medium mb-0">
         Universal Tensil Tester
        </h1>
      </div>
    </div>

    <div className="w-full flex flex-col items-center" id="about-page">
      {/* <!-- Container for image --> */}
      <div className="flex items-center justify-center mt-8">
        <img src="/tensile.jpg" alt="tensile tester" className="max-w-full h-auto" />
      </div>

      {/* <!-- Content section --> */}
      <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
        {/* <!-- Heading --> */}
        <div className="lg:mr-4 py-2 lg:py-0">
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
          Universal Tensil Tester
          </h4>
        </div>

        {/* <!-- Paragraph --> */}
        <div className="mt-4 text-center lg:mt-0">
          <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
          This Universal Testing Machines is electro mechanical machine with digital display of load & displacement & pulley belt system for changing speeds. The machines are designed for testing various materials like rubber, plastics, cables, leather, paper, plywood and metals. Tension, compression, bend and flexural tests can be performed on these machines with suitable grips and fixtures. The machines are powder coated for elegant look. 
          The critical components are plated for rust prevention and durability.
          </p>
        </div>

        {/* Specifications */}
        <div className="lg:mr-4 py-2 lg:py-0">
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-black mb-8 mt-4 lg:mt-0 font-serif text-center">
            Specifications
          </h4>
        </div>

        {/* Table */}
        <div className="w-full flex justify-center">
          <div className="card rounded bg-white border shadow p-4 pb-5 mb-5 w-50">
            <table className="table-auto min-w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2">Attribute</th>
                  <th className="border border-gray-400 px-4 py-2">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Model No.</td>
                  <td className="border border-gray-400 px-4 py-2">SET-T 10 KN</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Max. capacity(Kg)</td>
                  <td className="border border-gray-400 px-4 py-2">1000</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Load Resolution(N) 1:10,000</td>
                  <td className="border border-gray-400 px-4 py-2">1.0</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Max. crosshead displacement without grips/fixtures (mm)</td>
                  <td className="border border-gray-400 px-4 py-2">900</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Displacement resolution (mm)</td>
                  <td className="border border-gray-400 px-4 py-2">0.2</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Column clearance(mm)</td>
                  <td className="border border-gray-400 px-4 py-2">380</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Variable speed with the help of A.C.Drive</td>
                  <td className="border border-gray-400 px-4 py-2">5mm/min to 100mm/min or 30mm/min to 500mm/min</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Variable speed with the help of A.C.Servo Drive</td>
                  <td className="border border-gray-400 px-4 py-2">1mm/min to 500mm/min</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Machine Dimensions w x d x h in (mm )</td>
                  <td className="border border-gray-400 px-4 py-2">1100 x 330 x 1800</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Power requirement for A.C. Drive</td>
                  <td className="border border-gray-400 px-4 py-2">1.0 HP</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Power requirement for A.C. Servo Drive</td>
                  <td className="border border-gray-400 px-4 py-2">600W</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Power Supply</td>
                  <td className="border border-gray-400 px-4 py-2">230 VAC±10%, Single Phase, 50Hz with Neutral & Earth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
