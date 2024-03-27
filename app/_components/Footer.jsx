import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-100">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24 lg:w-full">
          {" "}
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <Image src="/logo.svg" alt="logo" width={40} height={15} />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Thank you for choosing our doctor appointment booking app for
                your healthcare needs. We are dedicated to providing you with
                the highest quality of service and convenience.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Home{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Explore{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Contact US{" "}
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
