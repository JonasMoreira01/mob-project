// Arquivo: Frame1Button.tsx (ou onde ele estiver definido)

import { Button } from "@inmediam/ui";
// 1. Importe o tipo 'LucideIcon' (ou 'ElementType' do 'react')
import { LucideIcon } from "lucide-react";

interface Frame1ButtonProps {
  icon: LucideIcon; // 2. Mude o tipo da prop para aceitar um componente
  textDown: string;
  textUp: string;
  bgColor?: string;
  hoverBgColor?: string;
}

// 3. Renomeie a prop 'icon' para 'IconComponent' na desestruturação
export function Frame1Button({
  icon: IconComponent,
  textDown,
  textUp,
  bgColor,
  hoverBgColor
}: Frame1ButtonProps) {
  const bgColorHex = bgColor ?? "#2E3A87";
  const hoverBgColorHex = hoverBgColor ?? "#5264d8ff";

  return (
    <Button className={`flex transform items-center justify-center space-x-4 rounded-2xl bg-[${bgColorHex}] p-14 text-white opacity-90 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[${hoverBgColorHex}]`}>
      {/* Icon */}
      <div className="flex-shrink-0">
        {/* 4. Renderize o 'IconComponent' passando as classes */}
        <IconComponent className="h-14 w-14 text-white" />
      </div>
      {/* Text Block */}
      <div className="text-left">
        <span className="block text-lg leading-none text-[#C88FB3]">
          {textUp}
        </span>
        <span className="leading-1 block text-2xl font-bold">{textDown}</span>
      </div>
    </Button>
  );
}
