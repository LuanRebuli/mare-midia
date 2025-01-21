import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-8 mt-36">
      <Image
        src={"/maremidiafooter.png"}
        alt="footer"
        width={270}
        height={100}
      />
      <h1 className="text-xl font-bold text-white text-center mt-5 ">
        ⛵ Sua marca navegando em um mar de possibilidades!
      </h1>

      <a href="https://www.instagram.com/nautica_midia/">
        <Button size={"icon"} className="bg-white rounded-full mt-5">
          <Image
            src={"/instagram.png"}
            alt="instagram"
            width={50}
            height={50}
            className="bg-slate-500 rounded-full"
          />
        </Button>
      </a>

      <h1 className="font-bold text-center text-sm text-white mt-8 pr-2 pl-2">
        2024 © Maré Mídia -{" "}
        <a
          href="https://wa.me/41920048586"
          className="text-gray-400 hover:text-blue-500"
        >
          BY Luan Rebuli
        </a>{" "}
        - ALL RIGHTS RESERVED{" "}
      </h1>
    </div>
  );
};

export default Footer;
