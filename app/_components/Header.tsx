import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-center h-[220px] ">
      <Image src={"/maremidia.png"} alt="Logo" width={220} height={212} />
    </header>
  );
};

export default Header;
