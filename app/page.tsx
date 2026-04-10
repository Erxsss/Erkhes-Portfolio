"use client";
import { useEffect, useState } from "react";
import MenuBar from "./_components/menubar";

export default function Page() {
  const [text, setText] = useState({
    name: "Software Engineering",
    color: "blue",
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) =>
        prev.color === "blue"
          ? { name: "UI/UX design", color: "purple" }
          : { name: "Software Engineering", color: "blue" },
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <div>
        <MenuBar />
      </div>
      <div className="w-[100vw] h-[90vh] flex justify-center items-center">
        <div className="w-[80%] h-[80%] p-[10px] ">
          <div className="w-[50%] h-[100%]">
            <div className="text-[#008000] font-extrabold text-7xl flex flex-col gap-[15px]">
              Hello, I am
              <div>Erkhes B.</div>
            </div>
            <div className="text-white text-4xl font-extrabold">
              {text.color === "blue" ? (
                <div className="text-[#00b9ec] flex gap-[10px]">
                  {text.name}
                  <span className="text-white">Student</span>
                </div>
              ) : (
                <div className="text-[#7700ed] flex gap-[10px]">
                  {text.name}
                  <span className="text-white">Student</span>
                </div>
              )}
            </div>
            <div className="text-white font-extrabold">
              I’m a student developer and designer from Mongolia. I build
              full-stack projects and design interfaces using Figma.
            </div>
            <div className="flex">
              <div className="flex items-center gap-[14px] mt-[6px]">
                {/* LinkedIn */}
                <a
                  className="w-[52px] h-[52px] rounded-[10px] overflow-hidden border-2 border-transparent hover:border-white transition-all hover:-translate-y-0.5 bg-[#111]"
                  href="#"
                >
                  <img
                    src="https://i.pinimg.com/474x/e5/2d/f9/e52df9ea7fdc3b59ee42eda0a10c9ca0.jpg"
                    alt="LinkedIn"
                    className="w-full h-full object-cover"
                  />
                </a>

                {/* GitHub */}
                <a
                  className="w-[52px] h-[52px] rounded-[10px] overflow-hidden border-2 border-transparent hover:border-white transition-all hover:-translate-y-0.5 bg-white p-1.5"
                  href="#"
                >
                  <img
                    src="https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png"
                    alt="GitHub"
                    className="w-full h-full object-contain"
                  />
                </a>

                {/* Email */}
                <a
                  className="w-[52px] h-[52px] rounded-[10px] overflow-hidden border-2 border-transparent hover:border-white transition-all hover:-translate-y-0.5 bg-[#111] flex items-center justify-center"
                  href="#"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                    alt="Email"
                    className="w-[70%] h-[70%] object-contain"
                  />
                </a>

                <button className="h-[52px] px-7 bg-transparent text-white border-2 border-[#444] rounded-[10px] font-bold hover:bg-[#008000] hover:border-white hover:-translate-y-0.5 transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
