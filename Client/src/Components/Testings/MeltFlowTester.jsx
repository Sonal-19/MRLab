import React from 'react'

export default function MeltFlowTester() {
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
        Melt Flow Tester
        </h1>
      </div>
    </div>

    <div className="w-full flex flex-col items-center" id="about-page">
      {/* <!-- Container for image --> */}
      <div className="flex items-center justify-center mt-8">
        <img src="/melt-flow.jpg" alt="MeltFlowTester" className="max-w-full h-auto" />
      </div>

      {/* <!-- Content section --> */}
      <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
        {/* <!-- Heading --> */}
        <div className="lg:mr-4 py-2 lg:py-0">
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
          Melt Flow Tester
          </h4>
        </div>

        {/* <!-- Paragraph --> */}
        <div className="mt-4 text-center lg:mt-0">
          <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
          This instrument measures the rate of extrusion of molten resins through a die of specified length and
            diameter under prescribed conditions of temperature, load, piston position.
            Instrument with the following accessories are supplied : Digital Timer, Temp. Controller (PID),
            Piston, Barrel Cleaner, Orifice Cleaner Scoop.
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
                  <td className="border border-gray-400 px-4 py-2">Model</td>
                  <td className="border border-gray-400 px-4 py-2">Melt Flow Index Tester</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Weights</td>
                  <td className="border border-gray-400 px-4 py-2">2.16 kgs. and 5.0 kgs.</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Max. Temp.</td>
                  <td className="border border-gray-400 px-4 py-2">Ambient to 300 ° C</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Resolution</td>
                  <td className="border border-gray-400 px-4 py-2">0.10 ° C</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Accuracy</td>
                  <td className="border border-gray-400 px-4 py-2">+ 0.20 ° C</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">TAWN Sensitivity (FRS /HSS)</td>
                  <td className="border border-gray-400 px-4 py-2">11.9/56</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Timer</td>
                  <td className="border border-gray-400 px-4 py-2">0-99.9 min.</td>
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
