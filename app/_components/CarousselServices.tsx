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
      url: "/algomais.png",
    },
  ],
  secondcarousel: [
    {
      url: "/saci.png",
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
      {/* MOBILE LAYOUT */}
      <Carousel className="w-full max-w-xs mobile:block laptop:hidden mt-7">
        <CarouselContent>
          {Object.entries(carousel).map(([carouselKey, items]) =>
            items.map((item, index) => (
              <CarouselItem key={`${carouselKey}-${index}`}>
                <Card className="bg-transparent border-none flex flex-col justify-center items-center">
                  <CardContent className="flex  justify-center items-center p-6 w-[340px] h-[300px] ">
                    <Image
                      src={item.url}
                      alt={item.url}
                      width={400}
                      height={500}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* DESKTOP LAYOUT */}
      <div className="w-[1750px] mobile:hidden laptop:block mt-24">
        <div className="grid grid-cols-5 gap-14">
          {Object.entries(carousel).map(([carouselKey, items]) =>
            items.map((item, index) => (
              <Card
                className="bg-transparent border-none flex flex-col justify-center items-center"
                key={`${carouselKey}-${index}`}
              >
                <CardContent className="flex  justify-center items-center p-6 w-[340px] h-[300px] ">
                  <Image
                    src={item.url}
                    alt={item.url}
                    width={500}
                    height={500}
                  />
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
}
