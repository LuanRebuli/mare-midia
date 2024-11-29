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
  url: string;
}

// Objeto contendo os carrosséis
const carousel: { [key: string]: CarouselWhyProps[] } = {
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
};

export default function CarouselWhy() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Object.entries(carousel).map(([carouselKey, items]) =>
          items.map((item, index) => (
            <CarouselItem key={`${carouselKey}-${index}`}>
              <div className="p-1">
                <Card className="bg-gradient-to-r from-neutral-900 to-gray-800 rounded-3xl border-none">
                  <CardContent className="flex flex-col justify-center items-center p-6 w-[330px] h-[560px] ">
                    <Image
                      src={item.url}
                      alt={item.url}
                      width={262}
                      height={213}
                      className="rounded-full mb-3"
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
  );
}
