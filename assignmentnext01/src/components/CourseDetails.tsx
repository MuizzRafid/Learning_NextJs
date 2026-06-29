"use client";
import React, { useState } from "react";
import NavLink from "next";
import { useRef } from "react";
import { useCourse } from "@/hooks/use-course";

export default function CourseSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const VideoSliderRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number>();
  const [isActive, setIsActive] = useState<boolean>(false);
  const { data, isLoading, error } = useCourse();
  const imgData = data?.data?.sections[5].values[0].background.image;
  function toCheck() {
    const otherData = data?.data?.sections[13].values[0].thumb;
    console.log(otherData);
  }
  toCheck();
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    console.log("right ", sliderRef.current?.scrollLeft);
    sliderRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  //initaily slideRef.current?.scrollLeft=0
  const videoScrollLeft = () => {
    VideoSliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };
  const videoScrollRight = () => {
    VideoSliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const [acitveDecider, setActiveDecider] = useState<number>();
  function handleAccordianClick(index: number) {
    if (acitveDecider === index) {
      setOpenIndex(index);
      setIsActive(!isActive);
    } else {
      setOpenIndex(index);
      setActiveDecider(index);
    }
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-2 py-8 px-6">
      {/* slide bar */}
      <div className="flex flex-row gap-2 w-full md:w-2/3">
        <button
          onClick={scrollLeft}
          className="rounded bg-gray-200 px-3 py-2 shrink-0"
        >
          Prev
        </button>

        <div
          ref={sliderRef}
          className="flex gap-2 overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar "
        >
          <button className=" border-b-2 border-transparent text-gray-500 hover:border-b-2 hover:border-green-600 px-4 py-2">
            {data?.data?.sections[2]?.name}
          </button>

          <button className="border-b-2 border-transparent text-gray-500 hover:border-b-2 hover:border-green-600 px-4 py-2">
            {data?.data?.sections[4]?.name}
          </button>

          <button className="border-b-2 border-transparent text-gray-500 hover:border-b-2 hover:border-green-600  px-4 py-2">
            {data?.data?.sections[5]?.name}
          </button>

          <button className="border-b-2 border-transparent text-gray-500 hover:border-b-2 hover:border-green-600  px-4 py-2">
            {data?.data?.sections[6]?.name}
          </button>

          <button className="border-b-2 border-transparent text-gray-500 hover:border-b-2 hover:border-green-600  px-4 py-2">
            {data?.data?.sections[7]?.name}
          </button>

          <button className="border-b-2 border-transparent text-gray-500 hover:border-b-2 hover:border-green-600  px-4 py-2">
            {data?.data?.sections[13]?.name}
          </button>
        </div>

        <button onClick={scrollRight} className="rounded bg-gray-200 px-3 py-2">
          Next
        </button>
      </div>
      <div className="h-[1px] bg-gray-300 md:w-2/3 px-2"></div>

      <div className="py-6 md:w-2/3 bg-white">
        <div>
          <h1 className="text-2xl font-semibold">
            {data?.data?.sections[2]?.name}
          </h1>
          <div
            className="my-4 p-4 border border-gray-200 flex flex-row items-center
           gap-4"
          >
            <img
              src={data?.data?.sections[2]?.values[0].image}
              alt=""
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <h2 className="py-2 px-2 text-2xl font-semibold">
                {data?.data?.sections[2].values[0].name}
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: data?.data?.sections[2].values[0].description || "",
                }}
                className="px-2"
              ></p>
            </div>
          </div>
        </div>
      </div>

      <div className=" pb-6">
        <h1 className="text-2xl font-bold">How The Course Laid Out</h1>
      </div>

      <div className="text-white  bg-[#111827] max-w-7xl md:w-2/3 grid grid-cols-2 gap-2">
        {data?.data?.sections[4].values.map((item) => (
          <div className="flex flex-col p-4 space-x-3" key={item.id}>
            <h1 className="pb-1 text-md font-bold">{item.title}</h1>
            <h3 className="pb-2 text-sm text-gray-300">{item.subtitle}</h3>
          </div>
        ))}
      </div>

      <div
        className="text-white my-6 p-10 max-w-7xl md:w-2/3 flex flex-row h-[300px] bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${data?.data?.sections[5].values[0].background.image})`,
        }}
      >
        <div className="flex flex-col w-[50%] ">
          <h1 className="text-2xl font-bold pb-2">Free PDF</h1>
          <h1 className="text-2xl font-semibold pb-2">
            {data?.data?.sections[5].values[0].title}
          </h1>
          <p className="pb-2 text-md">
            {" "}
            {data?.data?.sections[5].values[0].description}
          </p>
          <div className="pt-4">
            <a
              href="data?.data?.sections[5].values[0].title"
              className="py-3 px-4 bg-green-600 text-white rounded-md"
            >
              {data?.data?.sections[5].values[0].cta.text}
            </a>
          </div>
        </div>
        <div className="w-[50%]">
          <img src={data?.data?.sections[5].values[0].thumbnail} alt="" />
        </div>
      </div>

      <div className="max-w-7xl md:w-2/3 ">
        <h1 className="text-2xl font-semibold pb-6 ">
          {data?.data?.sections[6].name}
        </h1>

        <div className="p-8 border-1  rounded-xl border-gray-300 grid md:grid-cols-2">
          {data?.data?.sections[6].values.map((item) => (
            <div className="p-2" key={item.id}>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl md:w-2/3">
        <h1 className="text-2xl font-semibold py-6">
          {data?.data?.sections[8].name}
        </h1>

        <div className="px-8 py-4 rounded-lg border-1 border-gray-200">
          {data?.data?.sections[8].values.map((item, index) => (
            <div
              key={item.id}
              className="border-b-1 border-dashed border-gray-300 py-4"
            >
              <div
                className="flex flex-row items-center justify-between"
                onClick={() => handleAccordianClick(index)}
              >
                <span
                  className="text-md cursor-pointer"
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                ></span>
                <span>
                  {openIndex === index && isActive === true ? (
                    <span
                      style={{
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                    >
                      👇
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: "30px",
                        cursor: "pointer",
                      }}
                    >
                      🤚
                    </span>
                  )}
                </span>
              </div>

              <div>
                {openIndex === index && isActive == true && (
                  <p
                    className="py-2 px-10 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  ></p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl md:w-2/3">
        <h1 className="text-2xl font-semibold py-6">
          {data?.data?.sections[9].name}
        </h1>

        <div className="border-1 rounded-lg p-4 border-gray-200">
          {data?.data?.sections[9]?.values.map((item) => (
            <div
              key={item.id}
              className="p-6 border-b-1  border-gray-200 flex flex-row max-w-4xl gap-4 mx-auto"
            >
              <div className="w-[70%] p-2">
                <h1 className="text-2xl mb-2 ">{item.title}</h1>
                {item.checklist.map((list, index) => (
                  <div className="py-2 text-md text-gray-600" key={index}>
                    {list}
                  </div>
                ))}
              </div>
              <div className="w-[30%]">
                <img src={item.file_url} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl md:w-2/3 py-5">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl mb-6 font-semibold">
            {data?.data?.sections[13].name}
          </h1>
          <div className="px-4">
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={videoScrollLeft}
            >
              👈
            </span>
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={videoScrollRight}
            >
              👉
            </span>
          </div>
        </div>

        <div
          className="flex overflow-x-auto gap-5 hide-scrollbar py-4"
          ref={VideoSliderRef}
        >
          {data?.data.sections[13]?.values
            .filter((item) => item.thumb && item.thumb.length > 1)
            .map((item) => (
              <div
                key={item.id}
                className="flex-none w-[400px] bg-white rounded-xl shadow-lg border border-gray-100 relative pt-6"
              >
                <div className="absolute -top-4 left-5 w-10 h-10 rounded-full bg-[#FCE0D6] flex items-center justify-center z-10">
                  ❝
                </div>

                <div className="px-6">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <iframe
                        className="w-full aspect-video rounded-lg"
                        src={`https://www.youtube.com/embed/${item.video_url}`}
                        title={item.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      >
                        <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white transition hover:scale-110">
                          ▶
                        </button>
                      </iframe>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={item.profile_image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>

                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
