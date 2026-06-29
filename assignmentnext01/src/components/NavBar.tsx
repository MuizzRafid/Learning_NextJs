import React from "react";

export default function NavBar() {
  return (
    <div className="border-b bg-white lg:h-[64px]">
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
          {/* Search Box (Desktop) */}
          <div className="hidden w-[338px] xl:block">
            <div className="relative z-50 flex w-full flex-col items-center bg-white">
              <div className="shadow-0 flex w-full items-center gap-2 rounded-b-[23px] rounded-t-[23px] border-0 px-[12px] py-2 md:border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="24"
                  fill="none"
                  viewBox="0 0 27 24"
                >
                  <path
                    fill="#111827"
                    d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
                  />
                  <path
                    fill="#F1844C"
                    d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"
                  />
                </svg>

                <input
                  type="search"
                  autoComplete="off"
                  autoCorrect="off"
                  placeholder="সার্চ করুন..."
                  className="w-full flex-1 bg-transparent placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
                  name="Search"
                />
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex max-h-96 items-center gap-3 rounded-md border-1 lg:gap-[20px]">
            {/* Language Switch */}
            <div className="hidden h-[25px] !w-fit items-center justify-between overflow-hidden rounded-full bg-[#E5E7EB] p-1 md:flex">
              <button className="rounded-full bg-green-600 px-[5px] py-[2px] text-[12px] font-medium leading-[14px] tracking-[0] text-white transition-all duration-200">
                BN
              </button>

              <button className="rounded-full px-[5px] py-[2px] text-[12px] font-medium leading-[14px] tracking-[0] text-gray-500 transition-all duration-200 hover:text-gray-700">
                EN
              </button>
            </div>

            <div className="ml-auto">
              <a
                className="rounded bg-green-600 px-4 py-2 text-white"
                href="/"
              >
                লগ-ইন
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
