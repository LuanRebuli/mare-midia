import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

type ButtonOrcamento = {
  text: string;
};

const ButtonOrcamento = ({ text }: ButtonOrcamento) => {
  return (
    <a href="https://wa.me/41996394174">
      <Button className="bg-[#FFD700] w-60 h-16 rounded-full mt-5 font-bold text-base flex items-center justify-center">
        <ArrowRight /> {text}
      </Button>
    </a>
  );
};

export default ButtonOrcamento;
