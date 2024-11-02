import TitleSection from "@/components/shared/TitleSection";
import React from "react";
import ContactSection from "./ContactSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
      <div>
        <ContactSection />
        {/* <div className="bg-grayColor">
          <div className="grid lg:grid-cols-2 py-24 max-w-screen-xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                GET EXCLUSIVE UPDATE
              </h2>
              <p className=" my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-3 gap-3">
              <div className="col-span-2 my-5 lg:my-0">
                <input
                  className=" border px-8 py-4 rounded-lg w-full "
                  type="text"
                  placeholder="Email"
                  id=""
                />
              </div>
              <div className="col-span-1">
                <div className="border px-4 py-4 rounded-lg  flex items-center ">
                  <FontAwesomeIcon icon={faPaperPlane} className="w-5" />
                  <button className=" w-full">Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
  );
};

export default Contact;
