import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Success() {
  return (
    <>
      <div >
        <div className="flex items-center justify-between h-full w-full absolute z-0  pt-10">
          <div className="w-1/3 bg-white h-full" />
          <div className="w-4/6 ml-16 bg-gray-100 h-full" />
        </div>
        <div className="xl:px-20 px-8 pt-20 2xl:mx-auto 2xl:container relative z-40">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={2}
          >
            <h1 className="text-4xl font-semibold xl:block hidden leading-tight text-gray-800">
              What our customers are
              <br />
              saying
            </h1>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
              What our customers are saying
            </h1>
            <Slider>
              <Slide index={0} tabIndex="null">
                <div className="flex">
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src="https://img.freepik.com/free-photo/portrait-business-woman-working-laptop_1303-9731.jpg"
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Some of the best work that was done!
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                          Our core values are at the heart of all that we do.
                          They are integrated into our daily work lives and help
                          us to remember our customers always comes first, the
                          last thank you should always comes from us.
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          Anna Smith
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          Senior Web Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div
                  className="flex relative"
                  style={{ transform: "translateX(0%)" }}
                >
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src="https://i.ibb.co/4g1D9cv/imgslider1.png"
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          Some of the best work that was done!
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                          Our core values are at the heart of all that we do.
                          They are integrated into our daily work lives and help
                          us to remember our customers always comes first, the
                          last thank you should always comes from us.
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          Anna Smith
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          Senior Web Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className="flex items-center mt-8 ">
              <ButtonBack
                className="cursor-pointer "
                role="button"
                aria-label="previous slide"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                  alt="previous"
                />
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="next slide"
                className="cursor-pointer ml-2"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                  alt="next"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
      {/* <section className="w-full h-auto">
        <div className="w-full h-auto flex ">
          <div className="hidden lg:flex flex-col justify-end w-[15%]">
            <div className="relative">
              <div className="absolute w-full h-full bg-orange-500 opacity-70"></div>
              <img
                src="/testimonials/testi3.jpg"
                alt=""
                className="w-full h-auto "
              />
            </div>
          </div>
          <figure className="grid lg:grid-cols-2 gap-5 w-full lg:w-[70%]">
            <div className="px-5">
              <img
                src="/testimonials/testi6.jpg"
                alt=""
                className="w-full h-auto border-l-8 border-orange-500"
              />
            </div>
            <div className="w-full h-auto pr-10 flex flex-col justify-between ">
              <div className="flex items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-gray-400 fill-gray-400"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <div>
                <blockquote className="mt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  harum ex voluptates nulla dignissimos modi voluptate eveniet
                  totam accusamus laudantium nemo aspernatur quas tempore
                  exercitationem itaque quaerat! Voluptate eaque pariatur dolore
                  eum numquam assumenda modi velit repellat accusantium libero
                  rem eveniet deleniti aperiam consequuntur cum laudantium ipsum
                  delectus amet vitae.
                </blockquote>
                <figcaption className="text-3xl font-bold mt-3">
                  Carolyn Willms
                </figcaption>
                <figcaption className="text-sm text-gray-500 mt-1">
                  CEO Global Organisation
                </figcaption>
              </div>
            </div>
          </figure>
          <div className="hidden lg:flex flex-col justify-end w-[15%]">
            <div className="relative">
              <div className="absolute w-full h-full bg-orange-500 opacity-70"></div>
              <img
                src="/testimonials/testi10.jpg"
                alt=""
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex gap-2  mt-2">
          <div className="flex  justify-end w-1/2 lg:w-[15%]">
            <button className="flex items-center justify-between bg-orange-500 text-white p-3 w-28 text-sm hover:scale-[98%] transition">
              <ChevronLeft size={15} />
              Previous
            </button>
          </div>
          <div className="hidden lg:flex  lg:w-[70%]"></div>
          <div className="flex  justify-start w-1/2 lg:w-[15%]">
            <button className="flex items-center justify-between bg-orange-500 text-white p-3 w-28 text-sm hover:scale-[98%] transition">
              Next
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}
