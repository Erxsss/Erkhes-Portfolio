export default function MenuBar() {
  return (
    <div className="w-full h-[10vh] text-[#008000] p-[20px] pl-[90px] justify-around flex font-bold">
      <div className="flex items-center">
        <div className="text-[40px] font-extrabold cursor-pointer">Erkhes</div>
      </div>
      <div className="flex justify-around items-center w-[70%]">
        <div className="text-[15px] hover:underline cursor-pointer decoration-2 underline-offset-4">
          About
        </div>
        <div className="text-[15px]  hover:underline cursor-pointer decoration-2 underline-offset-4 ">
          Skills
        </div>
        <div className="text-[15px]  hover:underline cursor-pointer decoration-2 underline-offset-4 ">
          Projects
        </div>
        <div className="text-[15px]  hover:underline cursor-pointer decoration-2 underline-offset-4">
          Achievements
        </div>
        <div className="text-[15px] hover:underline cursor-pointer decoration-2 underline-offset-4">
          Contact
        </div>
      </div>
    </div>
  );
}
