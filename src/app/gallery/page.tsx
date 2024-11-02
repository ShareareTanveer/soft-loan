import React from "react";
import pc from "../../../public/code canvas creations/pc image.jpg";
import Image from "next/image";
import { getAGenericPageSection } from "@/lib/services/generic-section.service";

const Gallery = async () => {
  const section: any = await getAGenericPageSection("Gallery");
  return (
    <div className="max-w-screen-xl mx-auto px-2 my-32">
      <div className="lg:grid grid-cols-3 gap-10 space-y-4 md:space-y-0">
        {section?.data?.items?.map((item: any) => (
          <Image
            key={item.id}
            src={item?.image ? item?.image : pc}
            alt={"gallery"}
            width={200}
            height={500}
            className="lg:rounded-2xl overflow-hidden w-full hover:cursor-pointer max-h-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
