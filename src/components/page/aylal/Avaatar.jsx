import { Calndr } from "../../icons/Calndr";
import { Check } from "../../icons/Check";
import { Loca } from "../../icons/Loca";

export const Avaatar = () => {
  return (
    <div className="w-[350px] h-[490px] rounded border-[#E8E8EA] shadow-lg pt-4 pl-1">
      <div>
        <img
          className="w-[340px] h-[240px] rounded-md"
          src="https://pohcdn.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Zhangjiajie-National-Forest-Park.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-14 px-4 py-4">
        <div className="font-extrabold">2,380,000₮</div>
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
        <div className="text-[24px]">Аватар тэнгэрийн хаалга</div>
      </div>
      <div className="flex flex-col px-3">
        <div className="flex gap-2 ">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            Тэнгэрийн хаалга
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            Гранд канёон шилэн гүүр
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            Аватар уулс
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            99нугачаат зам
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Check />
          </div>
          <div className="text-[12px] font-extrabold text-green-700">
            хамгийн урт шилэн бүхээг
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
