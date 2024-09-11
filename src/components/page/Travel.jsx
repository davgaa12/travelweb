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
        <div className="flex justify-center">
          text text text text text text text text text text text text text text
          text text text
        </div>
        <div className="flex flex-col gap-10 justify-center px-24 py-20">
          <div className="flex gap-10">
            <Haninan />
            <Avaatar />
          </div>
          <div className="flex gap-10">
            <Bejin />
            <BejinTsagaanHerem />
          </div>
          <div className="flex gap-10">
            <Huhhot />
            <Manjuur />
          </div>
        </div>
      </div>
    </div>
  );
};
