"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/home_data.json";
import informations from "@/data/homeInformation";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import homeServices from "@/data/homeServices";

export default function Home() {
  const { toolsOne, toolsTwo, industries, clients, blogs, faqs } = data;

  return (
    <main className="flex flex-col bg-[#fcfcfc]">
      {/* hero section  */}
      <div className="flex justify-center items-center hero-section-home px-5 lg:px-24 py-5 lg:py-16 lg:min-h-[80vh] flex-col gap-y-7 lg:flex-row bg-[#ececec] hero-bg-gradient">
        <div className="left flex flex-col gap-y-6 lg:gap-y-16 text-center lg:text-left lg:w-[55%]">
          <h1 className="flex flex-col gap-y-2 capitalize">
            <span className="text-md lg:text-2xl text-themeOrange font-medium">
              Driving the next wave of
            </span>
            <span className="lg:text-6xl text-4xl lg:leading-[4.5rem]">
              marketing with integrated strategy, design{" "}
              <span className="text-themeOrange">&amp;</span> technology.
            </span>
          </h1>

          <Link href={"/about-us"} className="mx-auto lg:mx-0 lg:mr-auto">
            <button className="bg-black text-white hover:bg-white hover:border-b hover:border-themeOrange transition-all hover:text-black font-medium px-4 py-3 lg:text-lg ">
              See What We do
            </button>
          </Link>
        </div>

        <div className="right flex justify-center items-center lg:w-[45%] font-bold">
          <Image
            src={
              "https://res.cloudinary.com/dyvr2mbun/image/upload/v1720759168/home/fgafzicb8wkzkzmwm3j7.jpg"
            }
            alt="home-page-banner"
            height={527}
            width={1000}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* content section */}
      <div className="content-section-home px-5 lg:px-[10rem] py-10 lg:py-16">
        <div className="flex gap-y-6 flex-col">
          <div className="up">
            <h2 className="lg:text-5xl text-3xl capitalize">
              We&apos;re Result Driven Digital Marketing Agency
            </h2>
          </div>
          <div className="down flex flex-col gap-y-6 lg:flex-row">
            <div className="left w-full lg:w-[80%] flex flex-col gap-y-3">
              <h3 className="text-xl lg:text-2xl">
                Why sweat online presence?
              </h3>
              <p className="">
                over years of rigor, consistency, sincerity, and dedication.
                With our gamut of fully integrated digital marketing services,
                we provide significant, sustainable, and measurable business
                growth. Maintaining the intrinsic value of your brand digitally
                and making sure that your customers can experience it at every
                touchpoint is our motto. It is right to say that we are
                result-oriented, as we wholeheartedly love and practice PPC.
              </p>
            </div>
            <div className="right lg:w-[20%] flex justify-center lg:items-center">
              <ul className="flex flex-row lg:flex-col gap-x-8 gap-y-2 text-lg text-themeOrange font-semibold capitalize">
                <Link href={"/about-us"}>
                  <li>about</li>
                </Link>
                <Link href={"/blogs"}>
                  <li>our blogs</li>
                </Link>
                <Link href={"/contact-us"}>
                  <li>contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* services section  */}
      <div className="service-section-home px-5 lg:px-[10rem] lg:pb-24 py-10 lg:py-20 bg-[#ececec] flex flex-col gap-y-8">
        <div className="up">
          <h2 className="text-themeOrange text-xl font-semibold capitalize">
            what we are best at
          </h2>
        </div>

        <div className="lower flex flex-col lg:flex-row gap-y-6 lg:gap-y-10 justify-center gap-x-14 border flex-wrap">
          {homeServices.map((item, index) => (
            <Link
              href={item.slug}
              key={`service-item-[${index}]`}
              className="link-item capitalize text-2xl lg:text-3xl font-light lg:w-[30%] leading-[2.7rem] border-b border-themeOrange pb-4 hover:text-themeOrange transition-all ease-in-out flex gap-x-6 lg:gap-x-3"
            >
              <div className="mt-2 text-2xl lg:text-3xl">{item.icon}</div>
              <div className="hidden lg:block">
                <div className="">{item.name}</div>
                <div className="">{item.name2}</div>
              </div>

              <div className="lg:hidden flex gap-x-1">
                <div className="">{item.name}</div>
                <div className="">{item.name2}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* info section  */}
      <div className="info-section-home flex flex-col gap-y-10 lg:gap-y-16 px-5 lg:px-[10rem] py-10 lg:py-14">
        <div className="up flex flex-col gap-y-3">
          <h2 className="text-themeOrange text-lg lg:text-xl font-semibold">
            Tailored Solutions for our clients
          </h2>
          <h2 className="capitalize text-3xl lg:text-5xl">
            Take Your Business To Newer Heights
          </h2>
        </div>

        <div className="down flex flex-wrap justify-between gap-y-6 lg:gap-y-8">
          {informations.map((item, index) => (
            <div
              className="item-detail-box flex flex-col gap-y-3 lg:gap-y-4 lg:w-[30%]"
              key={`info ${index + 1}`}
            >
              <div className="text-4xl lg:text-6xl text-themeOrange">
                {item.icon}
              </div>
              <h3 className="text-2xl capitalize flex flex-row gap-x-2 lg:hidden">
                <span>{item.title}</span>
                <span>{item.title2}</span>
              </h3>
              <h3 className="text-3xl capitalize lg:flex flex-col hidden">
                <span>{item.title}</span>
                <span>{item.title2}</span>
              </h3>
              <p className="">{item.description}</p>
              <div className=""></div>
            </div>
          ))}
        </div>
      </div>

      {/* tools section  */}
      <div className="tools-section-home lg:px-[10rem] px-5 py-5 lg:py-16 flex flex-col gap-y-10">
        <div className="up flex flex-col gap-y-2 lg:gap-y-4">
          <h2 className="text-3xl lg:text-5xl font-medium">
            Tools of the Trade
          </h2>
          <p className="text-gray-500">
            Using top tools for optimal outcomes and deeper insights.
          </p>
        </div>

        <div className="down">
          <div className="top hidden lg:flex justify-between border-b border-gray-300 pb-4">
            {toolsOne.map((item, index) => (
              <Image
                src={item}
                alt="tools-icon"
                height={110}
                width={110}
                key={`tools-one-image ${index + 1}`}
                className=""
              />
            ))}
          </div>

          <div className="top flex lg:hidden justify-between border-b border-gray-300 pb-4">
            {toolsOne.map((item, index) => (
              <Image
                src={item}
                alt="tools-icon"
                height={50}
                width={50}
                key={`tools-one-image ${index + 1}`}
                className=""
              />
            ))}
          </div>

          <div className="bottom hidden lg:flex justify-between pb-4">
            {toolsTwo.map((item, index) => (
              <Image
                src={item}
                alt="tools-icon"
                height={110}
                width={110}
                key={`tools-one-mobile-image ${index + 1}`}
              />
            ))}
          </div>

          <div className="bottom flex lg:hidden justify-between pb-4">
            {toolsTwo.map((item, index) => (
              <Image
                src={item}
                alt="tools-icon"
                height={50}
                width={50}
                key={`tools-one-mobile-image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* poster section  */}
      <div className="poster-section-home border-[2px] border-themeOrange lg:mx-16 mx-5 lg:mb-16 py-10 lg:px-32 px-5">
        <div className="flex flex-col lg:flex-row gap-y-4">
          <div className="left flex flex-col gap-y-4 lg:gap-y-6 justify-center lg:pr-8 lg:w-1/2">
            <div className="up">
              <h2 className="capitalize text-3xl lg:text-5xl font-medium lg:leading-[3.2rem] text-themeOrange">
                we understand your love for heights
              </h2>
            </div>

            <p>
              At Valuable Multimedia, PPC is more than just a service; it&apos;s
              our passion. We&apos;re proud to be recognized as the &quot;top
              PPC company in Ahmedabad&quot; and are dedicated to delivering
              exceptional results for our clients. We are committed to
              channeling that same energy and expertise to help our clients
              achieve their PPC goals.
            </p>
          </div>

          <div className="right lg:w-1/2">
            <Image
              src="https://res.cloudinary.com/dyvr2mbun/image/upload/v1719813878/bw0vaqxgx7wvhcsy8g0l.webp"
              alt="hand-image"
              height={400}
              width={600}
            />
          </div>
        </div>
      </div>

      {/* sectors section  */}
      <div className="sectors-section-home bg-[#ececec] lg:px-[10rem] my-5 lg:my-0 lg:py-16 px-5 py-10">
        <div className="flex flex-col lg:flex-row gap-y-6">
          <div className="left lg:w-[40%] flex flex-col justify-center gap-y-4 lg:gap-y-6">
            <h3 className="text-themeOrange capitalize lg:text-xl font-semibold">
              Delivering services
            </h3>

            <h2 className="text-3xl lg:text-5xl lg:w-[60%] border font-medium lg:leading-[3.4rem]">
              Across Multiple Industries
            </h2>
          </div>

          <div className="right bg-white lg:w-[60%] gap-y-8 p-8 rounded-lg flex flex-wrap justify-between">
            {industries.map((item, index) => (
              <div
                className="item-box w-[30%] lg:w-[15%] flex flex-col gap-y-2 justify-center items-center"
                key={`industry ${index + 1}`}
              >
                <Image
                  src={item.imgUrl}
                  alt="industry-icon"
                  height={50}
                  width={50}
                />
                <h4 className="capitalize text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* clients section  */}
      <div className="clients-section-home px-5 lg:px-[10rem] py-10 lg:py-16 flex flex-col gap-y-10">
        <div className="up">
          <h3 className="text-themeOrange capitalize text-xl font-semibold">
            Serving distinct &amp; influential businesses
          </h3>
        </div>

        <div className="down flex flex-wrap justify-between gap-y-8">
          {clients.map((item, index) => (
            <div
              className="client-box w-[45%] lg:w-[30%] flex justify-center items-center hover:border-b-[2px] hover:border-themeOrange border-b-[2px] border-white transition-all cursor-pointer pb-2"
              key={`client ${index + 1}`}
            >
              <Image src={item} alt="client-logo" height={100} width={300} />
            </div>
          ))}
        </div>
      </div>

      {/* testimonials section  */}
      <div className="py-4 lg:py-0">
        <Testimonials />
      </div>

      {/* blogs section  */}
      <div className="blogs-section-home px-5 lg:px-[10rem] lg:pt-16 lg:pb-10 pt-12 flex flex-col gap-y-6 lg:gap-y-10">
        <div className="up">
          <h2 className="capitalize text-3xl">recent blogs</h2>
        </div>

        <div className="down flex flex-wrap justify-between gap-x-8 w-full">
          <Link
            href={
              "/blogs/boost-your-business-growth-with-targeted-ppc-campaigns"
            }
            className="lg:w-[30%] bg-white shadow-lg rounded-lg"
          >
            <div className="blog-card flex flex-col gap-y-6 w-full">
              <div className="up">
                <Image
                  src={
                    "https://res.cloudinary.com/dyvr2mbun/image/upload/v1726108566/blogs/wvakuw6brke7rgz1lvwj.jpg"
                  }
                  alt="blog-image"
                  height={300}
                  width={400}
                  className="rounded-t-lg overflow-hidden"
                />
              </div>
              <div className="down flex flex-col gap-y-3 px-4 py-2">
                <div className="date text-sm capitalize">
                  12 September, 2024
                </div>
                <div className="text-xl font-semibold text-gray-500">
                  Boost Your Business Growth with Targeted PPC Campaigns
                </div>
              </div>
            </div>
          </Link>
          {blogs.map((item, index) => (
            <Link
              href={item.slug}
              key={`blogs ${index + 1}`}
              className="lg:w-[30%] bg-white shadow-lg rounded-lg"
            >
              <div className="blog-card flex flex-col gap-y-6 w-full">
                <div className="up">
                  <Image
                    src={item.imgUrl}
                    alt="blog-image"
                    height={300}
                    width={400}
                    className="rounded-t-lg overflow-hidden"
                  />
                </div>
                <div className="down flex flex-col gap-y-3 px-4 py-2">
                  <div className="date text-sm capitalize">{item.date}</div>
                  <div className="text-xl font-semibold text-gray-500">
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* faqs section  */}
      <div className="faqs-section px-5 lg:px-[10rem] py-10 lg:py-16">
        <div className="faqs">
          <h2 className="text-black text-center mx-auto mt-4 capitalize text-3xl lg:text-4xl font-semibold">
            frequently asked questions
          </h2>
          <div className="lg:px-5 lg:w-[80%] mx-auto">
            <div className="mx-auto mt-8 grid gap-y-4">
              {faqs?.map((item, index) => (
                <div
                  className="border-b-[2px] px-3 border-themeOrange bg-white"
                  key={index}
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between">
                      <div className="flex items-center gap-x-6">
                        <div className="h-full group-open:text-themeOrange font-bold">
                          {index + 1}
                        </div>
                        <div className="group-open:text-themeOrange py-5">
                          {" "}
                          {item.question}
                        </div>
                      </div>
                      <div className="transition group-open:rotate-180 group-open:text-themeOrange">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </div>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 pb-5 text-neutral-600">
                      {item.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* contact section  */}
      <Contact />
    </main>
  );
}
