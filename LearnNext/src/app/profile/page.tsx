"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function Profile() {
  const router = useRouter();
  const pathName = usePathname();
  // console.log(pathName);
  const searchParam = useSearchParams();
  console.log(searchParam.get("name"));
  //3 important
  //searchParam.getAll("name")  // query= localhost:3000/profile?name="muizz"&name="july"
  //searchParam.has("name") //it return boolean
  const handleNavigate = () => {
    router.push("/");
  };

  const handleForwardBackward = () => {
    router.refresh();
  };
  return (
    <div>
      <h1>Profile Component</h1>
      <button onClick={handleNavigate}>Navigate to home page</button>
      <br />
      <button onClick={handleForwardBackward}>Navigate forward Backward</button>
    </div>
  );
}

export default Profile;
