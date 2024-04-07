import React, { useState, useRef } from "react";
import { toast, Toaster } from "sonner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null); // Reference to the form element

  const baseUrl = "https://manufacturing-research-laboratory-gndec.vercel.app";

  const sendEmail = async () => {
    try {
      const response = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show toast message for successful email submission
        toast.success("Email sent successfully!");
        
        formRef.current.reset(); 
        setFormData({ 
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>

      <div
        className="w-full h-80 bg-indigo-200 relative flex items-center justify-center"
        style={{
          backgroundImage: "url(/contact.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 1.8,
        }}
      >
        <div className="text-center mt-5">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-white mt-16 font-medium mb-0">
          Contact Us
          </h1>
        </div>
      </div>

        <div className="w-full" id="contact-form">
      <div className="w-full flex flex-col items-center justify-center bg-slate-200 py-12">
        {/* Render the Toaster component */}
        <Toaster position="top-center"/>

        <div className="flex flex-col items-start text-justify font-medium gap-2 bg-white lg:w-1/2 sm:w-3/4 xs:w-full px-12 py-8 rounded-md shadow-2xl mb-12">
          <span className="text-justify text-md opacity-80 mb-2">
            <i className="fa-solid = fa-location-dot"> </i>&nbsp;Manufacturing
            Research Lab, Mechanical and Production Engineering Department, Guru
            Nanak Dev Engineering College, Gill Park, Gill Road, Ludhiana,
            Punjab, India-141006
          </span>

          <span className="text-md opacity-80">
            <i className="fa-solid fa-phone mb-2"></i>&nbsp;Phone No. : 
            +919914400353, +919914330555
          </span>
          <span className="text-md opacity-80">
            <i className="fa-solid fa-envelope mb-2"></i>&nbsp;Email :
            mrlab@gndec.ac.in (official)
          </span>
          <span className="text-md opacity-80">
            <i className="fa-solid fa-envelope mb-2"></i>&nbsp;Email :
            mrlabgndec@gmail.com
          </span>
          <span className="text-md opacity-80">
            <i className="fa-solid fa-phone mb-2"></i>&nbsp;Testing and Consultancy:
            01615064709
          </span>
        </div>

        <div className="lg:w-1/2 sm:w-3/4 xs:w-full flex flex-col items-center gap-4 bg-white px-12 py-8 rounded-md shadow-2xl">
          <h1 className="text-3xl text-indigo-900">Leave a message</h1>
          <form
            ref={formRef} // Set the form reference
            className="flex flex-col gap-4 w-full"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              sendEmail(); // Call sendEmail function on form submission
            }}
          >
            <input
              type="text"
              id="name"
              placeholder="Enter your Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-white px-4 py-1 text-lg border border-slate-400 hover:border-slate-700 focus:outline-black "
              required
            />
            <input
              type="text"
              id="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-white px-4 py-1 text-lg border border-slate-400 hover:border-slate-700 focus:outline-black "
              required
            />
            <input
              type="text"
              id="subject"
              placeholder="Enter Subject"
              className="bg-white px-4 py-1 text-lg border border-slate-400 hover:border-slate-700 focus:outline-black "
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
            />

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              placeholder="Leave a message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-white px-4 py-1 text-lg border border-slate-400 hover:border-slate-700 focus:outline-black "
              required
            ></textarea>

            <div className="mt-6 flex items-center justify-center">
              <button
                type="submit" // Set button type to submit
                className="px-8 py-2 text-xl font-serif text-white border border-green-600 bg-green-600 rounded-md hover:bg-black hover:border hover:border-green-600 hover:text-green-600"

              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="googlemap flex items-center justify-center w-full mt-12 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7604327864055!2d75.85704311066512!3d30.86068466599051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a828f09011b15%3A0xbf3f5b51dcc81b12!2sGuru%20Nanak%20Dev%20Engineering%20College!5e0!3m2!1sen!2sin!4v1712036083726!5m2!1sen!2sin"
            className="lg:w-3/4 shadow-2xl h-96 sm:w-3/4 xs:w-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
