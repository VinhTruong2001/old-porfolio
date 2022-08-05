import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function ShortInfo() {
  return (
    <div
      className="bg-right bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/cover_bg-left.jpg')"
      }}
    >
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#181719]/[0.7]">
        {/* Avatar */}
        <div className="rounded-full border-4 border-white w-[300px] h-[300px] overflow-hidden flex">
          <img
            src={process.env.PUBLIC_URL + '/assets/avatar.jpg'}
            alt="Avatar"
            className="w-full h-full m-auto scale-130"
          />
        </div>
        {/* Short info */}
        <div className="flex flex-col items-center mt-6">
          <h1 className="font-kaushan text-4xl sm:text-5xl text-center -rotate-6">
            - Trương Đức Vinh -
          </h1>
          <span className="block mt-8 text-xl">Front-end Web Developer</span>
          <ul className="flex mt-6">
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShortInfo;
