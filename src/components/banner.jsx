import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] max-h-[900px] px-3 items-center"
    >
      <div className="w-full" data-aos="zoom-in" data-aos-duration="500">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello, I am
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Frontend Developer",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                3000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="ml-3 text-secondary"
            />
          </div>
        </div>
        <div className="max-w-[750px] mx-auto mt-5 text-center font-semibold ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          vel qui ducimus eaque, saepe hic sapiente voluptates soluta ea
          recusandae nesciunt blanditiis illo quia voluptatibus beatae porro
          laborum. Ratione, eveniet?
        </div>
      </div>
    </div>
  )
}
