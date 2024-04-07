import React from "react";

export default function MicroVickerHardnessTester() {
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
            Micro Vicker Hardness Tester
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img src="/mvrt.jpeg" alt="mvrt" className="max-w-full h-auto" />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
              Micro Vicker Hardness Tester
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
              It is mainly used for the micro Vickers hardness measurement of
              various metals and some non-metallic materials. It can measure
              various parts (machined parts, forgings, cast iron, cast steel,
              etc.), non-ferrous metals, thermal after-treatment parts, various
              micro and Thin parts, glass, ceramics, agate, gemstones, etc. It
              is also suitable for the determination of carbon carbide,
              effective depth of quenching and hardening layer, coating, surface
              coating and heat- affected parts of welded parts. And it is used
              for the observation of the internal metallographic structure of
              various metal parts and the image collection, display and output
              printing. It is especially suitable for measuring the hardness
              gradient distribution curve of the workpiece and the surface
              hardness of the gear after heat treatment, and the effective
              hardening layer depth.
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
                    <td className="border border-gray-400 px-4 py-2">
                      HVS-1000B
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Test force
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      10gf (0.098N)、25gf (0.245N)、50gf (0.49N)、100gf
                      (0.98N)、 200gf (1.96N)、300gf (2.94N)、500gf(4.9N)、1kgf
                      (9.8N)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Minimum test unit
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      0.025µm Electronic automatic measuring
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Conversion scale
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      HRA、HRB、HRC、HRD、HRF、HV、HK
                      、HBW、HR15N、HR30N、HR45N、HR15 T、HR30T、HR45T
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Hardness test range
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      5~3000HV
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Test force application method
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Automatic (loading, holding, unloading)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Test microscope magnification
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      100X（Observed）400X(test)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Test force holding time
                    </td>
                    <td className="border border-gray-400 px-4 py-2">1~60s</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      X-Y Test Table
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Size:100*100mm Maximum , Movement:25*25mm
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Data output
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      LCD display readout, built-in printer and RS-232 interface
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Maximum height of specimen
                    </td>
                    <td className="border border-gray-400 px-4 py-2">90mm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Distance from center of indenter to outer wall
                    </td>
                    <td className="border border-gray-400 px-4 py-2">95mm</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Power supply
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      AC220V+5%,50-60Hz
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Size</td>
                    <td className="border border-gray-400 px-4 py-2">
                      405*290*480mm
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Weight</td>
                    <td className="border border-gray-400 px-4 py-2">40Kg</td>
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
