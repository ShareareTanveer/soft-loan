import React from "react";
import { getOurServiceDetail } from "@/lib/services/our-service.service";
import { IOurServiceDetail } from "@/lib/interfaces/service.interface";
import SwiperDetails from "./SwiperDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FAQSection from "@/components/shared/FaqSection";

interface ServiceDetailProps {
  id: number;
}

const ServiceDetail = async ({ id }: ServiceDetailProps) => {
  const service: IOurServiceDetail = await getOurServiceDetail(id);

  const { title, description, images, subtitle, keyPoints, faqs } =
    service || {};

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <SwiperDetails images={images} />
        </div>

        <div className="lg:col-span-1 flex flex-col justify-center">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <h2 className="text-xl font-semibold text-gray-700">{subtitle}</h2>
            <p className="text-gray-600 text-lg">{description}</p>
          </div>
        </div>

        {/* Key Points Section */}
        <div className="py-10">
          <h3 className="text-2xl font-semibold text-gray-800">Features</h3>
          <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
            {keyPoints?.map((point, index) => (
              <li
                key={index}
                className="flex space-x-3 items-center hover:cursor-pointer transition ease-out delay-150 duration-300  hover:translate-x-6 hover:duration-300 "
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="w-3 text-basicColor"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />
      </div>
    </div>
  );
};

export default ServiceDetail;
