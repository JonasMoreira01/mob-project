export function Frame2() {
  return (
    <div className="w-full">
      {/* Top Section - Light Purple/Pink Background */}
      <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-purple-200 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-48 max-w-7xl">
          {/* Main Title */}
          <div className="mb-12 flex flex-col items-center justify-center text-center">
            <h2 className="mb-2 text-[2rem] font-bold leading-none text-[#994C88]">
              O que é o Método de
            </h2>
            <h3 className="relative z-10 text-[2.5rem] font-bold leading-none text-[#2A3071]">
              Ovulação Billings?
            </h3>
            <div className="mt-2 h-1 w-64 transform bg-[#994C88]"></div>
          </div>

          {/* Content Area */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Side - Video Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="relative h-0 w-full pb-[56.25%]">
                  <iframe
                    className="absolute left-0 top-0 h-full w-full"
                    src="https://www.youtube.com/embed/RBwGiJfHk5o?si=Dcp3788zA9pwdnBm"
                    title="Método de Ovulação Billings"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Side - Text Explanations */}
            <div className="order-1 space-y-6 lg:order-2">
              <p className="text-lg leading-relaxed text-[#2A3071]">
                O <strong>Método de Ovulação Billings (MOB)</strong> é um método
                científico, natural e eficaz para conhecimento da fertilidade
                feminina, com intuito de <strong>espaçamento</strong> ou{" "}
                <strong>alcance de gestação</strong>. Basicamente, ele se baseia
                na observação diária da sensação da vulva e aparência do muco
                cervical.
              </p>

              <p className="text-lg leading-relaxed text-[#2A3071]">
                É um método natural porque se baseia apenas na observação da
                sensações do próprio corpo. Portanto, não é preciso o uso de
                nenhum dispositivo artificial. Só é preciso a observação atenta,
                papel e caneta! Ou seja, é um método que não tem impacto na
                saúde.
              </p>

              <p className="text-lg leading-relaxed text-[#2A3071]">
                A eficácia dele foi comprovada em 98% para o espaçamento de
                gestações, caso a usuária seja devidamente acompanhada por
                instrutora.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark Blue Background */}
      <div className="relative mb-10 bg-[#2A3071] px-4 py-12 sm:px-6 lg:px-[8rem]">
        <div className="mx-auto flex max-w-7xl items-center justify-end text-center">
          {/* Woman's Image */}
          <img
            src="/woman-smiling.png"
            alt="Mulher sorridente - instrutora do Método de Ovulação Billings"
            className="absolute -bottom-10 left-0 z-10 hidden h-[180%] w-auto lg:block"
          />

          {/* Concluding Text */}
          <div className="order-1 lg:order-2">
            <div className="text-left text-2xl font-medium italic leading-none text-white sm:text-3xl">
              <p className="mb-4">O MOB é a ferramenta perfeita para o</p>
              <p className="mb-4">
                <strong className="bg-[#994C88] px-2 py-1 text-white">
                  autoconhecimento
                </strong>{" "}
                e <span className="font-extrabold">monitoramento da</span>
              </p>
              <p className="mb-4">
                <span className="font-extrabold">saúde feminina</span>, que
                preserva a saúde da
              </p>
              <p>
                mulher e{" "}
                <strong className="bg-[#994C88] px-2 py-1 text-white">
                  respeita o funcionamento natural
                </strong>
              </p>
              <p className="py-3">do seu corpo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
