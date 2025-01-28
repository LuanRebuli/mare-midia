"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AbouthMare = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Considera mobile se largura for menor que 1024px
    };

    handleResize(); // Executa uma vez
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
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
      ) : (
        <div className="flex flex-row items-center">
          <div className="ml-5">
            <Image
              src={"/maremidia.png"}
              alt="Logo"
              width={600}
              height={600}
              className="flex justify-center"
            />
          </div>

          <p className="text-2xl text-center text-white font-semibold ml-4 mr-20 mb-10 w-[1000px]">
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
      )}
    </>
  );
};

export default AbouthMare;
