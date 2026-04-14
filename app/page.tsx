"use client";
import { useEffect, useState } from "react";
import MenuBar from "./_components/menubar";

export default function Page() {
  const [text, setText] = useState({
    name: "Software Engineering",
    color: "blue",
  });
  const [imageUrl, setImageUrl] = useState("");
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
        <div className="w-[80%] h-[80%] p-[10px] flex justify-between">
          <div className="w-[50%] h-[80%] flex  flex-col justify-evenly ">
            <div className="text-[#008000] font-extrabold text-7xl flex flex-col gap-[15px]">
              Hello, I am
              <div>Erkhes B.</div>
            </div>
            <div className="text-white text-[40px] font-extrabold">
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
            <div className="text-white font-extrabold text-[18px]">
              I am a student developer and designer from Mongolia. I build
              full-stack projects and design interfaces using Figma.
            </div>
            <div className="flex items-center gap-[100px]">
              <a href="https://www.instagram.com/erxes__24/" target="_blank">
                <img
                  src="https://i.pinimg.com/474x/e5/2d/f9/e52df9ea7fdc3b59ee42eda0a10c9ca0.jpg"
                  alt=""
                  className="h-[65px] w-[65px] object-contain hover:scale-110 transition"
                />
              </a>
              <a href="https://github.com/Erxsss" target="_blank">
                <img
                  src="https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png"
                  alt=""
                  className="h-[50px] w-[50px] object-contain hover:scale-110 transition"
                />
              </a>
              <a href="mailto:erkhessw@email.com">
                <img
                  src="https://media.istockphoto.com/id/1161114191/vector/email-icon-on-black-background-black-flat-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=bm6GYaYIYZnIRL6X_L-7uaa2VYOM2iyK-4mboET9bKw="
                  alt=""
                  className="h-[75px] w-[75px] object-contain hover:scale-110 transition"
                />
              </a>
              <div>
                <button className="bg-[#009b08] text-[15px] rounded-2xl text-white font-extrabold h-[50px] w-[150px] hover:border-2 transition duration-300 ease-in-out  ">
                  Get started
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="relative w-[430px] h-[600px]  rounded-[40px] overflow-hidden">
              <img
                src="https://i.pinimg.com/originals/c5/9a/d2/c59ad2bd4ad2fbacd04017debc679ddb.gif"
                className="absolute w-full h-full object-cover"
              />
              <img
                src="https://zoxowmwtwran1uwo.public.blob.vercel-storage.com/edited-photo.png"
                className="absolute object-contain  z-10 w-[700px] h-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
