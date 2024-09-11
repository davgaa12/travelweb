import { Menu } from "../icons/Menu";

export const Header = () => {
  return (
    <div className="flex justify-center pb-5">
      <div className="flex flex-col  ">
        <div className=" w-full h-[50px] md:h-[100px] bg-[#ffffff] flex justify-between md:gap-[310px] md:px-9  gap-52 px-6 items-center">
          <div className="text-[#000000] md:text-[28px] text-[11px] font-semibold">
            GoGo Travel
          </div>
          <div className="md:hidden">
           <Menu/>
          </div>
          <div className="md:flex items-center md:gap-5 gap-3 hidden">
            <div className="text-black md:text-[20px] text-[8px] font-medium hover:text-blue-700  ">
              Hүүр хуудас
            </div>
            <div className="text-black md:text-[20px] text-[8px] font-medium hover:text-blue-700 ">
              Аяллууд
            </div>
            <div className="text-black md:text-[20px] text-[8px] font-medium hover:text-blue-700">
              Бидний тухай
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
