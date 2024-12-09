import Image from "next/image";
import CarouselWhy from "./_components/CarousselWhy";
import ButtonOrcamento from "./_components/ButtonOrcamento";
import CarouselServices from "./_components/CarousselServices";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="bg-[#01094F] h-full">
      <Header />

      <main className="flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center h-[300px]">
          <Image
            src="/main-image.png"
            alt="image from services concluded"
            width={600}
            height={300}
            className="z-20 absolute right-3"
          />
          <Image
            src={"rectangle.svg"}
            alt="rectangle"
            width={350}
            height={350}
            className=" z-10"
          />
        </div>

        <h1 className="text-2xl font-bold text-white text-center mt-10">
          ⛵ Sua marca navegando em um mar de possibilidades!
        </h1>

        <ButtonOrcamento text="CRIE SUA FAIXADA" />

        <div className="w-[350px] h-[80px] bg-gradient-to-r from-[#01094F] to-[#003399]  rounded-full flex flex-1 mt-10 p-5">
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
          <div className="h-[270px]">
            <Image
              src={"/maremidia.png"}
              alt="Logo"
              width={300}
              height={100}
              className="flex justify-center"
            />
          </div>

          <p className="text-xl text-center text-white font-semibold ml-4 mr-4 mb-10">
            Somos a Maré Mídia, uma empresa especializada em comunicação visual
            para empresas. Com anos de experiência e uma equipe altamente
            capacitada, transformamos fachadas em verdadeiras obras de arte.
            Utilizando materiais de alta qualidade como ACM, PVC e acrílico,
            criamos placas personalizadas que refletem a identidade da sua
            marca. Nossa missão é oferecer soluções completas e inovadoras,
            desde o design até a instalação, garantindo a satisfação dos nossos
            clientes.
          </p>
        </div>

        <div>
          <h1 className="mt-7 text-3xl font-bold text-white text-center">
            Por que escolher a
            <span className="text-[#FFD700]"> Maré Mídia</span>?
          </h1>

          <div className="flex items-center justify-center mt-5">
            <CarouselWhy />
          </div>

          <div className="flex justify-center">
            <ButtonOrcamento text="FAÇA SEU ORÇAMENTO" />
          </div>
        </div>

        <CarouselServices />
        <Footer />
      </main>
    </div>
  );
}
