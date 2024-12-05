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

interface CarouselServicesProps {
  url: string;
}

// Objeto contendo os carrosséis
const carousel: { [key: string]: CarouselServicesProps[] } = {
  firstcarousel: [
    {
      url: "/saci.png",
    },
  ],
  secondcarousel: [
    {
      url: "/algomais.png",
    },
  ],
  tercarousel: [
    {
      url: "/mare.png",
    },
  ],
  fourcarousel: [
    {
      url: "/mareplaca.png",
    },
  ],
  fivecarousel: [
    {
      url: "/maritima.png",
    },
  ],
  sixcarousel: [
    {
      url: "/balhuk.png",
    },
  ],
  sevencarousel: [
    {
      url: "/advogacia.png",
    },
  ],
  eightcarousel: [
    {
      url: "/karranka.png",
    },
  ],
  ninecarousel: [
    {
      url: "/ivy.png",
    },
  ],
};

export default function CarouselServices() {
  return (
    <>
      <Carousel className="w-full max-w-xs mt-10">
        <CarouselContent>
          {Object.entries(carousel).map(([carouselKey, items]) =>
            items.map((item, index) => (
              <CarouselItem key={`${carouselKey}-${index}`}>
                <div className="p-1">
                  <Card className="bg-transparent border-none">
                    <CardContent className="flex flex-col justify-center items-center p-6 w-[330px] h-[300px] ">
                      <Image
                        src={item.url}
                        alt={item.url}
                        width={370}
                        height={300}
                        className=""
                      />
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
    </>
  );
}
