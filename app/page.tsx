import Image from "next/image";
import CarouselWhy from "./_components/CarousselWhy";
import ButtonOrcamento from "./_components/ButtonOrcamento";
import CarouselServices from "./_components/CarousselServices";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import WelcomeSchreen from "./_components/WelcomeSchreen";

export default function Home() {
  return (
    <div className="bg-[#01094F] h-full">
      <Header />

      <main className="flex flex-col items-center justify-center">
        <WelcomeSchreen />

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

        <div>
          <h1 className="mt-20 text-3xl font-bold text-white text-center">
            Serviços
          </h1>
          <div className="w-full h-[2px] bg-[#FFD700] mt-2 mb-2 opacity-50"></div>
          <p className="text-xl text-white text-center">Já feitos por nós</p>
          <CarouselServices />
        </div>
        <Footer />
      </main>
    </div>
  );
}
