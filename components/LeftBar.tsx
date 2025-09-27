import React from "react";
import Image from "next/image";

export default function LeftBar() {
  return (
    <div className="flex flex-col items-center bg-zinc-800 rounded-xl px-4 py-2 w-fit">
      <div className="w-full">
        <span className="text-2xl text-orange-500">T</span>
        <span className="text-white">hayakorn</span>
      </div>
      <Image
        src="/face.jpg"
        alt="face"
        width={150}
        height={150}
        className="rounded-2xl aspect-square object-cover"
      />
      <div className="w-full text-center my-2">
        <span className="text-white text-sm">STU ID: 6652410026</span>
        <br />
        <span className="text-white/50 text-[11px]">
          Fullstack Web Developer
        </span>
      </div>
      <div className="w-full flex justify-center gap-2 text-white my-3">
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-x-twitter" />
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-linkedin" />
        <i className="fa-brands fa-google" />
      </div>

      <button className="bg-orange-500 px-4 py-1 my-3 rounded-xl mt-3 w-full hover:bg-orange-600 transition-all duration-300">
        HIRE ME!
      </button>
    </div>
  );
}
