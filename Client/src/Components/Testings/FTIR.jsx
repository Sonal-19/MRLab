import React from "react";

export default function FTIR() {
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
            Fourier Transmission Infra Red Spectroscopy (FTIR)
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img src="/ftir.jpg" alt="MRLogo" className="max-w-full h-auto" />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
              Fourier Transmission Infra Red Spectroscopy (FTIR)
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
              Fourier-transform infrared spectroscopy (FTIR) is a technique used
              to obtain an infrared spectrum of absorption or emission of a
              solid, liquid, or gas. An FTIR spectrometer simultaneously
              collects high-resolution spectral data over a wide spectral range.
              The Infra 3000B of FTIR spectrometers represent a low cost Fourier
              transform infrared spectrometers and employ a number of unique
              features that ensure high performance from a compact instrument.
              The Infra 3000X measures just 540x520x260 and is regarded as one
              of compact and versatile infrared FTIR spectrophotometers.
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
                    <td className="border border-gray-400 px-4 py-2">3000B</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Interferometer
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Michelson interferometer
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Beam splitter
                    </td>
                    <td className="border border-gray-400 px-4 py-2">KBr</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Detector
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      DLATGS (DTGS Optional)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      IR Source
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Ceramic Light Source
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Wavenumber Range
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      350 to 7800
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Resolution
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      0.25/0.5/0.85
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Signal to noise ratio
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      50000 : 1 or More
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Wavenumber Accuracy
                    </td>
                    <td className="border border-gray-400 px-4 py-2">0.01</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Scanning Speed
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Automatic
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Software
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Windows based IR software
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Communication
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      USB,ETHERNET,RS232
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Data Output
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Standard
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Status Diagnosis
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Standard
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Environment Conditions
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      10 to 40
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Humidity
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    70%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Power Supply
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    AC220V±22V，50Hz±1Hz
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Dimensions &amp; Weight
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    540x520x260,28kg
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Accessories
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    Standard Accessories Sadler Drug Library
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                    Atr Crystal
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                    Diamond
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
