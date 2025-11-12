import { Button, Card, CardContent, CardTitle } from "@inmediam/ui";
import ebook from "@/assets/ebook.png";
import instrutora_on from "@/assets/instrutora_on.png";
import instrutora from "@/assets/instrutora.png";

export function Frame4() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-row justify-center gap-28">
        {/* Card 1: E-book GPS do Meu Ciclo */}
        <Card className="flex flex-col justify-between bg-[#DAB0CA] border-2 border-[#994C88] rounded-2xl p-8 shadow-sm w-1/3">
          {/* Conteúdo do Card */}
          <CardTitle>
            <span className="text-xl italic text-[#994C88] font-semibold">
              E-book
            </span>
            <h3 className="text-3xl italic font-bold text-[#2A3071]">
              GPS do Meu Ciclo
            </h3>
          </CardTitle>
          <CardContent className="px-0 py-1">
            <p className="text-lg text-[#2A3071] leading-relaxed">
              Acesse o <strong>passo a passo</strong> mais simples, natural e
              seguro para <strong>monitorar seu ciclo menstrual</strong>, a fim
              de adiar ou alcançar a sua gestação.
            </p>

            {/* IMAGEM PLACEHOLDER */}
            <div className="mt-8 text-center">
              {/* Substitua o `src` pela sua imagem */}
              <img
                src={ebook}
                alt="E-book GPS do Meu Ciclo em celular e tablet"
                className="mx-auto h-[10rem]"
              />
            </div>

            {/* Botão */}
            <Button className="mt-8 w-full bg-[#2A3071] text-white font-bold text-lg py-6 rounded-xl hover:bg-opacity-90 transition-colors">
              QUERO ADQUIRIR O E-BOOK
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between bg-[#DAB0CA] border-2 border-[#994C88] rounded-2xl p-8 shadow-sm w-1/3">
          {/* Conteúdo do Card */}
          <CardTitle>
            <div className="h-20">
              {/* Substitua o `src` pela sua imagem de título */}
              <img
                src={instrutora_on}
                alt="A Instrutora tá On!"
                className="h-full"
              />
            </div>
          </CardTitle>
          <CardContent className="px-0 py-1">
            <div className="text-center">
              {/* Substitua o `src` pela sua imagem */}
              <img
                src={instrutora}
                alt="Instrutora segurando celular"
                className="mx-auto rounded-xl h-[12rem]"
              />
            </div>

            <p className="text-lg my-4 text-[#2A3071] leading-relaxed">
              Participe do quadro a <strong>Instrutora tá On</strong>, enviando
              a sua dúvida sobre o Método Billings, fertilidade ou qualquer
              outro tema
            </p>

            {/* Botão */}
            <Button className=" w-full bg-[#994C88] text-white font-bold text-lg py-6 rounded-xl hover:bg-opacity-90 transition-colors">
              QUERO ENVIAR A MINHA DÚVIDA
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
