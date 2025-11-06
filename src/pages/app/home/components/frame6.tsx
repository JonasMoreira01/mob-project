import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@inmediam/ui";

// Dados dos cards
const posts = [
  {
    title: "O método natural é eficaz e tem respaldo científico",
    imageUrl:
      "https://pamelamob.com/wp-content/uploads/2023/10/metodo-natural-pamela-schitine.jpg",
    label: "Método Billings",
    link: "https://pamelamob.com/o-metodo-natural-e-eficaz-e-tem-respaldo-cientifico/",
  },
  {
    title:
      "Método Billings: método natural para engravidar ou espaçar uma gravidez",
    imageUrl:
      "https://pamelamob.com/wp-content/uploads/2023/10/metodo-billings-pamela-schitine.jpg",
    label: "Método Billings",
    link: "https://pamelamob.com/metodo-billings-tecnica-natural-para-engravidar-ou-evitar-a-gravidez/",
  },
  {
    title: "Relato de Parto – Cecília",
    imageUrl:
      "https://pamelamob.com/wp-content/uploads/2024/01/relato-de-parto-pamela-schitine.jpg",
    label: "Maternidade",
    link: "https://pamelamob.com/relato-de-parto-cecilia/",
  },
  {
    title: "A história por trás do MOB",
    imageUrl:
      "https://pamelamob.com/wp-content/uploads/2023/10/john-billings.jpg",
    label: "Método Billings",
    link: "https://pamelamob.com/historia-do-billings/",
  },
  {
    title: "Método de Ovulação Billings",
    imageUrl:
      "https://pamelamob.com/wp-content/uploads/2023/09/metodo-billings.jpg",
    label: "Método Billings",
    link: "https://pamelamob.com/metodo-de-ovulacao-billings/",
  },
  {
    title: "Papa envia mensagem pelos 70 anos do método de Ovulação Billings",
    imageUrl:
      "https://pamelamob.com/wp-content/uploads/2023/10/papa-franscisco-70-anos-do-mob.jpg",
    label: "Método Billings",
    link: "https://pamelamob.com/70-anos-do-metodo-de-ovulacao-billings/",
  },
];

export function Frame6() {
  return (
    <section className="w-full px-32 bg-[#2A3071] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <h2 className="text-center text-5xl text-white italic font-medium mb-16">
          <span className="bg-[#994C88] px-4 py-1">Para aprender</span> ainda
          mais!
        </h2>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent className="-ml-4">
            {posts.map((post, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
              >
                <a
                  href={post.link}
                  className="text-[#C88FB3] h-full bg-re hover:text-[#994C88] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white p-2 shadow-lg overflow-hidden h-full flex flex-col">
                    {/* Imagem */}
                    <div className="relative">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute uppercase top-4 right-4 bg-[#2A3071] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.label}
                      </span>
                    </div>

                    {/* Corpo */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <h3 className="text-2xl font-bold text-[#2A3071] flex-grow">
                        {post.title}
                      </h3>
                      <span>Leia mais »</span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Botões customizados */}
          <CarouselPrevious className="absolute -left-24 top-1/2 -translate-y-1/2 bg-[#C88FB3] hover:bg-[#994C88] text-white w-12 h-12 rounded-full border-none flex items-center justify-center transition" />
          <CarouselNext className="absolute -right-24 top-1/2 -translate-y-1/2 bg-[#C88FB3] hover:bg-[#994C88] text-white w-12 h-12 rounded-full flex items-center border-none justify-center transition" />
        </Carousel>
      </div>
    </section>
  );
}
