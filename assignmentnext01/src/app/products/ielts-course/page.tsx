import CoursePage from "@/components/CourseDescriptionPage";
import IeltsCourseBanner from "@/components/IeltsCourseBanner";
import NavBar from "@/components/NavBar";
import CourseDetails from "@/components/CourseDetails";
import Footer from "@/components/Footer";
export default function IeltsCourse() {
  return (
    <div className="relative">
      <NavBar />
      <div className="relative">
        <CoursePage />
        {/* other sections */}
        <CourseDetails></CourseDetails>
        <div className="absolute top-0 right-10 w-[31%]">
          <IeltsCourseBanner />
        </div>
      </div>
      <Footer />
    </div>
  );
}
