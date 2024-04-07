import React, { useState } from "react";
import { toast, Toaster } from "sonner";

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    dropdownOption: "",
    instituteIndustryName: "",
    designation: "",
    department: "",
    urn: "",
    testingFacilities: {
      Differential_Scanning_Calorimetry: false,
      Fourier_Transmission_Infra_Red_Spectroscopy: false,
      Single_Screw_Extruder: false,
      Milling_Machine: false,
      Infrared_Metallurgical_Microscope: false,
      Vibratory_Grinding_Finishing_Machine: false,
      Surface_Roughness_Tester: false,
      FLIR_Spot_Thermal_Camera: false,
      Sieve_Shaker: false,
      Utrasonic_Tank: false,
      Metallurgical_Sample_Saw: false,
      Thermal_Conductivity: false,
      Air_Jet_Erosion: false,
      Hot_Air_Oven: false,
      Vaccum_Oven: false,
      Twin_Screw_Extruder: false,
      Micro_Vicker_Hardness: false,
      Tribometer: false,
      Cryo_Mill: false,
      Printer: false,
      Universal_Tensile_Tester: false,
      Vapour_Smoothening: false,
      Melt_Flow_Tester: false,
      Injection_Molding: false,
      Abrasive_Cutting: false,
      Double_Disc_Polishing: false,
    },
    samples: {
      Differential_Scanning_Calorimetry: "",
      Fourier_Transmission_Infra_Red_Spectroscopy: "",
      Single_Screw_Extruder: "",
      Milling_Machine: "",
      Infrared_Metallurgical_Microscope: "",
      Vibratory_Grinding_Finishing_Machine: "",
      Surface_Roughness_Tester: "",
      FLIR_Spot_Thermal_Camera: "",
      Sieve_Shaker: "",
      Utrasonic_Tank: "",
      Metallurgical_Sample_Saw: "",
      Thermal_Conductivity: "",
      Air_Jet_Erosion: "",
      Hot_Air_Oven: "",
      Vaccum_Oven: "",
      Twin_Screw_Extruder: "",
      Micro_Vicker_Hardness: "",
      Tribometer: "",
      Cryo_Mill: "",
      Printer: "",
      Universal_Tensile_Tester: "",
      Vapour_Smoothening: "",
      Melt_Flow_Tester: "",
      Injection_Molding: "",
      Abrasive_Cutting: "",
      Double_Disc_Polishing: "",
    },
  });
 
  const baseUrl = "https://mrlgndec-289c.vercel.app";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/email/sendQueryForm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Query form submitted successfully!");
        setFormData({
          // Clear the form state
          name: "",
          email: "",
          contactNumber: "",
          dropdownOption: "",
          instituteIndustryName: "",
          designation: "",
          department: "",
          urn: "",
          testingFacilities: {
            Differential_Scanning_Calorimetry: false,
            Fourier_Transmission_Infra_Red_Spectroscopy: false,
            Single_Screw_Extruder: false,
            Milling_Machine: false,
            Infrared_Metallurgical_Microscope: false,
            Vibratory_Grinding_Finishing_Machine: false,
            Surface_Roughness_Tester: false,
            FLIR_Spot_Thermal_Camera: false,
            Sieve_Shaker: false,
            Utrasonic_Tank: false,
            Metallurgical_Sample_Saw: false,
            Thermal_Conductivity: false,
            Air_Jet_Erosion: false,
            Hot_Air_Oven: false,
            Vaccum_Oven: false,
            Twin_Screw_Extruder: false,
            Micro_Vicker_Hardness: false,
            Tribometer: false,
            Cryo_Mill: false,
            Printer: false,
            Universal_Tensile_Tester: false,
            Vapour_Smoothening: false,
            Melt_Flow_Tester: false,
            Injection_Molding: false,
            Abrasive_Cutting: false,
            Double_Disc_Polishing: false,
          },
          samples: {
            Differential_Scanning_Calorimetry: "",
            Fourier_Transmission_Infra_Red_Spectroscopy: "",
            Single_Screw_Extruder: "",
            Milling_Machine: "",
            Infrared_Metallurgical_Microscope: "",
            Vibratory_Grinding_Finishing_Machine: "",
            Surface_Roughness_Tester: "",
            FLIR_Spot_Thermal_Camera: "",
            Sieve_Shaker: "",
            Utrasonic_Tank: "",
            Metallurgical_Sample_Saw: "",
            Thermal_Conductivity: "",
            Air_Jet_Erosion: "",
            Hot_Air_Oven: "",
            Vaccum_Oven: "",
            Twin_Screw_Extruder: "",
            Micro_Vicker_Hardness: "",
            Tribometer: "",
            Cryo_Mill: "",
            Printer: "",
            Universal_Tensile_Tester: "",
            Vapour_Smoothening: "",
            Melt_Flow_Tester: "",
            Injection_Molding: "",
            Abrasive_Cutting: "",
            Double_Disc_Polishing: "",
          },
        });
      } else {
        toast.error("Failed to submit query form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting query form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      testingFacilities: {
        ...prevState.testingFacilities,
        [name]: checked,
      },
    }));
  };

  const handleSampleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      samples: {
        ...prevState.samples,
        [name]: value,
      },
    }));
  };

  const handlePDFView = () => {
    // Logic to open PDF in a new tab
    window.open("/Testingcharges.pdf", "_blank");
  };

  return (
    <>
      <div
        className="w-full h-80 bg-indigo-200 relative flex items-center justify-center"
        style={{
          backgroundImage: "url(/query.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 1.8,
        }}
      >
        <div className="text-center justify-center mt-5">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-black font-medium mt-9">
            Query Form ?
          </h1>
        </div>
      </div>

       {/* Render the Toaster component */}
        <Toaster position="top-center"/>

      <div className="w-full flex justify-center">
        <div className="w-full md:w-1/2 p-4">
          <div className="card rounded bg-slate-300 border shadow-lg p-4">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-300 border-b-2 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 border-b-2 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contactNumber" className="block mb-1 text-lg">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your contact number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full border-gray-300 border-b-2 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dropdownOption" className="block mb-1 text-lg">
                  Institute / Industry
                </label>
                <select
                  id="dropdownOption"
                  name="dropdownOption"
                  value={formData.dropdownOption}
                  onChange={handleChange}
                  className="w-full border-gray-300 border-b-2 rounded-md px-3 py-2"
                >
                  <option value="">Select</option>
                  <option value="institute">Institute</option>
                  <option value="industry">Industry</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="instituteIndustryName"
                  className="block mb-1 text-lg"
                >
                  Name of Institute/Industry
                </label>
                <input
                  type="text"
                  id="instituteIndustryName"
                  name="instituteIndustryName"
                  placeholder="Enter the name"
                  value={formData.instituteIndustryName}
                  onChange={handleChange}
                  className="w-full border-gray-300 border-b-2 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="designation" className="block mb-1 text-lg">
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  placeholder="Enter your designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full border-gray-300 border-b-2 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="department" className="block mb-1 text-lg">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="Enter your department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full border-gray-300 border-b-2 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="urn" className="block mb-1 text-lg">
                  URN
                </label>
                <input
                  type="text"
                  id="urn"
                  name="urn"
                  placeholder="Enter your URN (If Student)"
                  value={formData.urn}
                  onChange={handleChange}
                  className="w-full border-gray-300 border-b-2 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-3 mt-5 font-dmserif text-2xl  text-orange-600">
                  Testing Facilities
                </label>
                {Object.entries(formData.testingFacilities).map(
                  ([key, value]) => (
                    <div key={key} className="mb-3">
                      <input
                        type="checkbox"
                        id={key}
                        name={key}
                        checked={value}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label
                        className="text-black font-dmserif text-base font-bold"
                        htmlFor={key}
                      >
                        {key}
                      </label>
                      <span className="flex d-flex m-2">
                        {" "}
                        No of Samples:
                        <input
                          type="number"
                          name={key}
                          placeholder={key}
                          value={formData.samples[key]}
                          onChange={handleSampleChange}
                          className="border-gray-300 border-b-2 rounded-md px-1 py-1 ml-2"
                        />
                      </span>
                    </div>
                  )
                )}
              </div>
              <div className="mb-4 mt-6">
                <button
                  type="button"
                  onClick={handlePDFView}
                  className="bg-yellow-500 text-white font-serif text-md rounded-md px-8 py-2 mr-5 mb-2"
                >
                  View Testing Charge List (PDF)
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 text-md font-serif text-white border border-green-600 bg-green-600 rounded-md hover:bg-black hover:border hover:border-green-600 hover:text-green-600"
                
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryForm;
