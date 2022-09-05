import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function ContactInfo() {
  return (
    <div
      className="bg-left bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/cover_bg-right.jpg')",
      }}
    >
      <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-[#181719]/[0.7]">
        <h1 className="font-kaushan text-3xl sm:text-5xl font-bold mb-10 sm:mb-20">About me</h1>
        <div className="grid grid-cols-12 gap-8 max-w-[1170px] w-[350px] md:w-[700px] xl:w-auto">
          <div className="col-span-12 xl:col-span-5">
            <h2 className="text-xl sm:text-3xl font-bold mb-4">Contact Information</h2>
            <ul className="text-sm sm:text-xl">
              <li className="my-2 flex">
                <span className="inline-block font-bold w-[30%]">
                  Fullname:{" "}
                </span>
                <span className="w-[70%]">Trương Đức Vinh</span>
              </li>
              <li className="my-2 flex">
                <span className="inline-block font-bold w-[30%]">Phone: </span>
                <span className="w-[70%]">&#40;+84&#41; 85 327 4954</span>
              </li>
              <li className="my-2 flex">
                <span className="inline-block font-bold w-[30%]">Email: </span>
                <span className="break-all w-[70%]">
                  ducvinh.truong2001@gmail.com
                </span>
              </li>
              <li className="my-2 flex">
                <span className="inline-block font-bold w-[30%]">
                  Address:{" "}
                </span>
                <span className="break-word w-[70%]">
                  Hoc Mon District, Ho Chi Minh City
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-12 xl:col-span-7">
            <h2 className="text-xl sm:text-3xl font-bold mb-4">Summary</h2>
            <p className="text-sm leading-8 sm:text-xl sm:leading-9">
              I'm a last-year student at University of Information and
              Technology with 2 years learning by myself and half of year
              working experience as part-time front-end dev, I have planned and
              built some projects to improve my experience. With the knowledge I
              have learned along with creativity, I hope to contribute to the
              development of your company.
            </p>
            <ul className="flex mt-6 items-center justify-center xl:justify-start">
            <li className="mx-3">
              <a
                href="https://github.com/VinhTruong2001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <FontAwesomeIcon icon={brands("github")} />
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://www.facebook.com/truongducvinh2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <FontAwesomeIcon icon={brands("facebook")} />
              </a>
            </li>
            <li className="mx-3">
              <a
                href="https://t.me/ducvinhtruong"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <FontAwesomeIcon icon={brands("telegram")} />
              </a>
            </li>
            <li className="mx-3 h-[41px] flex items-end">
              <a
                href="mailto:ducvinh.truong2001@gmail.com"
                className="text-xl text-[#1c1818] flex items-center justify-center w-[34.88px] h-[34.88px] bg-white rounded-full"
              >
                <FontAwesomeIcon icon={solid("envelope")} />
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
