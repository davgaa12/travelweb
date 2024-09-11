import { Calndr } from "../../icons/Calndr";
import { Check } from "../../icons/Check";
import { Loca } from "../../icons/Loca";

export const Huhhot = () => {
  return (
    <div className="w-[350px] h-[490px] rounded border-[#E8E8EA] shadow-lg pt-4 pl-1">
      <div>
        <img
          className="w-[340px] h-[240px] rounded-md"
          src="https://www.thebeijinger.com/sites/default/files/thebeijinger/blog-images/313215/hohhot_0.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-14 px-4 py-4">
        <div className="font-extrabold">890,000₮</div>
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
        <div className="text-[20px]">Жининь-Мини Аватар-Хөх хот</div>
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
