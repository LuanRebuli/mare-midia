import CarouselWhy from "./_components/CarousselWhy";
import ButtonOrcamento from "./_components/ButtonOrcamento";
import CarouselServices from "./_components/CarousselServices";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import WelcomeSchreen from "./_components/WelcomeSchreen";
import AbouthMare from "./_components/AbouthMare";

export default function Home() {
  return (
    <div className="bg-[#01094F] h-full">
      <Header />

      <main className="flex flex-col items-center justify-center">
        <WelcomeSchreen />

        <AbouthMare />

        <div>
          <h1 className="mt-7 text-3xl font-bold text-white text-center">
            Por que escolher a
            <span className="text-[#FFD700]"> Maré Mídia</span>?
          </h1>

          <div className="flex items-center justify-center mt-5">
            <CarouselWhy />
          </div>

          <div className="flex justify-center mt-5">
            <ButtonOrcamento text="FAÇA SEU ORÇAMENTO" />
          </div>
        </div>

        <div>
          <h1 className="mt-20 mb-10 text-3xl font-bold text-white text-center">
            Serviços Concluidos
          </h1>
          <div className="w-full h-[2px] bg-[#FFD700] mt-2 mb-2 opacity-50"></div>
          <CarouselServices />
        </div>
        <Footer />
      </main>
    </div>
  );
}
