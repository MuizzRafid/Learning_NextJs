"use client";

import { useQuery } from "@tanstack/react-query";

export interface CourseMedia {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

interface ChecklistItem {
  text: string;
}
interface BackGround {
  image: string;
}
interface Cta {
  text: string;
  clicked_url: string;
}

interface Value {
  description: string;
  image: string;
  name: string;
  short_description: string;
  title: string;
  id: number;
  subtitle: string;
  background: BackGround;
  cta: Cta;
  thumbnail: string;
  text: string;
  checklist: string[];
  file_url: string;
  profile_image: string;
  thumb: string;
  video_url: string;
}
export interface Sections {
  type: string;
  name: string;
  values: Value[];
}
export interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  checklist: ChecklistItem[];
  media: CourseMedia[];
  sections: Sections[];
}

interface CourseResponse {
  code: number;
  data: Course;
  message: string;
  status_code: number;
}

const COURSE_QUERY_KEY = ["course", "ielts-course"] as const;

async function getCourse(): Promise<CourseResponse> {
  const response = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch course data");
  }
  const data = await response.json();
  return data;
}

export function useCourse() {
  return useQuery({
    queryKey: COURSE_QUERY_KEY,
    queryFn: getCourse,
  });
}
