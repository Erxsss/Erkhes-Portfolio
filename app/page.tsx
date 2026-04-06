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
                <div className="text-[#00b9ec]">
                  {text.name}
                  <span className="text-white">Student</span>
                </div>
              ) : (
                <div className="te">{text.name} Student</div>
              )}
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
