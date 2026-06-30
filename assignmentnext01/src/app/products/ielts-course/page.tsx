import CoursePage from "@/components/CourseDescriptionPage";
import IeltsCourseBanner from "@/components/IeltsCourseBanner";
import NavBar from "@/components/NavBar";
import CourseDetails from "@/components/CourseDetails";
import Footer from "@/components/Footer";
export default function IeltsCourse() {
  return (
    <div className="">
      <div className="fixed top:0  z-50 w-full">
        <NavBar />
      </div>
      <div className="pt-16 ">
        <CoursePage />

        <CourseDetails></CourseDetails>
      </div>

      <div className="z-3">
        <Footer />
      </div>
    </div>
  );
}
