import { Button } from "@inmediam/ui";

export function Frame5() {
  return (
    <section className="w-full bg-[#F4E2EE] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna da Esquerda: Textos e Botão */}
          <div className="text-left">
            <h2 className="text-5xl lg:text-6xl italic font-medium text-[#2A3071] leading-tight">
              Precisando de <br /> uma <strong>instrutora?</strong>
            </h2>

            <p className="mt-2 text-2xl italic font-medium text-[#843372]">
              Minhas instrutoras estão <br />
              <span className="relative italic inline-block">
                prontas para te atender!
                <span
                  className="
                    absolute 
                    -bottom-2 
                    left-0 
                    w-full 
                    h-1 
                    bg-[#843372]
                  "
                ></span>
              </span>
            </p>
            {/* --- FIM DA ALTERAÇÃO --- */}

            <p className="mt-8 text-2xl italic text-[#2A3071] font-medium max-w-lg leading-relaxed">
              Adquira um atendimento individual para tirar suas dúvidas sobre o
              seu gráfico, observações e anotações do Método Billings.
            </p>
            <Button className="mt-10 bg-[#2A3071] text-white font-bold text-lg py-6 px-8 rounded-xl hover:bg-opacity-90 transition-colors">
              QUERO UM ATENDIMENTO INDIVIDUAL
            </Button>
          </div>

          {/* Coluna da Direita: Imagem */}
          <img src="instrutoras.png" alt="Instrutoras" />
        </div>
      </div>
    </section>
  );
}
