import React from 'react'

export default function DoubleDiscPolishingMachine() {
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
        Double Disc Polishing Machine
        </h1>
      </div>
    </div>

    <div className="w-full flex flex-col items-center" id="about-page">
      {/* <!-- Container for image --> */}
      <div className="flex items-center justify-center mt-8">
        <img src="/grindingpolishingmachine.png" alt="discpolishing" className="max-w-full h-auto" />
      </div>

      {/* <!-- Content section --> */}
      <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
        {/* <!-- Heading --> */}
        <div className="lg:mr-4 py-2 lg:py-0">
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
          Double Disc Polishing Machine
          </h4>
        </div>

        {/* <!-- Paragraph --> */}
        <div className="mt-4 text-center lg:mt-0">
          <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
          Polishing M /c is used for polishing the Metallographic samples. Double Disc is driven by high torque
          motor. The speed can be continuously varied as indicated.
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
                  <td className="border border-gray-400 px-4 py-2">OS-DPV</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Disc Diameter</td>
                  <td className="border border-gray-400 px-4 py-2">8 inch each</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">No. Of Disc</td>
                  <td className="border border-gray-400 px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Supply</td>
                  <td className="border border-gray-400 px-4 py-2">15 Amps, 230V, Single phase</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Motor Capacity</td>
                  <td className="border border-gray-400 px-4 py-2">1/2 Hp</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Speed</td>
                  <td className="border border-gray-400 px-4 py-2">50 to 1000 rpm</td>
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
