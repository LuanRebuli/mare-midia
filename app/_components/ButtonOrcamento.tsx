import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

type ButtonOrcamento = {
  text: string;
};

const ButtonOrcamento = ({ text }: ButtonOrcamento) => {
  return (
    <div className="flex justify-center items-center">
      <a href="https://wa.me/41996394174">
        <Button className="bg-[#FFD700] w-60 h-16 rounded-full mt-5 font-bold text-base ">
          <ArrowRight /> {text}
        </Button>
      </a>
    </div>
  );
};

export default ButtonOrcamento;
