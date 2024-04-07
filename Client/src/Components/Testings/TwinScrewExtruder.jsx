import React from "react";

export default function TwinScrewExtruder() {
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
            Twin Screw Extruder (HAAKE Mini CTW Micro)
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img
            src="/twinscrew.jpeg"
            alt="MRLogo"
            className="max-w-full h-auto"
          />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
              Twin Screw Extruder (HAAKE Mini CTW Micro)
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
              When compounding expensive or small scale materials such as
              nano-composites or engineered polymers, you need a fast,
              dependable, cost efficient method to obtain tangible results. The
              HAAKE MiniCTW requires as little as five grams or seven
              milliliters (ml) of material for compounding, which is especially
              beneficial for industries that compound expensive or small-scale
              materials such as nano- composites, bio-polymers or
              pharmaceuticals. By using the optional force feeder, customers can
              continuously extrude very small material volumes. The instrument
              is based on proven, conical twin screw technology with co- and
              counter-rotating screws, and it works as a standalone unit with
              data export. Due to the channel and a backflow bypass valve, the
              residence time can be exactly defined. The HAAKE MiniCTW
              Micro-Conical Twin Screw Compounder is ideal for the precisely
              controlled reactive extrusion of high-viscous melts that is being
              done via an MS-Windows™based software that offers several test
              set-ups. By running the instrument in circulation mode, the
              required reaction time for the reactive mixture can be controlled
              easily. At the end of the test, the bypass valve can be opened and
              the sample is extruded as a strand. By measuring the torque of the
              drive motor, the reaction process can be monitored effectively.
              Test results are stored in the software. The HAAKE MiniCTW
              Micro-Conical Twin Screw Compounder is one model within our suite
              of micro-conical twin screw compounders that serves a variety of
              markets, including polymer, bioscience, nanotechnology and
              pharmaceutical. The instrument differs from the well-established
              Thermo Scientific HAAKE MiniLab micro-compounder in that it is
              designed specifically for industrial research and development
              whereas the HAAKE MiniLab is focused on polymer development
              applications. To complete our comprehensive solutions, our
              international team of material characterization experts provides
              proven answers for small sample compounding.
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
                    <td className="border border-gray-400 px-4 py-2">Model</td>
                    <td className="border border-gray-400 px-4 py-2">HAAKE mini CTW Micro</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Max. Speed
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    300 min-1
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Speed Range
                    </td>
                    <td className="border border-gray-400 px-4 py-2">1 to 360 min-1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Voltage
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    115/230 V ±10%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Hertz
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    50/60 Hz
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Motor Power
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    400 W
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Max. Torque
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    5 Nm/Screw
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Max. Temperature
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    300°C
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Temperature Range (Metric)
                    </td>
                    <td className="border border-gray-400 px-4 py-2">80°C to 240°C</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Barrel
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    High performance plastic mold steel (M340)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Control Mode
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    Constant Speed, Constant Torque
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Description
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    HAAKE MiniCTW; Manual valve
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Compounders
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    Yes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Micro Compounding
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    Yes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Extruder Design
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    Conical, Co-/counter rotating
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Feeder Information
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    Manual feeding, Force feeder (optional)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Material
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    Stainless Steel 1.4122 CR-coated
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Volume (Metric)
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    7 mL
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Unit Size
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    Each
                    </td>
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
