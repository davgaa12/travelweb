import { Face } from "../icons/Face";
import { Ig } from "../icons/Ig";
import { Loca } from "../icons/Loca";
import { Wechat } from "../icons/Wechat";

export const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-full">
        <div className="w-full md:h-[300px]  h-[120px]  bg-[#E8E8EA] flex justify-center md:gap-16 md:py-14  gap-[25px] py-[22px]  ">
          <div className="md:flex flex-col md:gap-4 gap-[6px] hidden ">
            <div className="md:text-[28px] text-[11px] font-bold text-center">
              GoGo Travel
            </div>
            <div className="text-[#696A75] md:text-[16px] text-[6px] md:w-[200px] w-[80px] text-center">
              Сайн байцгаан уу? Таны аялалын зөвлөх. Манайхыг сонгон
              үйлчлүүлсэнд баярлалаа.
            </div>
          </div>
          <div className="md:h-[170px] h-[68px] md:w-[3px] w-[1px] bg-[#7f7f7f] hidden"></div>
          <div className=" flex flex-col md:gap-2 md:pt-3 gap-[3px] pt-[5px]">
            <div className="flex md:gap-2 gap-[3px]">
              <div>
                <img
                  className="md:w-[24px] md:h-[24px] w-[9px] h-[9px]"
                  src="https://cdn.hugeicons.com/icons/call-02-stroke-rounded.svg"
                  alt=""
                />
              </div>
              <div className="text-[#696A75] md:text-[16px] text-[9px]">
                (+976) 8011-3295
              </div>
            </div>
            <div className="flex md:gap-2 gap-[3px]">
              <div className="md:w-[24px] md:h-[24px] w-[9px] h-[9px]">
                <Ig />
              </div>
              <div className="text-[#696A75] md:text-[16px] text-[9px]">
                gogo_travel_agency
              </div>
            </div>
            <div className="flex md:gap-2 gap-[3px]">
              <div className="md:w-[24px] md:h-[24px] w-[9px] h-[9px]">
                <Wechat />
              </div>
              <div className="text-[#696A75] md:text-[16px] text-[9px]">
                dukaa
              </div>
            </div>
            <div className="flex md:gap-2 gap-[3px]">
              <div className="md:w-[24px] md:h-[24px] w-[9px] h-[9px]">
                <Face />
              </div>
              <div className="text-[#696A75] md:text-[16px] text-[9px]">
                Go-Go Travel
              </div>
            </div>
          </div>
          <div className="md:h-[170px] h-[68px] md:w-[3px] w-[1px] bg-[#7f7f7f] "></div>
          <div>
            <div className="md:w-[24px] md:h-[24px] w-[9px] h-[9px]">
              <Loca />
            </div>
            <div className="md:w-[200px] w-[80px] text-[#696A75] md:text-[16px] text-[9px]">
              ancsc sfcas fsaf casf evc wef cwe cw ac ew fc sa fwe f f f
              wefewfgehrh wh weh h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
