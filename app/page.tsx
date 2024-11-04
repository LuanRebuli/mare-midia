import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#3F5259] h-full">
      <header className="flex flex-row justify-between items-center">
        <Image
          src={"nautica-logo.svg"}
          alt="Logo"
          width={258}
          height={137}
          className="mt-2"
        />

        <Sheet>
          <SheetTrigger asChild>
            <button className="mr-4 bg-transparent">
              <MenuIcon color="gray" size={40} className="active:opacity-55" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Navegue pelas abas</SheetTitle>
            <SheetHeader></SheetHeader>
          </SheetContent>
        </Sheet>
      </header>

      <section className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/main-image.png"
            alt="image from services concluded"
            width={600}
            height={600}
            className="mr-10"
          />
          <Image
            src={"rectangle.svg"}
            alt="rectangle"
            width={350}
            height={350}
            className="absolute top-56 left-5"
          />
        </div>

        <h1 className="text-2xl font-bold text-white text-center">
          ⛵ Sua marca navegando em um mar de possibilidades!
        </h1>

        <Button className="bg-gradient-to-r from-[#3F5259] to-[#888C80] w-60 h-14 rounded-full mt-5">
          CRIE SUA FAIXADA
        </Button>

        <div className="w-[350px] h-[80px] bg-gradient-to-r from-[#3F5259F2] to-[#0D1F26] rounded-full flex flex-1 mt-10 p-5">
          <div>
            <Image
              src={"whatsappicon.svg"}
              width={89}
              height={63}
              alt="whatsapp"
              className="mr-6 ml-3"
            />
          </div>
          <div>
            <p className="font-bold text-2xl text-white">WhatsApp</p>
            <p className="text-gray-300">(41) 99639-4174</p>
          </div>
        </div>

        <div>
          <p className="mt-16">Sobre</p>
        </div>
      </section>
    </div>
  );
}
