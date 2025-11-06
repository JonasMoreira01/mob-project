export function Frame7() {
  return (
    // Seção principal com a imagem de fundo de papel amassado
    // Ajuste 'bg-cover' ou 'bg-contain' e 'bg-center' conforme a sua imagem
    <section 
      className="w-full py-24 sm:py-32 bg-cover bg-center" 
      style={{ backgroundImage: "url('/cramp-paper-bg.png')" }} // Substitua pelo caminho correto da sua imagem
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <h2 className="text-center text-5xl italic lg:text-6xl text-[#2A3071] mb-16">
          Prazer, <strong className="bg-[#C88FB3] px-2 py-1">Pâmela Schitine!</strong>
        </h2>

        {/* Container principal de conteúdo: Imagem + Texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna da Esquerda: Imagem */}
          <div className="flex justify-center lg:justify-end">
            {/* O card da imagem com borda e sombra */}
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden">
              {/* Substitua o `src` pela sua imagem da Pâmela */}
              <img
                src="/pamelaschitine.png"
                alt="Pâmela Schitine"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Coluna da Direita: Textos de Descrição */}
          <div className="text-[#994C88] font-medium italic space-y-8 lg:pr-12"> {/* pr-12 para dar um respiro da borda direita */}
            <p className="text-xl leading-relaxed">
              Casada, Mãe, Católica e Bióloga, Pâmela é idealizadora das formações
              "De bem com meu ciclo", "Método de Ovulação Billings para Iniciantes"
              e do Aprofundamento "Sede Fecundos".
            </p>
            <p className="text-xl leading-relaxed">
              É graduada desde 2015 em licenciatura e bacharelado pela Universidade
              Federal de São João Del Rei, e pós-graduada desde 2016 em Bioética,
              pela faculdade Canção Nova.
            </p>
            <p className="text-xl leading-relaxed">
              Instrutora do Método de Ovulação Billings (MOB) certificada pelo
              CENPLAFAM desde 2017, acompanha mulheres e casais em todo Brasil,
              promovendo a divulgação do método ministrando palestras, além de
              seu ótimo alcance nas redes sociais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}