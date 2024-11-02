"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle, faMicrosoft, faAmazon, faFacebook } from "@fortawesome/free-brands-svg-icons";

const PartnerSection = () => {
  return (
    <div className=" py-16">
      <div className="overflow-hidden">
        <div className="animate-scroll whitespace-nowrap flex items-center space-x-12">
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <FontAwesomeIcon icon={faApple} className="text-black text-8xl" />
              <FontAwesomeIcon icon={faGoogle} className="text-black  text-8xl" />
              <FontAwesomeIcon icon={faMicrosoft} className="text-black  text-8xl" />
              <FontAwesomeIcon icon={faAmazon} className="text-black  text-8xl" />              
              <FontAwesomeIcon icon={faApple} className="text-black text-8xl" />
              <FontAwesomeIcon icon={faGoogle} className="text-black  text-8xl" />
              <FontAwesomeIcon icon={faMicrosoft} className="text-black  text-8xl" />
              <FontAwesomeIcon icon={faAmazon} className="text-black  text-8xl" />              
              <FontAwesomeIcon icon={faApple} className="text-black text-8xl" />
              <FontAwesomeIcon icon={faGoogle} className="text-black  text-8xl" />
              <FontAwesomeIcon icon={faMicrosoft} className="text-black  text-8xl" />
              <FontAwesomeIcon icon={faAmazon} className="text-black  text-8xl" />              
              <FontAwesomeIcon icon={faApple} className="text-black text-8xl" />
              <FontAwesomeIcon icon={faGoogle} className="text-black  text-8xl" />
              <FontAwesomeIcon icon={faMicrosoft} className="text-black  text-8xl" />
              <FontAwesomeIcon icon={faAmazon} className="text-black  text-8xl" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
