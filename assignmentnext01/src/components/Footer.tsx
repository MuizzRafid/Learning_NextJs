import React from "react";
import Image from "next/image";
import playStoreImage from "../assets/pngwing.com.png";
import googleIt from "../assets/google in.png";

export default function Footer() {
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-4 py-8 px-6 border-b-1 border-gray-300">
        <div className="py-4">
          <div className="hidden items-center gap-9 md:flex md:pr-10 lg:pr-0 pb-4">
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
          <h1 className="text-sm">ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</h1>
          <div className="flex gap-4  pt-2 ">
            <a className="block " href="#">
              <Image
                src={googleIt}
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </a>

            <a className="block" href="#">
              <Image
                src={playStoreImage}
                alt="Download on the App Store"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
        <div className="text-sm">
          <h1 className="py-4 text-lg font-bold">কোম্পানি</h1>
          <p className="pb-2">ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি</p>
          <p className="pb-2">শিক্ষক হিসেবে যোগ দিন</p>
          <p className="pb-2">অ্যাফিলিয়েট হিসেবে যোগ দিন</p>
          <p className="pb-2">প্রাইভেসি পলিসি</p>
          <p className="pb-2">রিফান্ড পলিসি</p>
          <p className="pb-2">ব্যবহারকারীর শর্তাবলি</p>
        </div>
        <div className="text-sm text-gray-700">
          <h1 className="py-4 text-lg font-bold">অন্যান্য</h1>
          <p>ব্লগ</p>
          <p>বুক স্টোর</p>
          <p>ফ্রি নোটস ও গাইড</p>
          <p>চাকরি প্রস্তুতি কোর্সসমূহ</p>
          <p>সার্টিফিকেট ভেরিফাই করুন</p>
          <p>ফ্রি ডাউনলোড</p>
        </div>
        <div className="text-sm text-gray-700">
          <h1 className="py-4 text-lg font-bold">আমাদের যোগাযোগ মাধ্যম</h1>
          <p>কল করুন: 16910 (24x7)</p>
          <p>হোয়াটসঅ্যাপ: +8801896016252(24x7)</p>
          <p>দেশের বাহির থেকে: +880 9610916910</p>
          <p>ইমেইল: support@10minuteschool.com</p>
        </div>
      </div>

      <div className="w-full h-30 flex justify-center items-center">
        <div>
          <p className="text-sm text-gray-600">
            স্বত্ব @ ২০১৫-২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    </div>
  );
}
