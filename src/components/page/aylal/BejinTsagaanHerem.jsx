import { Calndr } from "../../icons/Calndr";
import { Check } from "../../icons/Check";
import { Loca } from "../../icons/Loca";

export const BejinTsagaanHerem = () => {
  return (
    <div className="w-[350px] h-[490px] rounded border-[#E8E8EA] shadow-lg pt-4 pl-1">
      <div>
        <img
          className="w-[340px] h-[240px] rounded-md"
          src="https://resource4.sodonsolution.org/assa/photo/2014/10/c816e0d900466220/e3d1e49d2fbea11.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-14 px-4 py-4">
        <div className="font-extrabold">1,590,000₮</div>
        <div className="flex gap-2">
          <div>
            <Calndr />
          </div>
          <div className="font-medium"> 9 өдөр/10 шөнө</div>
        </div>
      </div>
      <div className="flex text-blue-700 items-center gap-2 px-3">
        <div>
          <Loca />
        </div>
        <div className="text-[24px]">Бээжин-Бэйдахэй</div>
      </div>
      <div className="flex flex-col px-3">
        <div className="flex gap-2 ">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            ШИ ДАО АРАЛ
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            {" "}
            АТЛАНТИС УСАН ПАРК
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            ЯЛУНГ БЭЕ ШИЛЭН ГУУР
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            НИСДЭГ ТЭРЭГНИЙ БЯЦХАН АЯЛАЛ
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            НОМХОН ДАЛАЙН АЯЛАЛ
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                    Хайнан аялал
                    </div>
                    <div className="w-[330px] text-[24px]">
                    Газрын диваажин хайнан
                    </div>
                  </div>
                  <div>
                  Аяллын үнэ
                  2,490,000₮
                  </div>
                </div> */}
    </div>
  );
};
