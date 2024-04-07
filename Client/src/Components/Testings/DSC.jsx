import React from "react";

export default function DSC() {
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
            Differential Scanning Calorimetry (DSC)
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img src="/dsc.jpg" alt="MRLogo" className="max-w-full h-auto" />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
              Differential Scanning Calorimetry (DSC)
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
              Differential scanning calorimetry (DSC) is the most frequently
              used thermal analysis technique. DSC measures enthalpy changes in
              samples due to changes in their physical and chemical properties
              as a function of temperature or time.
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
                    <td className="border border-gray-400 px-4 py-2">STARe 3 System DSC 3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Temperature range</td>
                    <td className="border border-gray-400 px-4 py-2">-150 to 700 °C</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Sensor</td>
                    <td className="border border-gray-400 px-4 py-2">FRS 5+ with 56 thermocouples or HSS 8+ with 120 thermocouples</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Heating Rate</td>
                    <td className="border border-gray-400 px-4 py-2">0.02 to 300 K/min</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">TAWN Resolution (FRS /HSS)</td>
                    <td className="border border-gray-400 px-4 py-2">0.12/0.2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">TAWN Sensitivity (FRS /HSS)</td>
                    <td className="border border-gray-400 px-4 py-2">11.9/56</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Indium response ratio (FRS sensor)</td>
                    <td className="border border-gray-400 px-4 py-2">&gt;155 mW/°C</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Material Number(s)</td>
                    <td className="border border-gray-400 px-4 py-2">30139229</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Trade Name</td>
                    <td className="border border-gray-400 px-4 py-2">DSC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
