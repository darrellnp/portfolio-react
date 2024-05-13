import React from "react"

export default function Profile() {
  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1200px] p-2 overflow-hidden">
        <div
          className="font-secondary text-center font-bold mb-12 "
          data-aos="zoom-in-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h4 className="text-secondary mb-3 font-black text-[30px]">
            Skills List
          </h4>
          <h2 className="font-semibold  max-w-[700px] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            doloremque quam consectetur! Cupiditate aut delectus deleniti,
            quidem aspernatur repellat harum quo voluptate mollitia vitae magnam
            earum quia ex aliquid hic?
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div
            className="text-center w-full max-w-[400px] mx-auto mb-[50px]"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="min-w-[300px] min-h-[300px] bg-gradient rounded-full overflow-hidden">
              <img src="/images/profile.png" alt="profile" />
            </div>
            <h2 className="text-gradient text-[50px] mt-[20px]">Darrell N.P</h2>
          </div>
          <div
            className="w-full lg:pt-[50px]  lg:ml-[50px]"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/1.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear cursor-pointer">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">JQuery</h4>
                      </div>
                      <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/2.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear cursor-pointer">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Bootstrap</h4>
                      </div>
                      <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/3.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear cursor-pointer">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">CSS 3</h4>
                      </div>
                      <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/4.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear cursor-pointer">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">HTML 5</h4>
                      </div>
                      <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/4.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear cursor-pointer">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">HTML 5</h4>
                      </div>
                      <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/3.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear cursor-pointer">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">CSS3</h4>
                      </div>
                      <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
