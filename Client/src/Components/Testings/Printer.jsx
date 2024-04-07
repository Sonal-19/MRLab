import React from "react";

export default function Printer() {
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
            3D Printer (U Print SE)
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img
            src="/ultimaker3d-printer.jpeg"
            alt="printer"
            className="max-w-full h-auto"
          />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
              3D Printer (U Print SE)
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
              U Print SE 3D Printers are powered by Stratasys’ patented FDM®
              (Fused Deposition Modeling™) technology. It’s the 3D printer on
              which thousands of design engineers test their designs. Its highly
              advanced, powerful, stable platform is made to work seamlessly
              with CAD software – and it’s the reason no other 3D printer
              compares with the uPrint SE. Plus, by producing models in house
              instead of outsourcing to a service bureau, you can keep your most
              ground-breaking product designs confidential.
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
                      Model Material
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      ABS plus in ivory
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Build Size
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      203 x 152 x 152 mm (8 x 6 x 6 in)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Layer Thickness
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      .254 mm (.010 in)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Workstation Compatibility
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Windows® 7
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Network Connectivity
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      Ethernet TCP/IP 10/100 base T
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Size and Weight (one material bay; two material bays )
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      635 (w) x 660 (d) x 787 (h) mm (25 x 26 x 31 in) 76 kg
                      (168 lbs); 635 (w) x 660 (d) x 940 (h) mm (25 x 26 x 37
                      in) 94 kg (206 lbs)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Power Requirements
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      100–127 VAC 50/60 Hz, minimum 15A dedicated circuit or
                      220–240 VAC 50/60 Hz, minimum 7A dedicated circuit
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Regulatory Compliance
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      CE / TUV / RoHS / WEEE
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Special Facility Requirements
                    </td>
                    <td className="border border-gray-400 px-4 py-2">None</td>
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
