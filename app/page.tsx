import { MenuIcon } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./_components/ui/sheet";
import CarouselWhy from "./_components/CarousselWhy";
import ButtonOrcamento from "./_components/ButtonOrcamento";

export default function Home() {
  return (
    <div className="bg-[#3F5259] h-full p-5">
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

      <main className="flex flex-col items-center justify-center">
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

        <ButtonOrcamento text="CRIE SUA FAIXADA" />

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

        <div className="flex flex-col items-center">
          <h1 className="mt-16 text-3xl font-bold text-white">Sobre</h1>

          <Image
            src={"nautica-logo.svg"}
            alt="Logo"
            width={395}
            height={320}
            className="mt-2 ml-24"
          />

          <p className="text-xl text-center text-white font-semibold ml-4 mr-4 mb-10">
            Somos a Náutica Mídia, uma empresa especializada em comunicação
            visual para empresas. Com anos de experiência e uma equipe altamente
            capacitada, transformamos fachadas em verdadeiras obras de arte.
            Utilizando materiais de alta qualidade como ACM, PVC e acrílico,
            criamos placas personalizadas que refletem a identidade da sua
            marca. Nossa missão é oferecer soluções completas e inovadoras,
            desde o design até a instalação, garantindo a satisfação dos nossos
            clientes.
          </p>
        </div>

        <div>
          <h1 className="mt-10 text-3xl font-bold text-white text-center">
            Por que escolher a
            <span className="text-gray-500"> Naútica Midia</span>?
          </h1>

          <div className="flex items-center justify-center mt-5">
            <CarouselWhy />
          </div>

          <div className="flex justify-center">
            <ButtonOrcamento text="FAÇA UM ORÇAMENTO" />
          </div>
        </div>

        <div className=""></div>
      </main>
    </div>
  );
}
