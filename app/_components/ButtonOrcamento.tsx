import { Button } from "./ui/button";

type ButtonOrcamento = {
  text: string;
};

const ButtonOrcamento = ({ text }: ButtonOrcamento) => {
  return (
    <a href="https://wa.me/41996394174">
      <Button className="bg-gradient-to-r from-[#3F5259] to-[#888C80] w-60 h-16 rounded-full mt-5 font-bold">
        {text}
      </Button>
    </a>
  );
};

export default ButtonOrcamento;
