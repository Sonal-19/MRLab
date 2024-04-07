import React from "react";

export default function VapourSmoothening() {
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
            Vapour Smoothening
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center" id="about-page">
        {/* <!-- Container for image --> */}
        <div className="flex items-center justify-center mt-8">
          <img
            src="/vapoursmooth.png"
            alt="MRLogo"
            className="max-w-full h-auto"
          />
        </div>

        {/* <!-- Content section --> */}
        <div className="about bg-white mt-8 py-2 px-2 lg:flex-row lg:px-0">
          {/* <!-- Heading --> */}
          <div className="lg:mr-4 py-2 lg:py-0">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 mb-8 mt-4 lg:mt-0 font-medium text-center">
              Vapour Smoothening
            </h4>
          </div>

          {/* <!-- Paragraph --> */}
          <div className="mt-4 text-center lg:mt-0">
            <p className="text-justify font-medium mx-16 mb-4 lg:mb-16">
              An alternative finishing method is now available for processing
              FDM parts. With little labor and a short processing cycle, the
              Finishing Touch™ Smoothing Station yields prototypes, tools and
              end-use parts that have finishes that are ready for paint, plating
              or production. The Smoothing Station can provide a surface finish
              of 32-63 microns. Examples of real-world applications of the
              smoothing process cover the entire spectrum from painted marketing
              samples to finished goods manufacturing. Since launching the
              Smoothing Station, usage of Fortus systems for a range of
              applications has expanded. With the smoothing process, companies
              are extending their use of FDM into applications that demand both
              functionality and smooth surfaces. Applications include: 1.
              Finishing master parts by painting or electroplating; 2. Tooling
              masters; 3. Sealing parts for liquid applications; 4.
              Thermoforming molds; and 5. Investment casting. Companies are
              realizing impressive reductions in lead times and expenses when
              the Smoothing Station is used to finish and seal FDM parts.
              Independent of complexity and number of features, the Smoothing
              Station creates a paint-ready finish in a just a few hours, and it
              needs less than an hour of labor and $10.00 worth of supplies. The
              Smoothing Station has essentially automated the FDM additive
              fabrication finishing process. It eliminates the time, labor and
              expense of sanding, filling and priming parts to achieve a smooth
              surface finish for production parts, prototype tools and painted
              samples. In doing so, the Smoothing Station has removed any
              trade-off between aesthetic quality and product functionality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
