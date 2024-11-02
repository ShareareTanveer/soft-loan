"use client";
import React from "react";
import Image from "next/image";

import s1 from "../../../public/code canvas creations/about1.png";
import s2 from "../../../public/code canvas creations/about2.webp";

const AboutPage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-[#E1E1FF] ">
        <div
          className="py-20 px-4 text-center lg:text-left 
      max-w-screen-lg mx-auto"
        >
          <h1 className="text-sm lg:text-sm font-semibold my-8 tracking-widest">
            OUR MISSION
          </h1>
          <p className="text-3xl mb-6">Unlock financial freedom for everyone</p>
          <p className="max-w-2xl mx-auto lg:mx-0">
            softloan is focused on democratizing financial services through
            technology. We build beautiful consumer experiences,
            developer-friendly infrastructure, and intelligent tools that give
            everyone the ability to create amazing products that solve big
            problems.
          </p>
          <button className="mt-4 bg-black text-white py-3 px-6">
            Join us
          </button>
        </div>
      </div>

      {/* Video Section */}
      {/* <div className=" max-w-screen-lg mx-auto py-20 px-4 text-center">
        <div className="relative aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/your-video-id"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}

      {/* Statistics Section */}
      <div className="max-w-screen-lg mx-auto pt-20 pb-10 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-basicColor my-4">900+</h2>
          <p className="text-gray-700 mt-2">
            Team members have joined our mission
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-basicColor my-4">6</h2>
          <p className="text-gray-700 mt-2">Offices around the world</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-basicColor my-4">
            8,000+
          </h2>
          <p className="text-gray-700 mt-2">Fintechs are built on softloan</p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-screen-lg mx-auto py-20 px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center md:text-left">
          About softloan
        </h2>
        <p className="text-gray-600 leading-7 mb-6 max-w-3xl md:w-3/5">
          softloan is committed to democratizing access to financial services by
          providing secure, reliable, and user-friendly solutions that empower
          individuals and businesses alike. By connecting more than 12,000
          financial institutions, we ensure seamless integration for our users.
        </p>
        <p className="text-gray-600 leading-7 mb-6 max-w-3xl md:w-3/5">
          Our platform is designed to support developers in building innovative
          applications that solve real-world problems. Whether you&apos;re looking to
          create a personal finance app, a budgeting tool, or a payment
          solution, softloan provides the foundation needed to bring your ideas to
          life.
        </p>
        <button className="bg-black text-white py-3 px-6 hover:bg-gray-800 transition duration-300">
          Learn More About Our Mission
        </button>
      </div>

      {/* News Section */}
      <div className=" min-h-screen mx-auto bg-[#D4F9FF] py-20 px-4 lg:px-20">
        <div className="max-w-screen-lg mx-auto flex items-center gap-5">
          <div>
            <h2 className="text-md lg:text-sm font-semibold my-8 tracking-[0.2rem]">
              NEWS FROM US
            </h2>
            <p className="max-w-2xl mb-6 pr-16">
              Digital finance is everywhere, but it’s just getting started.
              softloan raises Series D to support growth and enable the next
              generation of digital financial services.
            </p>
            <button className="mt-4 bg-black text-white py-3 px-6">
              Learn more
            </button>
          </div>
          <div className="">
            <Image
              src={s1}
              alt={"s1"}
              height={500}
              width={500}
              className="transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300"
            />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="min-h-screen mx-auto py-4 px-4 lg:px-20 md:flex justify-between items-center gap-6">
        <div className="md:w-1/3">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Customers</h2>
          <p className="max-w-3xl mb-6 md:pr-4">
            Digital finance is everywhere, but it’s just getting started. softloan
            raises Series D to support growth and enable the next generation of
            digital financial services.
          </p>
          <button className="mt-4 bg-black text-white py-3 px-6">
            Meet our customers
          </button>
        </div>
        <div className="mx-auto md:w-2/3 overflow-clip">
          <Image
            src={s2}
            alt={"s2"}
            height={600}
            width={900}
            className="mx-auto transition ease-out delay-150 duration-300 hover:translate-x-6 hover:duration-300"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className=" max-w-screen-lg mx-auto bg-black text-white py-20 px-4 lg:px-20 md:mb-6">
        <h2 className="text-2xl font-bold mb-4">
          Let’s build the future of fintech together
        </h2>
        <p className="max-w-3xl mb-8">
          We live by our mission, and we are building a diverse team who want to
          make an impact and support each other in the process.
        </p>
        <button className="bg-white text-black py-3 px-6">
          Find a role for you
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
