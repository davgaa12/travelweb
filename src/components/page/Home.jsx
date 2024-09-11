import { Avaatar } from "./aylal/Avaatar";
import { Bejin } from "./aylal/Bejin";
import { BejinTsagaanHerem } from "./aylal/BejinTsagaanHerem";
import { Haninan } from "./aylal/Hainan";
import { Huhhot } from "./aylal/Huhhot";
import { Manjuur } from "./aylal/Manjuur";

export const Home = () => {
  return (
    <div className="md:flex md:justify-center md:pb-20 pb-9">
      <div className="md:flex md:flex-col  ">
        <div className="bg-[url('/webbg.png')] w-full md:h-[600px]  h-[240px]   bg-cover ">
          <div className=" flex md:pl-16 pl-[7px]  md:pt-8 pt-[3px] md:gap-96 gap-32 items-center">
            <div className="text-[#FFFFFF] md:text-[28px] text-[16px] font-semibold">
              GoGo Travel
            </div>
            <div className="md:flex items-center md:gap-5 gap-3 hidden">
              <div className="text-[#FFFFFF] md:text-[20px] text-[10px] font-medium hover:text-black  ">
                Hүүр хуудас
              </div>
              <div className="text-[#FFFFFF] md:text-[20px] text-[10px] font-medium  hover:text-black">
                Аяллууд
              </div>
              <div className="text-[#FFFFFF] md:text-[20px] text-[10px] font-medium hover:text-black">
                Бидний тухай
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:pt-40 md:pr-[360px]  pt-16 pr-36">
            <div className="md:text-[36px] text-[15px] text-white font-medium">
              Make Your Next trip
            </div>
            <div className="md:text-[42px] text-[17px]  text-white font-bold">
              Your Best Trip
            </div>
            <div className=" md:text-[26px] text-[11px]  text-white font-medium">
              UNLIMITED ADVENTURE AWAITS!
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" w-full flex flex-col gap-10 flex-wrap">
            <div className="flex gap-10  justify-center flex-wrap">
              <Haninan />
              <Avaatar />
            </div>
            <div className="flex gap-10  flex-wrap">
              <Bejin />
              <BejinTsagaanHerem />
            </div>
            <div className="flex gap-10  flex-wrap">
              <Huhhot />
              <Manjuur />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
