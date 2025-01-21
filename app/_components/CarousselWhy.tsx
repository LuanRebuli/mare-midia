import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface CarouselWhyProps {
  title: string;
  url: string;
  text: string;
}

// Objeto contendo os carrosséis
const carousel: { [key: string]: CarouselWhyProps[] } = {
  firstcarousel: [
    {
      title: "ORÇAMENTO",
      url: "/firstcarousellimg.png",
      text: "Após uma conversa detalhada sobre suas ideias, apresentamos um projeto personalizado e um orçamento transparente. Realizamos uma visita técnica para confirmar as medidas e garantir sua total satisfação. Com a sua aprovação, formalizamos um contrato de serviço, iniciando assim uma parceria de sucesso.",
    },
  ],
  secondcarousel: [
    {
      title: "CoreDraw",
      url: "/secondcarousel.png",
      text: "Utilizamos o CorelDRAW para criar um layout preciso e detalhado, garantindo que a sua logo e design sejam reproduzidos com perfeição na sua fachada.",
    },
  ],
  tercarousel: [
    {
      title: "Processo",
      url: "/tercarousel.png",
      text: "Após feito a conclusão do layout, começamos o corte de letras e logotipo com sua devida cor e preparação das estruturas. Após isso começamos a instalação no local com as estruturas de aço e colocando as placas.",
    },
  ],
  fourcarousel: [
    {
      title: "Conclusão",
      url: "/fourcarousel.png",
      text: "Finalizamos a instalação com precisão, cuidando de cada detalhe, como a instalação de LEDs, para garantir um resultado impecável e que atraia a atenção de seus clientes.",
    },
  ],
};

export default function CarouselWhy() {
  return (
    <>
      {/* MOBILE LAYOUT */}
      <Carousel className="w-full max-w-xs mobile:block laptop:hidden">
        <CarouselContent>
          {Object.entries(carousel).map(([carouselKey, items]) =>
            items.map((item, index) => (
              <CarouselItem key={`${carouselKey}-${index}`}>
                <div className="p-1">
                  <Card className="bg-gradient-to-r from-[#01094F] to-[#01214F] rounded-3xl">
                    <CardContent className="flex flex-col justify-center items-center p-8 w-[313px] h-[560px] ">
                      <Image
                        src={item.url}
                        alt={item.title}
                        width={262}
                        height={213}
                        className="rounded-full mb-3"
                      />
                      <span className="text-2xl font-bold text-white">
                        {item.title}
                      </span>

                      <p className="text-base text-center text-white mt-5 mb-5">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* DESKTOP LAYOUT */}
      <Carousel className="w-[1350px] mobile:hidden laptop:block">
        <CarouselContent>
          {Object.entries(carousel).map(([carouselKey, items]) =>
            items.map((item, index) => (
              <CarouselItem
                key={`${carouselKey}-${index}`}
                className="basis-1/4 w-[500px]"
              >
                <div className="p-1">
                  <Card className="bg-gradient-to-r from-[#01094F] to-[#01214F] rounded-3xl ">
                    <CardContent className="flex flex-col justify-center items-center p-8 w-[313px] h-[560px] ">
                      <Image
                        src={item.url}
                        alt={item.title}
                        width={262}
                        height={213}
                        className="rounded-full mb-3"
                      />
                      <span className="text-2xl font-bold text-white">
                        {item.title}
                      </span>

                      <p className="text-base text-center text-white mt-5 mb-5">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
      </Carousel>
    </>
  );
}
