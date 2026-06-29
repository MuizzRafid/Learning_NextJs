"use client";

import { useCourse } from "@/hooks/use-course";
import IeltsCourseBanner from "./IeltsCourseBanner";

export default function CoursePage() {
  const { data, isLoading, error } = useCourse();

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Getting Error</h1>;
  console.log(data);
  const course = data?.data;

  if (!course) return null;

  return (
    <div className="bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="w-full md:w-2/3">
          <h1 className="pt-4 pb-2 text-4xl font-bold text-white">
            {course.title}
          </h1>

          <a href="#" className="text-md text-white">
            ⭐⭐⭐⭐⭐ শিক্ষার্থীদের কোর্স শেষে রেটিং
          </a>

          <div
            className="text-md pt-2 text-gray-400"
            dangerouslySetInnerHTML={{
              __html: course.description || "",
            }}
          />
        </div>
      </div>
    </div>
  );
}
