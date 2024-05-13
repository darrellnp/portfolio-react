import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header() {
  return (
    <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 items-center">
        <div
          className="text-gradient"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a href="/">
            <h1 className="text-[30px] leading-none font-bold font-primary">
              darrellnp
            </h1>
            <h4 className="font-normal leading-none font-primary text-center">
              portfolio
            </h4>
          </a>
        </div>
        <div
          className="flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a
            href="https://github.com/darrellnp"
            target="_blank"
            className="hover:text-[#c0c0c0] ease-in-out duration-200"
          >
            <BsGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/darrell-nathaniel-prayogi-73b1b824b/"
            target="_blank"
            className="hover:text-[#0077B5] ease-in-out duration-200"
          >
            <BsLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
