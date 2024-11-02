import SwiperDetails from "@/app/service/[id]/SwiperDetails";
import { getBlogDetail } from "@/lib/services/blog.service";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface BlogDetailProps {
  id: number;
}

const BlogSingleDetails = async ({ id }: BlogDetailProps) => {
  const blogDetails: any = await getBlogDetail(id);

  const { title, description, images, subtitle, keyPoints } =
    blogDetails || {};

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <SwiperDetails images={images} />
        </div>

        <div className="lg:col-span-1 flex flex-col justify-center">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <h2 className="text-sm font-semibold text-gray-500">{subtitle}</h2>
            <p className="text-gray-600 ">{description}</p>
          </div>
        </div>

        <div className="py-10">
          <h3 className="text-2xl font-semibold text-gray-800">Key Notes:</h3>
          <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
            {keyPoints?.map((point: any, index: any) => (
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
      </div>
    </div>
  );
};

export default BlogSingleDetails;
