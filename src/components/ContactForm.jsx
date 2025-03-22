import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();
  const [inpval, setINP] = useState({
    Username: "",
    Email: "",
    Message: "",
    Subject: "",
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const { Username, Email, Message, Subject } = inpval;

    if (!Username) {
      alert("Username is required");
    } else if (!Email) {
      alert("Email is required");
    } else if (!Email.includes("@")) {
      alert("Enter a valid email");
    } else if (!Message) {
      alert("Message is required");
    } else if (!Subject) {
      alert("Subject is required");
    } else {
      try {
        const res = await fetch("http://localhost:8001/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inpval),
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
          alert("Error adding data");
        } else {
          navigate("/");
          alert("Data added successfully");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-[1100px]">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Map Section */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.555340568917!2d72.9506427!3d19.1709319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f73ee2dd51%3A0xaddd38cdc5df63e5!2sValji%20Ladha%20Rd%2C%20Mulund%20West%2C%20Mumbai%2C%20Maharashtra%20400080!5e0!3m2!1sen!2sin!4v1738394827417!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 flex justify-center gap-6 mt-10">
            <div className="phone flex gap-3 items-center">
              <FiPhone className="text-orange-500" />
              <p className="text-sm md:text-base">+091 234 5678</p>
            </div>
            <div className="email flex gap-3 items-center">
              <MdOutlineMailOutline className="text-orange-500" />
              <p className="text-sm md:text-base">info@carhire.com</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <h2 className="mb-6 text-2xl font-bold font-sans tracking-tight text-[18px]">
            DROP US A LINE
          </h2>
          <p className="mb-8 text-muted-foreground text-gray-600 text-[14px] font-sans">
            Have any questions? Feel free to reach out to us!
          </p>
          <form className="space-y-6" onSubmit={addinpdata}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                type="text"
                name="Username"
                value={inpval.Username}
                onChange={setdata}
                placeholder="Name"
                required
                className="hover:ring-2 hover:ring-orange-500 focus:ring-2 focus:ring-orange-500 rounded-none"
              />
              <Input
                type="email"
                name="Email"
                value={inpval.Email}
                onChange={setdata}
                placeholder="E-mail"
                required
                className="hover:ring-2 hover:ring-orange-500 focus:ring-2 focus:ring-orange-500 rounded-none"
              />
            </div>
            <Input
              type="text"
              name="Subject"
              value={inpval.Subject}
              onChange={setdata}
              placeholder="Subject"
              required
              className="hover:ring-2 hover:ring-orange-500 focus:ring-2 focus:ring-orange-500 rounded-none"
            />
            <Textarea
              name="Message"
              value={inpval.Message}
              onChange={setdata}
              placeholder="Message"
              required
              className="hover:ring-2 hover:ring-orange-500 focus:ring-2 focus:ring-orange-500 min-h-[150px] rounded-none"
            />
            <div className="mt-5 text-center md:text-left">
              <Button
                type="submit"
                onClick={addinpdata} 
                className="font-semibold text-sm sm:text-[14px] bg-white transition-all duration-300 text-orange-500 px-4 sm:px-6 py-2 rounded-full mt-4 hover:bg-orange-500 hover:text-white border-2 border-orange-500 inline-block focus:outline-none"
              >
                BOOK NOW
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
