import { Calndr } from "../../icons/Calndr";
import { Check } from "../../icons/Check";
import { Loca } from "../../icons/Loca";

export const Manjuur = () => {
  return (
    <div className="w-[350px] h-[490px] rounded border-[#E8E8EA] shadow-lg pt-4 pl-1">
      <div>
        <img
          className="w-[340px] h-[240px] rounded-md"
          src="https://news.cgtn.com/news/3d3d674e35457a4d33457a6333566d54/img/47ae0b90d3fd45acba84304309344871/47ae0b90d3fd45acba84304309344871.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-14 px-4 py-4">
        <div className="font-extrabold">900,000₮</div>
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
        <div className="text-[24px]">БНХАУ-ЫН Манжуур</div>
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
    </div>
  );
};
