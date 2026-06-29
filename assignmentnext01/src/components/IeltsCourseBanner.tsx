"use client";

import { useEffect, useMemo, useState } from "react";
import { CourseMedia, useCourse } from "@/hooks/use-course";
import "./IeltsCourseBanner.css";

function getMediaImage(media: CourseMedia) {
  return media.thumbnail_url || media.resource_value;
}

function getYoutubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}`;
}

export default function IeltsCourseBanner() {
  const { data, isLoading, error } = useCourse();
  const course = data?.data;

  const gallery = useMemo(
    () =>
      course?.media.filter((media) => media.name === "preview_gallery") || [],
    [course?.media],
  );
  const [selectedMedia, setSelectedMedia] = useState<CourseMedia | null>(null);

  useEffect(() => {
    setSelectedMedia(gallery[0] || null);
  }, [gallery]);

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Getting Error</h1>;
  if (!course || !selectedMedia) return null;

  return (
    <div
      className="
    fixed
    top-32
    right-10
    w-[31%]
    
    bg-white
    text-black
  "
    >
      <div className="w-full border border-gray-300 p-2">
        <div className="pb-4">
          {selectedMedia.resource_type === "video" ? (
            <iframe
              width="100%"
              height="215"
              src={getYoutubeEmbedUrl(selectedMedia.resource_value)}
              title="Course Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={selectedMedia.resource_value}
              alt={course.title}
              className="h-[215px] w-full object-cover"
            />
          )}
        </div>

        <div className="grid grid-cols-6 gap-2 overflow-hidden">
          {gallery.map((media, index) => {
            const isSelected =
              selectedMedia.resource_value === media.resource_value;

            return (
              <button
                key={`${media.resource_type}-${media.resource_value}`}
                type="button"
                onClick={() => setSelectedMedia(media)}
                className={`aspect-video overflow-hidden rounded border-2 transition-all hover:border-green-600 ${
                  isSelected ? "border-green-600" : "border-gray-200"
                }`}
                aria-label={`Show preview ${index + 1}`}
              >
                <div className="relative h-full w-full">
                  <img
                    alt={`Preview ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={getMediaImage(media)}
                  />

                  {media.resource_type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <img
                        alt="Play Icon"
                        width={20}
                        height={20}
                        src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                      />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="py-5 pl-6 flex flex-row items-center gap-2">
          <p className=" text-2xl font-semibold text-black">$1000</p>
          <p className=" text-xl  text-gray-600 line-through">$5000</p>
          <p className=" px-2 text-md font-bold  text-white bg-red-500 rounded-md">
            $4000 off
          </p>
        </div>

        <div>
          <button className="w-full rounded-md border-b-6 border-green-800 bg-green-600 py-2 text-white">
            কোর্সটি কিনুন
          </button>
        </div>

        <div className="px-2 py-4 text-gray-600">
          <h2 className="text-xl font-semibold text-black">
            কোর্সে যা যা থাকবে
          </h2>

          {data?.data.checklist?.map((item) => (
            <h3 className="py-1" key={item.text}>
              {item.text}
            </h3>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between py-4 text-black">
        <h3 className="text-sm font-semibold text-gray-400">
          কোর্সটি কিনতে যোগাযোগ করুন{" "}
        </h3>
        <h3 className="text-green-500">ফোন করুন( ১৬২৬৯)</h3>
      </div>
    </div>
  );
}
