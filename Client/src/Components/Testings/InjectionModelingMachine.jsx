import React from 'react'

export default function InjectionModelingMachine() {
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
        Injection Molding Machine
        </h1>
      </div>
    </div>

    <div className="w-full flex flex-col items-center" id="about-page">
      {/* <!-- Container for image --> */}
      <div className="flex items-center justify-center mt-8">
        <img src="/injection-molding-machine.webp" alt="InjectionMoldingMachine" className="max-w-full h-auto" />
      </div>

      {/* <!-- Content section --> */}
      <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
        {/* <!-- Heading --> */}
        <div className="lg:mr-4 py-2 lg:py-0">
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
          Injection Molding Machine
          </h4>
        </div>

        {/* <!-- Paragraph --> */}
        <div className="mt-4 text-center lg:mt-0">
          <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
          This machine is used to fabricate the product by melting and pressurizing the material into
            the die. It is normally used for the injection of polymer material.
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
                  <td className="border border-gray-400 px-4 py-2">Horizontal injection molding machine (200g)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Temperature range</td>
                  <td className="border border-gray-400 px-4 py-2">Ambient to 500 ° C</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Material</td>
                  <td className="border border-gray-400 px-4 py-2">PP, PE, PET, ABS, PA, PLA</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Die Attached</td>
                  <td className="border border-gray-400 px-4 py-2">ASTM D 3039</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Working Mode</td>
                  <td className="border border-gray-400 px-4 py-2">Manual, Semi Auto and Fully Auto</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Capacity</td>
                  <td className="border border-gray-400 px-4 py-2">Upto 200 gm</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2"> No of Heaters</td>
                  <td className="border border-gray-400 px-4 py-2">5</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Structure</td>
                  <td className="border border-gray-400 px-4 py-2">Horizontal</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Clamping Way</td>
                  <td className="border border-gray-400 px-4 py-2">Hydraulic</td>
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
