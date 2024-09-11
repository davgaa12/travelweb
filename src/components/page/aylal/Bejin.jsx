import { Calndr } from "../../icons/Calndr";
import { Check } from "../../icons/Check";
import { Loca } from "../../icons/Loca";

export const Bejin = () => {
  return (
    <div className="w-[350px] h-[490px] rounded border-[#E8E8EA] shadow-lg pt-4 pl-1">
      <div>
        <img
          className="w-[340px] h-[240px] rounded-md"
          src="https://content.r9cdn.net/rimg/dimg/62/28/22c46ab3-city-3286-164709113b2.jpg?crop=true&width=1020&height=498"
          alt=""
        />
      </div>
      <div className="flex gap-14 px-4 py-4">
        <div className="font-extrabold">1,690,000₮</div>
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
        <div className="text-[24px]">Жинин -Бээжин</div>
      </div>
      <div className="flex flex-col px-3">
        <div className="flex gap-2 ">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            Жинин water world Цагаан хэрэм
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            Team lab
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            Акуариум, амьтаны хүрээлэн
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            Universal studio
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            Цагаан хэрэм
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            Шувууны үүр усан шоо барилга
          </div>
        </div>
      </div>
    </div>
  );
};
