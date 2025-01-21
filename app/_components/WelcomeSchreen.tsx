import Image from "next/image";
import ButtonOrcamento from "./ButtonOrcamento";

const WelcomeSchreen = () => {
  return (
    <>
      {/* Mobile Schreen */}
      <div className="mobile:block laptop:hidden">
        <div className="relative flex items-center justify-center h-[300px]">
          <Image
            src="/main-image.png"
            alt="imagem dos serviços concluídos"
            width={600}
            height={300}
            className="z-20 absolute right-3"
          />
          <Image
            src={"rectangle.svg"}
            alt="retângulo"
            width={350}
            height={350}
            className="z-10"
          />
        </div>

        <h1 className="text-2xl font-bold text-white text-center mt-10 ">
          ⛵ Sua marca navegando em um mar de possibilidades!
        </h1>

        <ButtonOrcamento text="CRIE SUA FAIXADA" />
        <div className="w-[350px] h-[80px] bg-gradient-to-r from-[#01094F] to-[#003399] rounded-full flex flex-1 mt-10 p-5 justify-center items-center">
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
      </div>

      {/* Desktop Schreen */}
      <div className="mobile:hidden laptop:block">
        <div className="grid grid-cols-2 w-full">
          <div className="ml-24 mt-24">
            <h1 className="text-4xl font-bold text-white text-center ">
              ⛵ Sua <span className="text-[#FFD700]">marca</span> navegando em
              um mar de
              <span className="text-[#FFD700]"> possibilidades</span>!
            </h1>

            <h2 className="text-white font-semibold text-center text-xl mt-5">
              Placas personalizadas de ACM, PVC e Acrílico. <br /> Crie a placa
              dos seus sonhos para o seu negocio.
            </h2>
            <div className="mt-5">
              <ButtonOrcamento text="CRIE SUA FAIXADA" />
            </div>
          </div>
          <div className="mb-8">
            <Image
              src="/main-image-pc.png"
              alt="imagem dos serviços concluídos"
              width={600}
              height={300}
              className="ml-10 "
            />
          </div>
        </div>

        <div className="h-[200px] flex items-center justify-center">
          <div className="w-[1272px] h-[167px] bg-gradient-to-r from-[#30366b]  to-[#000746] rounded-full flex items-center">
            <div className="flex-1 flex items-center justify-center">
              <a
                href="https://www.instagram.com/nautica_midia/"
                className="flex-1 flex items-center justify-center"
                target="_blank"
              >
                <Image
                  src={"/instagramicon.png"}
                  alt="Logo"
                  width={98}
                  height={97}
                />
                <div className="ml-5">
                  <h1 className="text-white text-3xl font-bold">Instagram</h1>
                  <p className="text-white text-xl ">@nautica_midia</p>
                </div>
              </a>
            </div>

            <div className="w-[2px] h-[80%] bg-white opacity-50 "></div>

            <div className="flex-1 flex items-center justify-center">
              <a
                href="https://wa.me/41996394174"
                className="flex-1 flex items-center justify-center"
                target="_blank"
              >
                <Image
                  src={"/whatsappicon.svg"}
                  alt="Logo"
                  width={120}
                  height={120}
                />
                <div className="ml-5">
                  <h1 className="text-white text-3xl font-bold">Whatsapp</h1>
                  <p className="text-white text-xl ">(41) 99639-4174</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSchreen;
