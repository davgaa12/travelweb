import { Avaatar } from "./aylal/Avaatar";
import { Bejin } from "./aylal/Bejin";
import { BejinTsagaanHerem } from "./aylal/BejinTsagaanHerem";
import { Haninan } from "./aylal/Hainan";
import { Huhhot } from "./aylal/Huhhot";
import { Manjuur } from "./aylal/Manjuur";

export const Travel = () => {
  return (
    <div className="flex justify-center pb-20">
      <div className="flex flex-col  ">
        <div
          className="flex justify-center pt-4 md:text-[24px] md:font-semibold font-bold pb-4
        "
        >
          Таны нандин дурсамжийг бүтээх аяллууд
        </div>
        <div className=" w-full flex flex-col gap-10 flex-wrap">
          <div className="flex gap-10  justify-center flex-wrap">
            <Haninan />
            <Avaatar />
          </div>
          <div className="flex gap-10  justify-center flex-wrap">
            <Bejin />
            <BejinTsagaanHerem />
          </div>
          <div className="flex gap-10 justify-center  flex-wrap pb-10">
            <Huhhot />
            <Manjuur />
          </div>
        </div>
      </div>
    </div>
  );
};
