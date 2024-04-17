'use client'
import React from "react";
import Testimonials from "../components/Testimonial";
import Image from "next/image";
import aboutImg from "@/public/assets/images/about header.jpg";
import CEO from "@/public/assets/images/CEO.jpg";
import CFO from "@/public/assets/images/CFO.jpg";
import CTO from "@/public/assets/images/CTO.jpg";
import CMO from "@/public/assets/images/CMO.jpg";
import s1 from '@/public/assets/images/a3.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Keyboard } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const page = () => {
  return (
    <div className="bg-white">
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            We Prioritize Your Satisfaction Above{" "}
            <span className="text-indigo-600"> All Else.</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Our team scours the globe to handpick products that are not only
            trendy but also of the highest quality.
          </p>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <Image
                src={aboutImg}
                alt="About Us tailwind page"
                className="max-lg:mx-auto"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  At FindLet, we&apos;re passionate about providing you with an
                  unparalleled shopping experience. Our journey began with a
                  simple idea: to create a platform where you can discover
                  unique products that inspire and delight. Whether you&apos;re looking for fashion-forward
                  apparel, stylish accessories, or innovative gadgets,
                  we&apos;re here to help you discover items that reflect your
                  personality and passions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <Image
                  src={s1}
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2020
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Founded in 2020, FindLet started as a small team of
                  entrepreneurs with a big vision. We wanted to build more than
                  just an online store; we aimed to create a community where
                  customers could find products that resonate with their
                  lifestyles and values.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <Image
                src={s1}
                alt="About Us tailwind page"
                className="hidden lg:block "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Company&apos;s remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of FindLet
                    and pillars of our success.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Projects Completed
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We have sold more than 625 products worldwide and we are
                    still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />

      <section className="py-14 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-6">
              Meet our soldier of trade
            </h2>
            <p className="text-lg text-gray-500 text-center">
              We provide all the advantage that can simplify all your shopping
              and trading support without any further issues
            </p>
          </div>
          {/*Slider Wrapper*/}
          <div className="swiper teamswiper pb-10">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Keyboard]}
              loop={true}
              watchSlidesProgress={true}
              slidesPerView={ 1}
              spaceBetween={32}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              keyboard={{ enabled: true }}
              breakpoints={{
                769: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              scrollbar={{
                el: ".swiper-scrollbar",
              }}
              pagination={{
                el: ".swiper-pagination",
                type: "fraction",
              }}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <SwiperSlide>
                    <div className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500 p-8  lg:flex-nowrap">
                      <div className=" w-full lg:w-48 h-64">
                        <Image
                          src={CEO}
                          alt="image"
                          className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                        />
                      </div>
                      <div className="text-center lg:text-left lg:max-w-xs flex-1">
                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                          <h6 className="text-lg text-gray-900 font-semibold mb-1">
                            Ogbonna Stephen
                          </h6>
                          <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                            Founder &amp; CEO
                          </span>
                        </div>
                        <p className="text-gray-500 leading-6 mb-7">
                          I am the founder of FindLet and we’ve pushed our limit
                          so far to make it successful.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="group w-full flex-wrap flex items-center gap-8 flex-col md:flex-row transition-all duration-500 p-8 lg:flex-nowrap">
                      <div className=" w-full lg:w-48 h-64 max-lg:max-w-[204px] max-lg:mx-auto">
                        <Image
                          src={CFO}
                          alt="image"
                          className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                        />
                      </div>
                      <div className="text-center lg:text-left lg:max-w-xs flex-1 flex flex-col justify-between">
                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                          <h6 className="text-lg text-gray-900 font-semibold mb-1">
                            Chioma Cynthia
                          </h6>
                          <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                            Chief Financial Officer CFO
                          </span>
                        </div>
                        <p className="text-gray-500 leading-6 mb-7">
                          Being A Team Player Is A Pretty thing. Thank You For
                          Choosing FindLet
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="group w-full flex-wrap flex items-center gap-8  transition-all duration-500 p-8  lg:flex-nowrap">
                      <div className=" w-full lg:w-48 h-64">
                        <Image
                          src={CMO}
                          alt="image"
                          className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                        />
                      </div>
                      <div className="text-center lg:text-left lg:max-w-xs flex-1">
                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                          <h6 className="text-lg text-gray-900 font-semibold mb-1">
                            Patrick Nonso
                          </h6>
                          <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                            Chief Marketting Officer (CMO)
                          </span>
                        </div>
                        <p className="text-gray-500 leading-6 mb-7">
                          We Shopping Fun And Vibe.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="group w-full flex-wrap flex items-center gap-8 flex-col md:flex-row transition-all duration-500 p-8 lg:flex-nowrap">
                      <div className=" w-full lg:w-48 h-64 max-lg:max-w-[204px] max-lg:mx-auto">
                        <Image
                          src={CTO}
                          alt="image"
                          className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                        />
                      </div>
                      <div className="text-center lg:text-left lg:max-w-xs flex-1 flex flex-col justify-between">
                        <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                          <h6 className="text-lg text-gray-900 font-semibold mb-1">
                            Edu Clement
                          </h6>
                          <span className="text-sm text-gray-500 group-hover:text-indigo-600">
                            Chief Technology Officer (CTO)
                          </span>
                        </div>
                        <p className="text-gray-500 leading-6 mb-7">
                          We Deliver At your Door Step.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>

              <button
                id="slider-button-left"
                className="swiper-button-prev p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
                data-carousel-prev=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.38413 15.1022L3.33301 10.0511M3.33301 10.0511L8.38413 5M3.33301 10.0511L18.3329 10.0511"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next z-[100] right-[35%] top-[93%] p-2.5 group flex justify-center items-center text-gray-900 w-12 h-12 transition-all duration-500 rounded-full hover:text-indigo-600"
                data-carousel-next=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.6158 5L16.6669 10.0511M16.6669 10.0511L11.6158 15.1022M16.6669 10.0511L1.66699 10.0511"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="swiper-pagination" ></div>
              <div className="swiper-scrollbar" ></div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
