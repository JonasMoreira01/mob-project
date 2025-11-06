import { BookDownloadIcon } from "@/components/BookDownloadIcon";
import { FlowerIcon } from "@/components/FlowerIcon";
import { MobLogo } from "@/components/MobLogo";
import { UterusIcon } from "@/components/UterusIcon";
import { Frame1Button } from "./frame-1-button";

export function Frame1() {
  return (
    <>
      <div className="flex-grow flex items-center justify-center">
        <div className="flex w-full items-end justify-center sm:justify-end px-4 sm:px-8 md:px-16 xl:px-32">
          {/* Text Content */}
          <div className="flex justify-center z-10">
            <h1 className="text-5xl lg:text-[4rem] font-bold text-[#2E3A87] italic leading-none">
              <span className="text-4xl lg:text-5xl text-center text-[#994C88] italic font-bold block sm:text-3xl md:text-4xl lg:text-5xl">
                Tudo sobre
              </span>
              FERTILIDADE
            </h1>
          </div>

          {/* Flower Icon */}
          <div className="flex-shrink-0 -ml-24 -mb-16 hidden sm:block">
            <FlowerIcon />
          </div>
        </div>
      </div>

      {/* CTA Buttons (at the bottom) */}
      <div className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Frame1Button 
            icon={UterusIcon}
            textUp="O que é o Método de"
            textDown="Ovulação Billings?"
          />

          <Frame1Button 
            icon={MobLogo}
            textUp="O que é o Método de"
            textDown="Ovulação Billings?"
          />

          <Frame1Button 
            icon={BookDownloadIcon}
            textUp="E-book"
            textDown="GPS do Meu Ciclo"
            bgColor="#8A4D8A"
            hoverBgColor="#bd69bd"
          />
        </div>
      </div>
    </>
  );
}
