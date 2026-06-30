import React from "react";
import { VscSearchSparkle } from "react-icons/vsc";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function NavBar() {
  return (
    <div className="bg-white lg:h-[64px] border-b-1 border-gray-300 ">
      <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-2 md:py-0 lg:px-[52px]">
        <div className="hidden items-center gap-9 md:flex md:pr-10 lg:pr-0">
          <a className="h-[27px] w-[100px]" href="/">
            <img
              alt="10 Minute School"
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              width={100}
              height={27}
              style={{ color: "transparent" }}
            />
          </a>
        </div>

        <nav className="hidden w-full flex-1 md:block">
          <ul className="flex items-center gap-1 xl:justify-center">
            <li>
              <a
                className="flex h-[64px] items-center gap-1 px-[10px] text-[14px] font-medium text-[#4B5563] hover:text-green"
                href="#"
              >
                ক্লাস ৬-১২
              </a>
            </li>

            <li>
              <a
                className="flex h-[64px] items-center gap-1 px-[10px] text-[14px] font-medium text-[#4B5563] hover:text-green"
                href="#"
              >
                ইংলিশ
              </a>
            </li>

            <li>
              <a
                className="flex h-[64px] items-center px-[10px] text-[14px] font-medium text-[#4B5563] hover:text-green"
                href="/store/all/"
              >
                স্টোর
              </a>
            </li>

            <li>
              <a
                className="flex h-[64px] items-center gap-1 px-[10px] text-[14px] font-medium text-[#4B5563] hover:text-green"
                href="#"
              >
                অন্যান্য
              </a>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center justify-end space-x-[12px] lg:space-x-[24px]">
          <div className="hidden w-[338px] xl:block">
            <div className="relative z-50 flex w-full flex-col items-center bg-white">
              <div className="shadow-0 flex w-full items-center gap-2 rounded-b-[23px] rounded-t-[23px] border-0 px-[12px] py-2 md:border-1 md:border-gray-300">
                <VscSearchSparkle
                  height="24"
                  width="27"
                  className="text-yellow-300"
                />

                <input
                  type="search"
                  autoComplete="off"
                  autoCorrect="off"
                  placeholder="সার্চ করুন..."
                  className="w-full flex-1 bg-transparent placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] 
                  outline-none border-none"
                  name="Search"
                />
              </div>
            </div>
          </div>

          <div className="flex max-h-96 items-center gap-3 rounded-md  lg:gap-[20px]">
            <div className="hidden h-[25px] !w-fit items-center justify-between overflow-hidden rounded-full bg-[#E5E7EB] p-1 md:flex">
              <button className="rounded-full bg-green-600 px-[5px] py-[2px] text-[12px] font-medium leading-[14px]  text-white transition-all duration-200">
                BN
              </button>

              <button className="rounded-full px-[5px] py-[2px] text-[12px] font-medium leading-[14px] tracking-[0] text-gray-500 transition-all duration-200 hover:text-gray-700">
                EN
              </button>
            </div>
          </div>
          <BsFillTelephoneFill className="text-green-600 " />
          <div className="flex flex-row gap-4">
            <p className="text-[18px] font-medium text-green-600">16910</p>
          </div>
          <div className="ml-auto ">
            <a
              className="rounded-lg bg-green-500 px-4 py-[7px] text-white text-sm border-b-4 border-green-800"
              href="/"
            >
              লগ-ইন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
