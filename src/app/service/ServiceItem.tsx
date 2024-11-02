import React from "react";
import Link from "next/link";
import { getOurServiceList } from "@/lib/services/our-service.service";
import { IOurService } from "@/lib/interfaces/service.interface";

const ServiceItem = async () => {
  const services: IOurService[] = await getOurServiceList();
  return (
    <div className="grid lg:grid-cols-4 gap-6  max-w-screen-xl mx-auto px-2 py-28">
      {services?.map((item: any) => (
        <Link key={item?.id} href={`service/${item?.id}`}>
          <div className="text-center space-y-3 py-12 px-6 rounded-xl hover:shadow-xl duration-300 hover:duration-300 hover:border hover:cursor-pointer bg-grayColor">
            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            <h1
              className="text-xl font-semibold text-[#686a8b]"
              title={item?.title}
            >
              {item?.title?.length > 15
                ? item?.title?.slice(0, 15) + "..."
                : item?.title}
            </h1>
            <p className="" title={item?.subtitle}>
              {item?.subtitle?.length > 55
                ? item.subtitle.slice(0, 55) + "..."
                : item.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceItem;
