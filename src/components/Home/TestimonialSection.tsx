"use client";

import React from "react";

// Sample data for testimonials
const testimonials = [
  {
    logo: "/code canvas creations/testimonial1.webp",
    title: "Transforming Our Operations and Data Management",
    content:
      "SoftLoan has completely transformed our operations at Torch. Within hours, we integrated our systems with Google Sheets, significantly enhancing our pricing rules workflow. Their platform's test-driven development and outstanding support were remarkable.",
    author: {
      name: "Joe Shoop",
      position: "Director of Engineering",
      company: "Torch 3PL",
      image: "/code canvas creations/avatar1.webp",
    },
  },
  {
    logo: "/code canvas creations/testimonial2.webp",
    title: "Unbelievably Fast Credit Decisioning with SoftLoan",
    content:
      "The customization and flexibility of SoftLoan's solution for credit decisioning have been game-changers for us. Its depth and change tracking capabilities provide substantial value in managing dynamic policy environments in financial services. I highly recommend SoftLoan for anyone looking to enhance their loan processing efficiency.",
    author: {
      name: "Sandeep Arora",
      position: "Chief Technology Officer",
      company: "Nupay",
      image: "/code canvas creations/avatar2.png",
    },
  },
];

const TestimonialSection = () => {
  return (
    <div className="mx-auto py-10 lg:px-0">
      <p className="text-md font-semibold text-gray-500 py-2">TESTIMONIALS</p>
      <h2 className="text-5xl mb-28">Hear From Our Users</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-[#F8F9FB] py-28 px-20 rounded-3xl shadow-lg w-full lg:w-1/2 space-y-4"
          >
            {/* Logo Positioned Outside Border */}
            <div className="absolute -top-20 left-3/5 h-32 w-44 rounded-full shadow-2xl flex items-center justify-center">
              <img
                src={testimonial.logo}
                alt={`${testimonial.author.company} logo`}
                className="h-36 w-44 rounded-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl text-basicColor mt-12">
              <span className="text-4xl leading-12">&quot;</span> {testimonial.title} <span>&quot;</span>
            </h3>

            {/* Content */}
            <p className="text-gray-500 mb-6 leading-7">{testimonial.content}</p>

            {/* Author Info */}
            <div className="flex items-center">
              <img
                src={testimonial.author.image}
                alt={`${testimonial.author.name} profile`}
                className="h-20 w-20 rounded-full mr-4 mt-8"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{testimonial.author.name}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.author.position}, {testimonial.author.company}
                </p>
              </div>
            </div>

            {/* Arrow Navigation */}
            {index === 0 ? (
              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-basicColor">
                ❮
              </button>
            ) : (
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-basicColor">
                ❯
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center mt-10">
        <button className="bg-basicColor text-white px-6 py-3 rounded-lg mr-4 hover:bg-gray-800 transition duration-300">
          Start Your Free Trial
        </button>
        <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
          View Pricing
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
