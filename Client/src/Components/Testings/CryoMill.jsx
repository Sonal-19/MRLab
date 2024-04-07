import React from "react";

export default function CryoMill() {
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
            Cryo Mill
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img
            src="/cryomill.jpg"
            alt="Cryo Mill"
            className="max-w-full h-screen"
          />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
              Cryo Mill
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
              Cryogenic grinding is a process where thermally sensitive and
              elastic substances are successfully processed by cooling with
              liquid nitrogen. The CryoMill is a laboratory ball mill
              specifically designed for this application. It features an
              integrated cooling system which continually cools the grinding jar
              with liquid nitrogen before and during the grinding process. Thus,
              the sample is embrittled and volatile components are preserved.
              The liquid nitrogen is continually supplied from an autofill
              system in the exact amount required to keep the temperature at
              –196 °C. The user never comes into direct contact with LN2 which
              ensures a high degree of operational safety. The CryoMill&#39;s
              versatility (cryogenic, but also wet and dry grinding at room
              temperature) makes it the ideal grinder for sample quantities up
              to 20 ml. Powerful impact ball milling results in highest grinding
              efficiency.
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
                    <th className="border border-gray-400 px-4 py-2">
                      Attribute
                    </th>
                    <th className="border border-gray-400 px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Model/Make
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Retsch/Ball Mill
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Applications
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      size reduction, mixing, homogenization, cell disruption
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Field of application
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      agriculture, biology, chemistry/plastics, construction
                      materials, engineering/electronics
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Feed material
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      hard, medium-hard, soft, brittle, elastic, firous
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Size reduction principle
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      impact, friction
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Material feed size*
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      &lt;= 8 mm
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Batch size / feed quantity*
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      max. 20 ml
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      No. of grinding stations
                    </td>
                    <td className="border border-gray-400 px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Vibrational frequency
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      digital, 5 - 30 Hz (300 - 1800 min-1)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Typical mean grinding time
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      10 min / 4 min (cooling / grinding)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Dry grinding
                    </td>
                    <td className="border border-gray-400 px-4 py-2">yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Wet grinding
                    </td>
                    <td className="border border-gray-400 px-4 py-2">yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Cryogenic grinding
                    </td>
                    <td className="border border-gray-400 px-4 py-2">yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Cell disruption with reaction vials
                    </td>
                    <td className="border border-gray-400 px-4 py-2">yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Self-centering clamping device
                    </td>
                    <td className="border border-gray-400 px-4 py-2">yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Type of grinding jars
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      screw top design
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Material of grinding tools
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      hardened steel, stainless steel, zirconium oxide, PTFE
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Grinding jar sizes
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      5 ml / 10ml / 25 ml / 35 ml / 50 ml
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Autofill
                    </td>
                    <td className="border border-gray-400 px-4 py-2">50 l</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Setting of grinding time
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      digital, 30 s - 99 min
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Storable SOPs
                    </td>
                    <td className="border border-gray-400 px-4 py-2">9</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Electrical supply data
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      100-240 V, 50/60 Hz
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Power connection
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      1-phase
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Protection code
                    </td>
                    <td className="border border-gray-400 px-4 py-2">IP 30</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Power consumption
                    </td>
                    <td className="border border-gray-400 px-4 py-2">260 W</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      W x H x D closed
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      395 x 373 x 577 mm (D: 710 mm with exhaust tube)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Net weight
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      ~ 45 kg
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Standards
                    </td>
                    <td className="border border-gray-400 px-4 py-2">CE</td>
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
