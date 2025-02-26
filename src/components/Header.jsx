import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="bg-white h-[100px] w-full flex items-center px-4 shadow-md fixed top-0 z-50 justify-center">
      <img alt="logo" src={logo} className="h-[80px] w-auto" />
      <p className="text-4xl text-black font-['Kanit'] ml-2">Guess the Flag</p>
    </div>
  );
}
