import { Button } from "@inmediam/ui";
import deBem from "@/assets/de-bem.png";
import mob from "@/assets/mob.png";
import sede from "@/assets/sede.png";

export function Frame3() {
  return (
    // O container principal continua `relative`
    <div className="relative w-full bg-[#994C88] overflow-hidden">
      {/* 1. Padding ajustado para dar espaço para a onda na PARTE DE BAIXO */}
      <div className="relative max-w-7xl mx-auto z-10 pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span>Conheça os</span>
            <span className="bg-[#2A3071] text-white px-2 ml-2">
              meus produtos
            </span>
          </h2>
        </div>

        {/* Product Cards */}
        <div className="flex justify-center items-center gap-8 mb-16">
          <img
            src={deBem}
            alt="De Bem com Meu Ciclo"
            className="h-2/3 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src={mob}
            alt="MOB para Iniciantes"
            className="h-2/3 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src={sede}
            alt="sede fecundos"
            className="h-2/3 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Bottom Section - MOB para Iniciantes Details */}
        <div className="text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            MOB para Iniciantes
          </h3>
          <Button className="bg-[#2A3071] hover:bg-[#1a1f5a] text-white px-16 py-6 rounded-xl font-bold text-lg mb-12 shadow-lg transition-all duration-300 transform hover:scale-105">
            ENTRAR NA LISTA DE ESPERA
          </Button>
          <div className="max-w-4xl mx-auto space-y-6 mb-12 text-left">
            <p className="text-white text-2xl leading-relaxed">
              O curso <strong>MOB para iniciantes</strong> é um curso completo
              para aplicação do método de Ovulação Billings.{" "}
              <strong>São 20 aulas que englobam</strong> o conteúdo desde ciclo
              menstrual, o Método de Ovulação Billings (da eficácia à prática) e
              um módulo sobre matrimônio cristão, moral sexual e paternidade
              responsável.
            </p>
            <p className="text-white text-2xl leading-relaxed">
              Após as aulas, a aluna pode{" "}
              <strong>
                agendar seu atendimento com uma das instrutoras da equipe
              </strong>
              . No valor do curso está incluso acompanhamento INDIVIDUAL com
              instrutora credenciada por até 6 meses (tempo necessário para que
              a aluna tenha autonomia).
            </p>
            <p className="text-white text-2xl leading-relaxed">
              No momento, as inscrições estão encerradas. Toque no botão abaixo
              pra entrar na lista de espera.
            </p>
          </div>
          <Button className="bg-[#2A3071] hover:bg-[#1a1f5a] text-white px-16 py-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            ENTRAR NA LISTA DE ESPERA
          </Button>
        </div>
      </div>

      {/* 2. Novo SVG posicionado na parte de baixo */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1920 1151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // 3. Altura da onda. Você pode ajustar este valor (ex: h-[300px])
          className="relative block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M428.5 154.5C117.345 154.5 9.68583 271.754 -70 385.927L-52.9959 1151H1989.5V1063.51L2009 0C1931.31 95.6341 1880.57 136.368 1571 225.5C1229.42 323.847 810.592 154.5 428.5 154.5Z"
            fill="#843372"
          />
        </svg>
      </div>
    </div>
  );
}
