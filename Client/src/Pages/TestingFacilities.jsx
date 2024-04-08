import React from "react";
import { Link } from "react-router-dom";

const TestingFacilities = () => {
  return (
    <>
     <div
        className="w-full h-80 bg-indigo-200 relative flex items-center justify-center"
        style={{
          //backgroundImage:"url(https://img.freepik.com/free-photo/factory-worker-white-lab-suit-latex-gloves-face-mask-working-with-some-modern-equipment-manufacturing-tv-set_645730-626.jpg?w=1060)",
          //backgroundImage:"url(https://img.freepik.com/free-photo/metal-worker-using-machinery-industrial-workshop-generated-by-ai_188544-19969.jpg?w=1060)",
          backgroundImage: "url(/test.jpg)",

          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 1.8,
        }}
      >
        <div className="text-center justify-center mt-5">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-medium mt-9">
            Services: Testing Facilities
          </h1>
        </div>
      </div>

      <div className="creativesplanet-box-content-inner">
        <div className="flex flex-col items-center justify-center bg-neutral-800 min-h-screen py-8">
          {" "}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Add testing facilities grid items here */}
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-100 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/dsc.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {" "}
                  DSC
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Differential scanning calorimetry (DSC) is the most frequently used thermal analysis
                technique. 
                </p>
                {/* <a
                  href="/dsc"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a> */}
                <Link className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                to="/dsc">Read More</Link>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/ftir.jpg"
                  alt="FTIR"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  FTIR
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Fourier-transform infrared spectroscopy(FTIR) is a technique used to obtain
                an infrared spectrum of absorption or emission of a solid, liquid, or gas.
                </p>
                <a
                  href="/ftir"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/twinscrew.jpeg"
                  alt="Twin Screw Extruder"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                Twin Screw Extruder 
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                When compounding expensive or small scale materials such as nano-composites or engineered
                polymers, you need a fast, dependable, cost efficient method to obtain tangible results.
                </p>
                <a
                  href="/twin-screw-extruder"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/mvrt.jpg"
                  alt="micro-vector-tester"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Micro Vicker Hardness Tester
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                It is mainly used for the micro Vickers hardness measurement of various metals and some
                  non-metallic materials.
                </p>
                <a
                  href="/micro-vector-hardness-tester"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/pinondisc.png"
                  alt="pin-on-disc"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Tribometer (Pin on Disk)
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Pin on Disc Tribometer conducting test for evaluation of co efficient of friction, Frictional
                force and wear on metals &amp; Non metals for both dry and lubricated condition under sliding contact.
                </p>
                <a
                  href="/tribometer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/singlescrewextruder.jpeg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Single Screw Extruder
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Single Screw Extruder: Utilized for processing various
                  materials in engineering research.
                </p>
                <a
                  href="/twin-screw-extruder"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/cryomill.jpg"
                  alt="cryomill"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Cryo Mill
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Cryogenic grinding is a process where thermally sensitive and elastic substances are
                successfully processed by cooling with liquid nitrogen.
                </p>
                <a
                  href="/cryo-mill"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/millimc.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Milling Machine
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Universal Milling Machine: Versatile equipment for shaping
                  materials in manufacturing processes.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/shore-hardness-tester.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Digital Shore Hardness Tester
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Digital Shore Hardness Tester: Determines material hardness
                  using digital technology for accuracy.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/ultimaker3d-printer.jpeg"
                  alt="printer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  3D Printer Ultimaker 2+
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  3D Printer Ultimaker 2+: High-performance 3D printing for
                  rapid prototyping and research.
                </p>
                <a
                  href="/printer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/prusa.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  3D Printer Prusa i3
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  3D Printer Prusa i3: Cost-effective 3D printing solution for
                  various engineering applications.
                </p>
                <a
                  href="/printer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/3dprinteraccucraft.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  3D Printer Accucraft i250
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  3D Printer Accucraft i250: Precision 3D printing with a focus
                  on efficiency and reliability.
                </p>
                <a
                  href="/printer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/tensile.jpg"
                  alt="tensile-tester"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Universal Tensile Tester
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                This Universal Testing Machines is electro mechanical machine with digital display of load &amp;
                  displacement &amp; pulley belt system for changing speeds.
                </p>
                <a
                  href="/universal-tensil-tester"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/injection-moulding-machine.webp"
                  alt="molding-machine"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Injection Molding Machine
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                This machine is used to fabricate the product by melting and pressurizing the material into
                the die. It is normally used for the injection of polymer material.
                </p>
                <a
                  href="/injection-modeling-machine"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/.jpg"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Digital Micro Hardness Tester
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Digital Micro Hardness Tester: Measures material hardness at a
                  microscopic level with digital precision.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div> */}

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/vapoursmooth.png"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Vapour Smoothening
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
               With little labor and a short processing cycle, the Finishing Touch™ Smoothing Station yields prototypes, tools and end-use
                parts that have finishes that are ready for paint, plating or production.
                </p>
                <a
                  href="/vapour-smoothening"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/airjeterosion.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Air Jet Erosion Tester
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Air Jet Erosion Tester: Evaluates material erosion resistance
                  under high-velocity air jet conditions.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/samplesaw.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Metallurgical Sample Saw
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Metallurgical Sample Saw: Cuts metallurgical samples with
                  precision for analysis.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/Abrasive-Cutting-MC.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Abrasive Cutting Machine
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Abrasive Cutting Machine: Cuts materials using abrasive tools
                  for precise shaping. Study floor model cutter for sectioning metals, ceramics and mineral samples.
                </p>
                <a
                  href="/abrasive-cutting-machine"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/grindingpolishingmachine.png"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                Double Disc Polishing Machine
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Polishing M /c is used for polishing the Metallographic samples. Double Disc is driven by high torque
                motor. The speed can be continuously varied as indicated.
                </p>
                <a
                  href="/double-disc-polishing-machine"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/vaccumoven.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Vacuum Oven
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Vacuum Oven: Applies controlled vacuum conditions for drying
                  and curing materials.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/Sieve-Shaker.jpeg"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Sieve Shaker
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Sieve Shaker: Separates particles of different sizes in
                  materials for analysis or processing.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/melt-flow.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Melt Flow Tester
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Melt Flow Tester: Measures the flow properties of molten
                  polymers for processing evaluation.
                </p>
                <a
                  href="/melt-flow-tester"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/hot-air-oven.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Hot Air Oven
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Hot Air Oven: Provides controlled heat treatment for materials
                  in various applications.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/toolmakermicroscope.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Tool Maker’s Microscope
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Tool Maker’s Microscope: Enables detailed inspection and
                  measurement of tooling components.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/flir-infrared-thermometer.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  FLIR Infrared Thermometer
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  FLIR Infrared Thermometer: Measures surface temperatures
                  accurately using infrared technology.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/VibratoryFinishing.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Vibratory Finishing Machine
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Vibratory Finishing Machine: Achieves surface finishing of
                  materials through vibratory agitation.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/metallographicpress.webp"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Metallographic Hot Mounting Press
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Metallographic Hot Mounting Press: Prepares metallurgical
                  samples for analysis through hot mounting.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/.jpg"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  3D Scanner
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  3D Scanner: Captures three-dimensional data of objects for
                  analysis or reproduction.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div> */}

            {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/.jpg"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Surface Roughness Tester
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Surface Roughness Tester: Measures surface roughness of
                  materials for quality assessment.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div> */}

            {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/.jpg"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Inverted Metallurgical Microscope
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Inverted Metallurgical Microscope: Inspects metallurgical
                  samples with magnification from beneath.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div> */}

            {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/.jpg"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Ultrasonic Tank
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Ultrasonic Tank: Utilizes ultrasonic waves for cleaning or
                  processing materials.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div> */}

            {/* <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/.webp"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Thermal Conductivity Tester
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Thermal Conductivity Tester: Determines the ability of
                  materials to conduct heat for engineering purposes.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div> */}

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/Digital-Micrometer.webp"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Digital Micrometer
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Digital Micrometer: Measures dimensions with high precision
                  using digital technology.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/Digital-Vernier-Caliper.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Digital Vernier Caliper
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Digital Vernier Caliper: Measures dimensions accurately with
                  digital readout for engineering applications.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/Pedestal-Grinder.webp"
                  alt="img"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Pedestal Grinder
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Pedestal Grinder: Sharpens and shapes tools and materials
                  using grinding wheels mounted on a pedestal.
                </p>
                <a
                  href="/"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  Read More
                </a>
              </div>
            </div>

            {/* Additional grid items go here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestingFacilities;
