export const Header = () => {
  return (
    <div className="flex justify-center pb-20">
      <div className="flex flex-col  ">
        <div className=" w-[1024px] h-[100px] bg-[#b5b5b5] flex md:pl-16 pl-[7px]   pt-[3px] md:gap-96 gap-6  items-center">
          <div className="text-[#000000] md:text-[28px] text-[11px] font-semibold">
            GoGo Travel
          </div>
          <div className="flex items-center md:gap-5 gap-3">
            <div className="text-black md:text-[20px] text-[8px] font-medium hover:text-black  ">
              Hүүр хуудас
            </div>
            <div className="text-black md:text-[20px] text-[8px] font-medium  hover:text-black">
              Аяллууд
            </div>
            <div className="text-black md:text-[20px] text-[8px] font-medium hover:text-black">
              Бидний тухай
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
